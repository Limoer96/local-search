import { findTextWithKeyWords } from './findTextWithKeywords'
import { escapeInputString } from './utils'
import flattenDeep from 'lodash/flattenDeep'

export type KeywordsOrSelector =
  | string
  | keyof HTMLElementTagNameMap
  | keyof SVGElementTagNameMap

export interface IOptions {
  useRegexp?: boolean
  scope?: HTMLElement | string
}

export const DefaultOptions: IOptions = {
  useRegexp: false,
  scope: document.body,
}

function searchAsText(input: KeywordsOrSelector | RegExp, scope: HTMLElement) {
  return findTextWithKeyWords(input, scope)
}

function querySelector(input: KeywordsOrSelector, scope: HTMLElement) {
  let doms: HTMLElement[] = []
  try {
    doms = Array.from(scope.querySelectorAll(input))
  } catch (error) {
    console.warn('invalid selector')
  } finally {
    return Promise.resolve(doms)
  }
}

export async function search(input: KeywordsOrSelector, params: IOptions = {}) {
  const { scope, useRegexp } = { ...DefaultOptions, ...params }
  const inputReg = useRegexp ? new RegExp(escapeInputString(input), 'g') : input
  const parent =
    typeof scope === 'string' ? document.getElementById(scope) : scope
  const textPromise = searchAsText(inputReg, parent!)
  const querySelectorPromise = querySelector(input, parent!)
  const values = await Promise.all([textPromise, querySelectorPromise])
  return flattenDeep(values)
}
