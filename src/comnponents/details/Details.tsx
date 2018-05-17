import * as React from 'react';
import { match } from 'react-router';
import { reaction } from 'mobx';

import { detailsStore } from './Details.store';
import { Media } from '../../types';
import { observer } from 'mobx-react';
import { Comment } from '../comment/Comment';

interface Props {
  match?: match<{ id: string }>;
}

@observer
export class Details extends React.Component<Props> {
  componentDidMount() {
    const id = this.props.match!.params.id;
    detailsStore.getData(id);
    reaction(() => detailsStore.media, (media: Media) => {
      console.log(media);
    });
    reaction(() => detailsStore.comments, (comments) => console.log(comments));
  }

  render() {
    let MediaComponent = <div>Media</div>;

    if (detailsStore.media === undefined) {
      MediaComponent = (<div>Media loading...</div>);
    }

    return (
      <div className={'details'}>
        {MediaComponent}
        {detailsStore.comments.map((comment, i) => <Comment key={i} comment={comment}/>)}
      </div>
    );
  }
}