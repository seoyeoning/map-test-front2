import React, { useState } from 'react';
import Styles from './Sidebar.module.css';
import SidebarMenu from './SidebarMenu';
import SidebarContent from './SidebarContent';

const OpenBtn = ({ handleSidebarToggle, isSidebarOpen }) => {
  return (
    <div>
      <button
        className={`${Styles.openBtn} ${isSidebarOpen ? '' : Styles.close} `}
        onClick={handleSidebarToggle}
      >
        {isSidebarOpen ? '◀' : '▶'}
      </button>
    </div>
  );
};

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState('검색');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabChange = tab => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className={Styles.sidebarContainer}>
        <div className={`${Styles.sidebar} ${isSidebarOpen ? '' : Styles.close} `}>
          <SidebarMenu handleTabChange={handleTabChange} selectedTab={selectedTab} />
          <SidebarContent selectedTab={selectedTab} />
        </div>
        <OpenBtn handleSidebarToggle={handleSidebarToggle} isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

export default Sidebar;
