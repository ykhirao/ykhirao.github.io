import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

import { QiitaPost } from 'types'

export default () => {
  const { qiita }: { qiita: QiitaPost[] } = useRouteData()

  return (
    <div>
      <h1>It's qiitatime.</h1>
      <br />
      All Posts:
      <ul>
        {qiita && qiita.map(post => (
          <li key={post.id}>
            <Link to={`/qiita/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
