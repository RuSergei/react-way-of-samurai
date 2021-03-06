import classes from './Header.module.css';
import React from 'react';

function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src='https://sun9-8.userapi.com/c853620/v853620963/13b4d5/aFszB8VaQCY.jpg' />
    </header>
  );
}

export default Header;