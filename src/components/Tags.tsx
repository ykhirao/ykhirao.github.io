import React from 'react'
import { CountedTags, QiitaTag } from 'types'

interface T {
  tags: CountedTags[]
  setTags: any
  showCount?: boolean // タグの数を表示するかどうか
  minCount?: number // タグのカウントの下限で表示出し分け
}
interface QT {
  qiitaTags: QiitaTag[]
}

export const Tags = (props: T) => {
  const { tags, showCount, minCount, setTags } = props
  if (!tags?.map) return undefined

  const filterdTags = tags.filter(v => v.count >= (minCount || 1))

  const onTagClick = (tagName: string) => {
    return () => {
      console.log(tagName)
      let data = [...tags]
      const selectedTag = tags.find(v => v.key === tagName)
      if (selectedTag) {
        const index = data.indexOf(selectedTag)
        data.splice(index, 1)
        data.push({
          ...selectedTag,
          selected: !selectedTag.selected,
        })
        data.sort((a, b) => {
          if (b.count === a.count) {
            if (a.key < b.key) {
              return -1
            }
            if (a.key > b.key) {
              return 1
            }
            return 0
          }
          return b.count - a.count
        })
      }
      setTags([...data])
    }
  }
  const onDleteTagClick = () => {
    console.log('onDleteTagClick')
    setTags(
      tags.map(tag => {
        return { ...tag, selected: false }
      }),
    )
  }

  return (
    <div className="field is-grouped is-grouped-multiline">
      {filterdTags.map(tag => (
        <div className="control" key={tag.key}>
          <div className="tags has-addons">
            <a
              className={`tag is-link ${tag.selected ? '' : 'is-light'}`}
              onClick={onTagClick(tag.key)}
            >
              {tag.key}
            </a>
            {showCount && <span className="tag is-link is-light">{tag.count}</span>}
          </div>
        </div>
      ))}
      <a className="tag is-delete" onClick={onDleteTagClick}></a>
    </div>
  )
}

export const QiitaTags = (props: QT) => {
  const { qiitaTags } = props

  return (
    <>
      {qiitaTags.map(tag => (
        <span className="tag" key={tag.name}>
          {tag.name}
        </span>
      ))}
    </>
  )
}
