import React from 'react';
import CustomLink from '../customLinkComponent/Link';
import { topPages, bottomPages } from '../customLinkComponent/DataLink';
import './style.css';

const Sidebar = () => {
  return (
    <div className="SideBar">
      <div className="Menu-top">
        {topPages.map((topPage) => (
          <CustomLink label={topPage.label} />
        ))}
      </div>
      <div className="Menu-bottom">
        <div className="Menu-top">
          {bottomPages.map((bottomPage) => (
            <CustomLink label={bottomPage.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
