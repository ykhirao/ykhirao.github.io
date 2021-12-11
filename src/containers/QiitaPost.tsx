import React from 'react';
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

import { QiitaPost } from 'types'

export default () => {
  const { post }: { post: QiitaPost } = useRouteData()
  // console.log(post)
  return (
    <div>
      <Link to="/qiita">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
      <article
        className={"md-body"}
        dangerouslySetInnerHTML={{ __html: post.rendered_body }}
      />
    </div>
  )
}
