import * as React from 'react';
import { UserProfileResponse } from '../../types/user.types';
import './UserProfile.scss';

interface UserProfileProps {
  data: UserProfileResponse;
}

export class UserProfile extends React.Component<UserProfileProps> {
  constructor(props: UserProfileProps) {
    super(props);
  }

  renderLoader() {
    return <div className="loader">Loading...</div>;
  }

  renderComponent() {
    const {profile_picture, username, counts} = this.props.data;

    return (
      <div className="user-profile">
        <div className="user-profile__avatar">
          <img src={profile_picture} alt=""/>
        </div>
        <div className="user-profile__details">
          <div className="user-profile__row">
            <h2 className="user-profile__name">{username}</h2>
          </div>
          <ul className="user-profile__row user-profile__statistic">
            <li className="user-profile__statistic-item">
              <span>{counts.media}</span>
              <span>публикаций</span>
            </li>
            <li className="user-profile__statistic-item">
              <span>{counts.followed_by}</span>
              <span>подписчиков</span>
            </li>
            <li className="user-profile__statistic-item">
              <span>{counts.follows}</span>
              <span>подписок</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.data) {
      return this.renderLoader();
    }

    return this.renderComponent();
  }
}