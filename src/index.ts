import {
  IOptions,
  KeywordsOrSelector,
  DefaultOptions,
  search,
  IDomFormated,
} from './search'
import { markKeywords, markKeywordsWithUpdateString } from './markKeywords'
import { restoreMarked } from './restoreMarked'

interface IProps extends IOptions {
  input?: KeywordsOrSelector
}
class LocalSearch {
  private input: string | undefined
  private config: IOptions
  private current: number
  private result: IDomFormated[] = []
  private prevDomText: string = '' // 上一次被替换之前的文本
  private prevDom: IDomFormated | null // 上一个被访问过的dom及其type\
  private updateList: string[] = []
  constructor(props: IProps) {
    this.input = props.input!
    this.config = {
      useRegexp: props.useRegexp || DefaultOptions.useRegexp,
      scope: props.scope || DefaultOptions.scope,
    }
    this.current = 0
  }
  setSearch(input: KeywordsOrSelector) {
    if (!input) {
      return
    }
    this.input = input
  }
  begin() {
    if (!this.input) {
      return
    }
    restoreMarked(this.prevDom, this.prevDomText)
    this.prevDom = null
    this.prevDomText = ''
    this.current = 0
    this.updateList = []
    return search(this.input!, this.config).then((values) => {
      this.result = values
      return values
    })
  }
  next() {
    if (this.current < this.result.length || this.updateList.length > 0) {
      // 最后current将会=index
      let domObj =
        this.current === this.result.length
          ? this.result[this.current - 1]
          : this.result[this.current]
      restoreMarked(this.prevDom, this.prevDomText)
      if (this.updateList.length > 0) {
        markKeywordsWithUpdateString(
          this.prevDom!.dom,
          this.updateList.shift()!
        )
      } else {
        this.prevDom = domObj
        this.prevDomText = domObj.dom.innerHTML
        const updateList = markKeywords(
          this.input!,
          domObj,
          this.config.useRegexp!
        )
        if (updateList.length > 0) {
          this.updateList = updateList
          this.next()
        }
        this.current += 1
      }
      domObj.dom.scrollIntoView({ block: 'center' })
      return true
    }
    return false
  }
}
export default LocalSearch
