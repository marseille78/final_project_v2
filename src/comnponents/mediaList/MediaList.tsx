import * as React from 'react';
import { Media } from '../../types';
import { MediaItem } from './MediaListItem';

interface Props {
  mediaList: Array<Media>;
}

export const MediaList: React.SFC<Props> = (props: Props) => {
  let content;
  if (props.mediaList === undefined) {
    content = <h2>Loading...</h2>;
  } else {
    content = props.mediaList.map((item: Media) => {
      const {id, created_time, likes, comments} = item;
      const {url} = item.images.low_resolution;

      return (
        <MediaItem
          key={id}
          img_url={url}
          created_time={created_time}
          likes={likes.count}
          comments={comments.count}
        />
      );
    });
  }
  return (
    <div className="media-list">
      {content}
    </div>
  );
};