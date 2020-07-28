export function getStyle(dom: HTMLElement, style: string) {
  if (getComputedStyle !== undefined) {
    return getComputedStyle(dom).getPropertyValue(style)
  }
  return (dom as any).style[style]
}

export function isValidNode(node: HTMLElement) {
  const invalidNodeTypes = [3, 8]
  const invalidNodeNames = [
    'SCRIPT',
    'NOSCRIPT',
    'BR',
    'HR',
    'IMG',
    'INPUT',
    'COL',
    'FRAME',
    'LINK',
    'AREA',
    'PARAM',
    'EMBED',
    'KEYGEN',
    'SOURCE',
  ]
  if (!node || invalidNodeTypes.includes(node.nodeType)) {
    return false
  }
  if (invalidNodeNames.includes(node.nodeName)) {
    return false
  }
  return true
}

export function isWrapMark(node: ChildNode) {
  return node.nodeName === '#text' && /(\s)*\n/.test(node.nodeValue!)
}
