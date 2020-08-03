export function checkTextMatches(keywords: string | RegExp, text: string) {
  if (typeof keywords === 'string') {
    // 包含空格的字符串
    if (keywords.trim() === '') {
      return false
    }
    return keywords === text
  }
  const exist = (keywords as RegExp).test(text)
  keywords.lastIndex = 0 // 重置lastIndex!!!
  return exist
}
