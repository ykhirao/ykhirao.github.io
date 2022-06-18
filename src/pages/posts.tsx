import React, { useState, useEffect } from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

import { QiitaPost } from 'types'
import { Tags, QiitaTags } from 'components/Tags'
import { toCountDict } from 'utils'
import { CountedTags } from 'types'

export default () => {
  const allPosts: QiitaPost[] = useRouteData()?.posts || []
  const [posts, setPosts] = useState(allPosts)

  const allTags: CountedTags[] =
    toCountDict(
      posts
        .filter(v => !!v)
        .flatMap(post => post.tags)
        .map(v => v.name),
    ) || []
  const [tags, setTags] = useState(allTags)
  useEffect(() => {
    const selectedTags = tags
      .filter(v => v.selected)
      .map(v => v.key)
    if (selectedTags.length) {
      const filteredPosts = allPosts.filter(post => {
        return selectedTags.every(selectedTag => {
          return post.tags
            .map(tag => tag.name)
            .includes(selectedTag)
        })
      })
      setPosts(filteredPosts)
    } else {
      setPosts(allPosts)
    }
  }, [tags])

  return (
    <div>
      <Tags
        tags={tags}
        setTags={setTags}
        showCount={true}
        minCount={3}
      />
      <p>All Posts:</p>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}/`}>
              {post.title}
            </Link>
            👍 {post.likes_count}
            <QiitaTags qiitaTags={post.tags} />
          </li>
        ))}
      </ul>
    </div>
  )
}
