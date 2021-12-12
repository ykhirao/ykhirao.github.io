import React from "react";
import { CountDict, QiitaTag } from "types";
import { QiitaPost } from "types";

interface T {
  tags: CountDict[];
  showCount?: boolean; // タグの数を表示するかどうか
  minCount?: number; // タグのカウントの下限で表示出し分け
  setPosts?: React.Dispatch<React.SetStateAction<QiitaPost[]>>;
}
interface QT {
  qiitaTags: QiitaTag[];
}

export const Tags = (props: T) => {
  const { tags, setPosts, showCount, minCount } = props;
  if (!tags?.map) return undefined;

  setPosts;
  const filterdTags = tags.filter((v) => v.count >= (minCount || 1));

  return (
    <div className="field is-grouped is-grouped-multiline">
      {filterdTags.map((tag) => (
        <div className="control" key={tag.key}>
          <div className="tags has-addons">
            <a className="tag is-link">{tag.key}</a>
            {showCount && (
              <span className="tag is-link is-light">{tag.count}</span>
            )}
            <a className="tag is-delete"></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export const QiitaTags = (props: QT) => {
  const { qiitaTags } = props;
  const tags: CountDict[] = qiitaTags.map((t) => {
    return {
      key: t.name,
      count: 1,
    };
  });
  tags;
  //   console.log(tags);
  console.log(qiitaTags);
  return (
    <>
      {qiitaTags.map((tag) => (
        <span className="tag" key={tag.name} >
            {tag.name}
        </span>
      ))}
    </>
  );
};
