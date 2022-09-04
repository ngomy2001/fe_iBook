import React from 'react';
import Button from './Button';
import Logo from './Logo';
import SearchField from './SearchField';
import { User } from '@nextui-org/react';
import './style.css';

const Navbar = () => {
  return (
    <div className="NavBar">
      <Logo />
      <SearchField />
      <div className="Avatar-notification">
        <Button label="Notifications"></Button>
        <User
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          name="Ariana Wattson"
          bordered
          color="error"
        />
      </div>
    </div>
  );
};

export default Navbar;
