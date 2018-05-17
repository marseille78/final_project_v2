import * as React from 'react';
import { match, Route } from 'react-router';
import { History } from 'history';

interface Props {
  history?: History;
  match?: match<any>;
}

class ChildComponent extends React.Component<Props> {
  render() {
    return <div>URL PARAM: {this.props.match!.params.test}</div> ;
  }
}

export class About extends React.Component {
  render() {
    return (
      <div>
        About
        <Route path={`/about/:test`} render={({...props}) => <ChildComponent {...props} />}/>
      </div>

    );
  }
}