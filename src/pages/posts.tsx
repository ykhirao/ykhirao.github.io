import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

import { QiitaPost } from 'types'

export default () => {
  const { posts }: { posts: QiitaPost[] } = useRouteData()
  // console.log(posts)
  return (
    <div>
      <br />
      All Posts:
      <ul>
        {posts && posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}/`}>{post.title}</Link>
            👍 {post.likes_count}
          </li>
        ))}
      </ul>
    </div>
  )
}
