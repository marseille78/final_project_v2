import * as React from 'react';
import { UserProfile } from '../userProfile/UserProfile';
import { History } from 'history';
import { match } from 'react-router';
import { HomeStore } from './Home.store';
import { HomeProvider } from './Home.provider';
import { MediaList } from '../mediaList/MediaList';
import { observer } from 'mobx-react';

interface Props {
  history?: History;
  match?: match<any>;
}

@observer
export class Home extends React.Component<Props> {
  private store: HomeStore = new HomeStore(new HomeProvider());

  componentDidMount() {
    this.store.init();
  }
  render() {
    const {userData, mediaCollection} = this.store;
    return (
      <div>
        <UserProfile data={userData}/>
        <MediaList mediaList={mediaCollection}/>
      </div>
    );
  }
}