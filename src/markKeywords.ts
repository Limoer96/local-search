import {
  KeywordsOrSelector,
  IDomFormated,
  TypeText,
  TypeSelector,
} from './search'

export function markKeywords(
  keywords: KeywordsOrSelector,
  domObj: IDomFormated,
  useRegexp: boolean
) {
  const { dom, type } = domObj
  if (type === TypeText) {
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
  } else if (type === TypeSelector) {
    const prevBgColor = dom.style.backgroundColor
    dom.dataset['bgc'] = prevBgColor!
    // 保存背景色，便于后续恢复
    dom.style.backgroundColor = '#663399'
  }
}
