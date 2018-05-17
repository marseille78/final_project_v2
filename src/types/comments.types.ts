export interface Comment {
  id: string;
  from: {
    username: string;
  };
  text: string;
  created_time: string;
}