import * as React from 'react';
import './App.scss';
import { Header } from './comnponents/header/Header.component';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home } from './comnponents/home/Home';
import { About } from './comnponents/about/About';
import { Switch } from 'react-router';
import { NotFound } from './comnponents/notFound/NotFound';
import { Details } from './comnponents/details/Details';

interface AppProps {
}

@observer
class App extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <main className="app-main">
            <Switch>
              <Route exact={true} path={'/'} render={({...props}) => <Home {...props}/>}/>
              <Route path={'/details/:id'} render={({...props}) => <Details {...props} />}/>
              <Route path={'/about'} component={About}/>
              <Route exact={true} path={'*'} component={NotFound}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;