import React from 'react';
import Link from './Link';
import { topPages, bottomPages } from './DataLink';
import './style.css';

const Sidebar = () => {
  return (
    <div className="SideBar">
      <div className="Menu-top">
        {topPages.map((topPage) => (
          <Link label={topPage.name} />
        ))}
      </div>
      <div className="Menu-bottom">
        <div className="Menu-top">
          {bottomPages.map((bottomPage) => (
            <Link label={bottomPage.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
