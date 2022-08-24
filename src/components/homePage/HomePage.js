import React from 'react';
import { Input } from '@nextui-org/react';
import { User } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Link } from '@nextui-org/react';
import { AiOutlineLogin } from 'react-icons/ai';
import { MdOutlineInsights } from 'react-icons/md';
import { FaBookOpen, FaUser, FaRegSun, FaShoppingBasket } from 'react-icons/fa';

import './style.css';
const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="NavBar">
        <div className="Logo">
          <p className="Headline-title">iBook</p>
        </div>
        <div className="Search-input">
          <Input
            placeholder="Search"
            css={{
              width: '80%',
              height: '100%',
            }}
          />
        </div>
        <div className="Avatar-notification">
          <Button auto color="error" rounded bordered>
            Notifications
          </Button>
          <User
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name="Ariana Wattson"
            bordered
            color="error"
          />
        </div>
      </div>
      <div className="Bottom-side">
        <div className="SideBar">
          <div className="Menu-top">
            <Link className="item" block color="error">
              <FaBookOpen />
              <div className="label">Book</div>
            </Link>
            <Link className="item" block color="error">
              <FaUser />
              <div className="label">User</div>
            </Link>
            <Link className="item" block color="error">
              <FaShoppingBasket />
              <div className="label">Invoices</div>
            </Link>
            <Link className="item" block color="error">
              <MdOutlineInsights />
              <div className="label">Insight</div>
            </Link>
          </div>
          <div className="Menu-bottom">
            <Link className="item" block color="error">
              <FaRegSun />
              <div className="label">Settings</div>
            </Link>
            <Link className="item" block color="error">
              <AiOutlineLogin />
              <div className="label"> Log Out</div>
            </Link>
          </div>
        </div>
        <div className="Content"></div>
      </div>
    </div>
  );
};
export default HomePage;
