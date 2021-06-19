import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src='https://sun9-8.userapi.com/c853620/v853620963/13b4d5/aFszB8VaQCY.jpg' />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
      </div>
    </header>
  );
}

export default Header;