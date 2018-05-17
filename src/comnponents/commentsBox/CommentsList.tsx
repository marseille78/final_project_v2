import * as React from 'react';
import { CommentsListItem } from './CommentsListItem';

export type UnixTimeStamp = number;

export interface Comment {
  author: string;
  text: string;
  date: UnixTimeStamp;
}

interface CommentsListProps {
  comments: Array<Comment>;
}

export class CommentsList extends React.Component<CommentsListProps> {
  render() {
    console.log(this.props.comments);

    const listItems = this.props.comments.map((comment: Comment, index: number) => {
      return <CommentsListItem comment={comment} key={index}/>;
    });

    return (
      <ul className="comments-list">
        {listItems}
      </ul>
    );
  }
}