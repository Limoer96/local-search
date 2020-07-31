import { IOptions, KeywordsOrSelector, DefaultOptions, search } from './search'
import { markKeywords } from './markKeywords'

interface IProps extends IOptions {
  input?: KeywordsOrSelector
}
class LocalSearch {
  private input: string | undefined
  private config: IOptions
  private current: number
  private result: HTMLElement[] = []
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
    return search(this.input!, this.config).then((values) => {
      this.result = values
      return [this, values]
    })
  }
  next() {
    if (this.current < this.result.length) {
      let dom = this.result[this.current]
      markKeywords(this.input!, dom, this.config.useRegexp!)
      dom.scrollIntoView()
    }
  }
}
export default LocalSearch
