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
  let updateList: string[] = []
  if (type === TypeText) {
    let newText
    if (!useRegexp) {
      newText = dom.innerHTML.replace(
        keywords,
        `<span style="background-color: #169fe6; color: #ffffff;">${keywords}</span>`
      )
    } else {
      // 存入所有结果到更新队列
      const reg = new RegExp(`(${keywords})`, 'g')
      const domString = dom.innerHTML
      let result = reg.exec(domString)
      while (result) {
        const updateString =
          dom.innerHTML.substring(0, result.index) +
          `<span style="background-color: #169fe6; color: #ffffff;">${result[0]}</span>` +
          dom.innerHTML.substring(result.index + result[0].length)
        updateList.push(updateString)
        result = reg.exec(domString)
      }
    }
    if (newText) {
      dom.innerHTML = newText
    }
  } else if (type === TypeSelector) {
    const prevBgColor = dom.style.backgroundColor
    dom.dataset['bgc'] = prevBgColor!
    // 保存背景色，便于后续恢复
    dom.style.backgroundColor = '#169fe6'
  }
  return updateList
}

export function markKeywordsWithUpdateString(
  dom: HTMLElement,
  updateString: string
) {
  if (!dom || !updateString) {
    return
  }
  dom.innerHTML = updateString
}
