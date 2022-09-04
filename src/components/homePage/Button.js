import React from 'react';
import { Button } from '@nextui-org/react';
import './style.css';

const Button = ({ label, color }) => {
  return (
    <div>
      <Button auto color="error" rounded bordered>
        {label}
      </Button>
    </div>
  );
};

export default Button;
