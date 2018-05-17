import * as React from 'react';
import './Header.scss';
import { Logo } from '../logo/Logo.component';
import { SearchForm } from '../searchForm/SearchForm';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
}

export class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <header className="app-header">
        <div className="app-header__content">
          <Logo />
          <SearchForm />
          <div className="app-header__controls">
            <NavLink to={'/about'} activeClassName="app-header__link_active">About</NavLink>
            <NavLink exact={true} to={'/'} activeClassName="app-header__link_active">Home</NavLink>
          </div>
        </div>
      </header>
    );
  }
}
