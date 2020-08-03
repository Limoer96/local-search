export async function restoreMarked(dom: HTMLElement | null, text: string) {
  if (!dom || !text) {
    return
  }
  dom.innerHTML = text
}
