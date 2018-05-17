import * as React from 'react';

interface Props {
  img_url: string;
  created_time: string;
  likes: number;
  comments: number;
}

export const MediaItem: React.SFC<Props> = (props: Props) => {
  const {img_url, likes, comments} = props;
  return (
    <div className="media-item">
      <img
        className="media-item__img"
        src={img_url}
        alt=""
      />
      <div className="media-item__activity">
        <div className="media-item__likes">Likes: {likes}</div>
        <div className="media-item__comments">Comments: {comments}</div>
      </div>
    </div>
  );
};