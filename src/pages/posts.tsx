import React, { useState } from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";

import { QiitaPost } from "types";
import { Tags, QiitaTags } from "components/Tags";
import { toCountDict } from "utils";

export default () => {
  const allPosts: QiitaPost[] = useRouteData()?.posts || [];
  const allTags = toCountDict(
    allPosts
      .filter((v) => !!v)
      .flatMap((post) => post.tags)
      .map((v) => v.name)
  );
  const [posts, setPosts] = useState(allPosts);

  // console.log(tags);
  // console.log(posts)
  return (
    <div>
      <Tags tags={allTags} setPosts={setPosts} showCount={true} minCount={3} />
      <p>All Posts:</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}/`}>{post.title}</Link>
            👍 {post.likes_count}
            <QiitaTags qiitaTags={post.tags} />
          </li>
        ))}
      </ul>
    </div>
  );
};
