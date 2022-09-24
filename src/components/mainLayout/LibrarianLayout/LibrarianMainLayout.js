import Navbar from '../../customComponents/navbarComponent/Navbar';
import Sidebar from '../../customComponents/sidebarComponent/Sidebar';
import { Outlet } from 'react-router-dom';
import './style.css';

const LibrarianMainLayout = () => {
  return (
    <div className="Main">
      <div>
        <Navbar />
      </div>
      <div className="Bottom-side">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="Content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LibrarianMainLayout;
