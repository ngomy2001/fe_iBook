import React from 'react';
import PrimaryButton from '../customButtonComponent/Button';
import Logo from '../logoComponent/Logo';
import SearchField from '../searchFieldComponent/SearchField';
import { User } from '@nextui-org/react';
import './style.css';

const Navbar = () => {
  return (
    <div className="NavBar">
      <Logo />
      <SearchField />
      <div className="Avatar-notification">
        <PrimaryButton label="Notifications"></PrimaryButton>
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
