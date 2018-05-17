import * as React from 'react';
import { Input, InputTypes } from '../input/Input';
import { FormEvent } from 'react';

interface SearchFormState {
  searchValue: string;
}

export class SearchForm extends React.Component<{}, SearchFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  onInputHandler(searchValue: string) {
    this.setState((state) => {
      return {...state, searchValue};
    });
  }

  submitHandler(event: FormEvent<any>) {
    event.preventDefault();
  }

  render() {
    return (
      <form
        className="form form_search"
        onSubmit={this.submitHandler}
      >
        <Input
          type={InputTypes.PASSWORD}
          value={this.state.searchValue}
          onInput={this.onInputHandler}
          placeholder="search"
        />
      </form>);
  }
}
