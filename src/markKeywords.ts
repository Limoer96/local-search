import { KeywordsOrSelector } from './search'

export function markKeywords(
  keywords: KeywordsOrSelector,
  dom: HTMLElement,
  useRegexp: boolean
) {
  let newText
  if (!useRegexp) {
    newText = dom.innerHTML.replace(
      keywords,
      `<span style="background-color: #663399;">${keywords}</span>`
    )
  } else {
    const reg = new RegExp(`(${keywords})`, 'g')
    newText = dom.innerHTML.replace(
      reg,
      '<span style="background-color: #663399;">$1</span>'
    )
  }
  dom.innerHTML = newText
}
