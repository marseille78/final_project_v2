import * as React from 'react';
import { CommentsForm } from './СommentsForm';
import { Comment, CommentsList } from './CommentsList';

import './CommentsBox.scss';

interface CommentBoxState {

}

interface CommentBoxProps {
  comments: Array<Comment>;
  onAddComment: (comment: Comment) => void;
}

export class CommentsBox extends React.Component<CommentBoxProps, CommentBoxState> {
  constructor(props: CommentBoxProps) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment: Comment) {
    this.props.onAddComment(comment);
  }

  render() {
    return (
      <div className={'comment-box'}>
        <CommentsForm onSubmit={this.addComment}/>
        <CommentsList comments={this.props.comments}/>
      </div>
    );
  }
}