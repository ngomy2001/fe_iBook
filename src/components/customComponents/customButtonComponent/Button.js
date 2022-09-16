import React from 'react';
import { Button } from '@nextui-org/react';

const PrimaryButton = ({ label }) => {
  return (
    <div>
      <Button auto color="error" rounded bordered>
        {label}
      </Button>
    </div>
  );
};

export default PrimaryButton;
