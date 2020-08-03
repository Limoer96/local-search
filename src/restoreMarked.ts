import { IDomFormated, TypeText, TypeSelector } from './search'

export async function restoreMarked(
  domObj: IDomFormated | null,
  text?: string
) {
  if (!domObj || !domObj!.dom) {
    return
  }
  const { dom, type } = domObj
  if (type === TypeText) {
    dom.innerHTML = text!
  } else if (type === TypeSelector) {
    const prevBgColor = dom.dataset['bgc'] || ''
    dom.style.backgroundColor = prevBgColor
  }
}
