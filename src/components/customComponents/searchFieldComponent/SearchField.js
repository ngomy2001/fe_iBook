import React from 'react';
import { Input } from '@nextui-org/react';
import './style.css';

const SearchField = () => {
  return (
    <div className="Search-input">
      <Input
        placeholder="Search"
        css={{
          width: '80%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default SearchField;
