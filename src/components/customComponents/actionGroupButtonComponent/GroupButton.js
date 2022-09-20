import React from 'react';
import PrimaryButton from '../customButtonComponent/Button';
import './style.css';

const ActionGroupButton = () => {
  return (
    <div className="ActionGroupButton">
      <PrimaryButton label="View"></PrimaryButton>
      <PrimaryButton label="Update"></PrimaryButton>
      <PrimaryButton label="Delete"></PrimaryButton>
    </div>
  );
};

export default ActionGroupButton;
