export function checkTextMatches(keywords: string | RegExp, text: string) {
  if (typeof keywords === 'string') {
    return keywords === text
  }
  return (keywords as RegExp).test(text)
}
