import React from 'react';
import { Button } from '@nextui-org/react';

const PrimaryButton = ({ label, onClick }) => {
  return (
    <div>
      <Button auto color="error" rounded bordered onClick={onClick}>
        {label}
      </Button>
    </div>
  );
};

export default PrimaryButton;
