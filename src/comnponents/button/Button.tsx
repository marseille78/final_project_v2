import './Button.scss';
import * as React from 'react';
import * as classnames from 'classnames';

enum BtnTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

interface ButtonProps {
  type?: BtnTypes;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const {type} = this.props;
    const classNames = classnames('btn', {
      'btn__success': type === BtnTypes.SUCCESS,
      'btn__danger': type === BtnTypes.DANGER,
      'btn__default': type === undefined,
    });
    return (
      <button className={classNames}>
        {this.props.children}
      </button>
    );
  }
}