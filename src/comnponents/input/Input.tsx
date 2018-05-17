import * as React from 'react';
import './Input.scss';
import { KeyboardEvent } from 'react';

export enum InputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number'
}

interface InputProps {
  placeholder: string;
  value: string;
  type: InputTypes;
  onInput: (enteredText: string) => void;
}

interface InputState {
  enteredText: string;
}

export class Input extends React.Component<InputProps, InputState> {// GENERIC
  constructor(props: InputProps) {
    super(props);
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  onInputHandler(event: KeyboardEvent<any>) {
    const newText = event.currentTarget.value;
    this.props.onInput(newText);
  }

  render() {
    const {value, type, placeholder} = this.props;
    return (
      <div className="input">
        <span className="input__icon">
          {this.props.children}
        </span>
        <input
          onInput={this.onInputHandler}
          type={type}
          className="input__native-element"
          value={value}
          placeholder={placeholder}
        />
      </div>
    );
  }
}