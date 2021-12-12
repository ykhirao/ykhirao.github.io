import React from "react";
import { CountDict, QiitaTag } from "types";

interface T {
  tags: CountDict[];
  showCount?: boolean; // タグの数を表示するかどうか
  minCount?: number; // タグのカウントの下限で表示出し分け
  selectedTags: any[];
  setSelectedTags: any;
}
interface QT {
  qiitaTags: QiitaTag[];
}

export const Tags = (props: T) => {
  const { tags, showCount, minCount, selectedTags, setSelectedTags } = props;
  if (!tags?.map) return undefined;

  const filterdTags = tags.filter((v) => v.count >= (minCount || 1));

  const onTagClick = (tagName: string) => {
    return () => {
      console.log(tagName);
      let data = [...selectedTags]
      const index = data.indexOf(tagName);

      if (index === -1) {
        data.push(tagName);
      } else {
        data.splice(index, 1);
      }
      setSelectedTags([...data]);
    };
  };

  return (
    <div className="field is-grouped is-grouped-multiline">
      {filterdTags.map((tag) => (
        <div className="control" key={tag.key}>
          <div className="tags has-addons">
            <a className="tag is-link" onClick={onTagClick(tag.key)}>
              {tag.key}
            </a>
            {showCount && (
              <span className="tag is-link is-light">{tag.count}</span>
            )}
            {/* <a className="tag is-delete"></a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export const QiitaTags = (props: QT) => {
  const { qiitaTags } = props;

  return (
    <>
      {qiitaTags.map((tag) => (
        <span className="tag" key={tag.name}>
          {tag.name}
        </span>
      ))}
    </>
  );
};
