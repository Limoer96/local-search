import { findTextWithKeyWords } from './findTextWithKeywords'

type KeywordsOrSelector = string & HTMLElementTagNameMap & SVGElementTagNameMap

interface IOptions {
  useRegexp?: boolean
  scope?: HTMLElement | string
}

const DefaultOptions: IOptions = {
  useRegexp: false,
  scope: document.body,
}

function search(input: KeywordsOrSelector, params = DefaultOptions) {
  const { scope, useRegexp } = params
  const inputReg = useRegexp ? new RegExp(input, 'g') : input
  const parent =
    typeof scope === 'string' ? document.getElementById(scope) : scope
  findTextWithKeyWords(inputReg, parent!).then((res) => {
    console.log('res', res)
  })
}

export default search
