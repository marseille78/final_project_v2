import { action, computed, observable } from 'mobx';
import { HomeProvider } from './Home.provider';
import { UserProfileResponse, MediaCollection } from '../../types';

export class HomeStore {
  @observable
  private _userData: UserProfileResponse;

  @observable
  private _mediaCollection: MediaCollection;

  private _provider: HomeProvider;

  constructor(provider: HomeProvider) {
    this._provider = provider;
  }

  public init(): void {
    this._provider.getUserProfile()
      .then(this.updateUserData.bind(this))
      .catch((e) => {
        console.error(e);
      });
    this._provider.getMedia()
      .then(this.updateMedia.bind(this))
      .catch((e) => {
        console.error(e);
      });
  }

  @computed
  get userData(): UserProfileResponse {
    return this._userData;
  }

  @computed
  get mediaCollection(): MediaCollection {
    return this._mediaCollection;
  }

  @action
  private updateUserData(userProfile: UserProfileResponse) {
    this._userData = userProfile;
  }

  @action
  private updateMedia(mediaCollection: MediaCollection) {
    console.log('updateMedia: ', this._mediaCollection);
    this._mediaCollection = mediaCollection;
  }
}