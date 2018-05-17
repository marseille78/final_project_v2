import * as React from 'react';
import { FormEvent } from 'react';
import { Input, InputTypes } from '../input/Input';
import { Comment, UnixTimeStamp } from './CommentsList';
import { KeyboardEvent } from 'react';
import { Button } from '../button/Button';

import './CommentsForm.scss';

interface CommentsFormProps {
  onSubmit: (comment: Comment) => void;
}

interface CommentsFormState {
  author: string;
  text: string;
  date: UnixTimeStamp | undefined;
}

const defaultState = {
  author: '',
  text: '',
  date: undefined
};

export class CommentsForm extends React.Component<CommentsFormProps, CommentsFormState> {
  constructor(props: CommentsFormProps) {
    super(props);
    this.state = defaultState;
    this.onSubmit = this.onSubmit.bind(this);
    this.authorChanged = this.authorChanged.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }

  submit() {

  }

  onSubmit(event: FormEvent<any>) {
    event.preventDefault();
    const date = Date.now();
    const newComment = {...this.state, date};
    console.log(newComment);
    this.props.onSubmit(newComment);
    this.resetState();
  }

  authorChanged(author: string) {
    this.setState((state: CommentsFormState) => {
      return {...state, author};
    });
  }

  textChanged(event: KeyboardEvent<any>) {
    const text = event.currentTarget.value;
    this.setState((state: CommentsFormState) => {
      return {...state, text};
    });
  }

  render() {
    const {author, text} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          value={author}
          placeholder={'Author name...'}
          type={InputTypes.TEXT}
          onInput={this.authorChanged}
        />
        <textarea
          onInput={this.textChanged}
          value={text}
          placeholder={'Enter text...'}
          name=""
          id=""
          cols={30}
          rows={10}
        />
        <Button>
          <span>&#9729;</span><span>Add comment</span>
        </Button>

      </form>
    );
  }

  private resetState() {
    this.setState(() => {
      return defaultState;
    });
  }
}