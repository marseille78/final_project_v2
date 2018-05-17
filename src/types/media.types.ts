export interface Image {
  width: number;
  height: number;
  url: string;
}

export interface Media {
  id: string;
  user: {
    id: string;
    full_name: string;
    profile_picture: string;
    username: string;
  };
  images: {
    thumbnail: Image;
    low_resolution: Image;
    standard_resolution: Image;
  };
  created_time: string;
  caption: {
    id: string;
    text: string;
    created_time: string;
    from: {
      id: string;
      full_name: string;
      profile_picture: string;
      username: string;
    }
  };
  user_has_liked: false;
  likes: {
    count: number
  };
  tags: Array<string>;
  filter: string;
  comments: {
    count: number
  };
  type: string;
  link: string;
  location: string | null;
  attribution: string | null;
  users_in_photo: Array<any>;
}

export type MediaCollection = Array<Media>;