import * as React from 'react';
import { Comment } from './CommentsList';

import './CommentsListItem.scss';

interface CommentsListItemProps {
  comment: Comment;
}

export class CommentsListItem extends React.Component<CommentsListItemProps, {}> {
  render() {
    const {author, text} = this.props.comment;
    return (
      <li className="comment-list__item">
        <h3>{author}</h3>
        <p>{text}</p>
      </li>
    );
  }
}