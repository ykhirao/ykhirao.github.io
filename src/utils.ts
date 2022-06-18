import { CountedTags } from 'types'

/**
 * タグを降順に並び替える
 *
 * ['Laravel', 'Laravel', 'Vue.js']
 * ->
 * [{key: 'Laravel', count: 2}, {key: 'Vue.js', count: 1}]
 *
 * @param array
 * @returns
 */
export function toCountDict(
  array: string[],
): CountedTags[] {
  let tmp = {} as any
  for (const key of array) {
    tmp[key] = array.filter(function (x) {
      return x == key
    }).length
  }
  return Object.keys(tmp)
    .map(key => {
      return {
        key,
        count: tmp[key],
        selected: false,
      } as CountedTags
    })
    .sort((a, b) => b.count - a.count)
}
