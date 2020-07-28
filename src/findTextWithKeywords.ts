import { getStyle, isValidNode, isWrapMark } from './utils'
import { checkTextMatches } from './checkMatches'

interface Dict {
  [key: string]: HTMLElement | HTMLElement[]
}

const caches: Dict = {}
let first: boolean = true

function setCaches(keyStr: string, value: HTMLElement) {
  const key = keyStr.trim()
  if (!caches[key]) {
    caches[key] = value
  } else {
    const existValue =
      Object.prototype.toString.call(caches[key]) === '[object Array]'
        ? (caches[key] as HTMLElement[])
        : [caches[key] as HTMLElement]
    caches[key] = [value].concat(...existValue)
  }
}

export async function findTextWithKeyWords(
  keywords: string | RegExp,
  parent: HTMLElement
) {
  await generateTextMapString(parent)
  first = false
  const texts = Object.keys(caches)
  const result = []
  for (const text of texts) {
    if (checkTextMatches(keywords, text)) {
      result.push(caches[text])
    }
  }
  return result
}

async function generateTextMapString(parent: HTMLElement) {
  if (!first) {
    return
  }
  // 非element类型
  if (!isValidNode(parent)) {
    return
  }
  const isInline = /^inline/.test(getStyle(parent, 'display'))
  // 如果是行内元素
  if (isInline) {
    setCaches(parent.innerText, parent)
    return
  }
  // 如果某个元素中只包含TextNode，则取父元素的innerText
  const childNodes = Array.from(parent.childNodes)
  if (childNodes.every((node) => node.nodeType === 3)) {
    setCaches(parent.innerText, parent)
    return
  }
  // 遍历所有childNode
  for (const node of childNodes) {
    if (node.nodeType === 3 && node.textContent !== '' && !isWrapMark(node)) {
      setCaches(node.textContent!, parent)
    } else {
      generateTextMapString(node as HTMLElement)
    }
  }
}
