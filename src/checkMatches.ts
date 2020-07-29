export function checkTextMatches(keywords: string | RegExp, text: string) {
  if (typeof keywords === 'string') {
    // 包含空格的字符串
    if (keywords.trim() === '') {
      return false
    }
    return keywords === text
  }
  return (keywords as RegExp).test(text)
}
