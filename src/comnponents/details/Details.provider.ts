import { BaseProvider } from '../../providers/base.provider';
import { Media, Comment } from '../../types';
import { appConfigs } from '../../configs/configs';

export class DetailsProvider extends BaseProvider {
  fetchMedia(id: string): Promise<Media> {
    return this.get<Media>(`media/${id}?access_token=${appConfigs.token}`);
  }
  fetchComments(id: string): Promise<Array<Comment>> {
    return this.get<Array<Comment>>(`media/${id}/comments?access_token=${appConfigs.token}`);
  }
}

export const detailsProvider = new DetailsProvider();