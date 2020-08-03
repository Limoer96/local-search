import { IOptions, KeywordsOrSelector, DefaultOptions, search } from './search'
import { markKeywords } from './markKeywords'
import { restoreMarked } from './restoreMarked'

interface IProps extends IOptions {
  input?: KeywordsOrSelector
}
class LocalSearch {
  private input: string | undefined
  private config: IOptions
  private current: number
  private result: HTMLElement[] = []
  private prevDomText: string = '' // 上一次被替换之前的文本
  private prevDom: HTMLElement | null // 上一个被访问过的dom
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
    return search(this.input!, this.config).then((values) => {
      this.result = values
      return values
    })
  }
  next() {
    if (this.current < this.result.length) {
      let dom = this.result[this.current]
      restoreMarked(this.prevDom, this.prevDomText)
      console.log(dom)
      this.prevDom = dom
      this.prevDomText = dom.innerHTML
      markKeywords(this.input!, dom, this.config.useRegexp!)
      dom.scrollIntoView()
      this.current += 1
    }
  }
}
export default LocalSearch
