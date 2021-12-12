import React, { useState, useEffect } from "react";
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
  ) || [];
  const [posts, setPosts] = useState(allPosts);
  const [selectedTags, setSelectedTags] = useState([] as string[]);
  useEffect(() => {
    // console.log("selected: ", selectedTags);
    // console.log('posts', posts);
    if (selectedTags.length) {
      setPosts(
        allPosts.filter((post) => {
          return post.tags.some((postTag) => {
            return selectedTags.includes(postTag.name);
          });
        })
      );  
    } else {
      setPosts(allPosts);
    }
  }, [selectedTags]);

  return (
    <div>
      <Tags
        tags={allTags}
        showCount={true}
        minCount={3}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
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
