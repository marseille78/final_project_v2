import { action, computed, observable } from 'mobx';
import { detailsProvider } from './Details.provider';
import { Comment, Media } from '../../types';

export class DetailsStore {
  @observable
  private _media: Media;

  @observable
  private _comments: Array<Comment> = [];

  @observable
  private _errorMessage: string;

  @computed
  get media(): Media {
    return this._media;
  }

  @computed
  get errorMessage(): string {
    return this._errorMessage;
  }

  @computed
  get comments(): Array<Comment> {
    return this._comments;
  }

  getData(id: string): void {
    this.fetchMediaDetails(id);
    this.fetchMediaComments(id);
  }

  private fetchMediaComments(id: string): void {
    detailsProvider
      .fetchComments(id)
      .then(action((comments: Array<Comment>) => this._comments = comments))
      .catch(action((e: XMLHttpRequest) => {
        this._errorMessage = e.statusText;
        throw new Error(e.statusText);
      }));
  }

  private fetchMediaDetails(id: string): void {
    detailsProvider
      .fetchMedia(id)
      .then(this.updateMedia.bind(this))
      .catch(action((e: XMLHttpRequest) => {
        this._errorMessage = e.statusText;
        throw new Error(e.statusText);
      }));
  }

  @action
  private updateMedia(media: Media) {
    this._media = media;
  }
}

export const detailsStore = new DetailsStore();