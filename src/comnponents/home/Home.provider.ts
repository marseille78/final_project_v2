import { appConfigs } from '../../configs/configs';
import { BaseProvider } from '../../providers/base.provider';
import { MediaCollection, UserProfileResponse } from '../../types';

export class HomeProvider extends BaseProvider {
  getUserProfile(): Promise<UserProfileResponse> {
    return this.get<UserProfileResponse>(`${appConfigs.apiUrl}/users/self/?access_token=${appConfigs.token}`);
  }
  getMedia(): Promise<MediaCollection> {
    return this.get<MediaCollection>(`${appConfigs.apiUrl}/users/self/media/recent?access_token=${appConfigs.token}`);
  }
}