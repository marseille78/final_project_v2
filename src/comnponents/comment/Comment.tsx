import * as React from 'react';
import { Comment as CommentModel } from '../../types';

interface Props {
  comment: CommentModel ;
}

export class Comment extends React.Component<Props> {
  render() {
    return <div>{this.props.comment.text}</div>;
  }
}