import React from 'react';
import { Link } from '@nextui-org/react';
import './style.css';

const CustomLink = ({ label }) => {
  return (
    <div>
      <Link className="item" block color="error">
        <div className="label">{label}</div>
      </Link>
    </div>
  );
};

export default CustomLink;
