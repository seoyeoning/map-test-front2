import React from 'react';
import Styles from './SidebarMenu.module.css';
import { FaSearch, FaMapMarkerAlt, FaMap } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi2';
import { AiFillTrophy, AiFillStar } from 'react-icons/ai';

const menuItems = [
  { icon: <FaSearch />, name: '검색' },
  { icon: <AiFillTrophy />, name: '랭킹' },
  { icon: <AiFillStar />, name: '찜' },
  { icon: <HiUserGroup />, name: '그룹' },
  { icon: <FaMapMarkerAlt />, name: '마커' },
  { icon: <FaMap />, name: '루트' },
];

const SidebarMenu = ({ handleTabChange, selectedTab }) => {
  return (
    <div className={Styles.sidebarMenu}>
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`${Styles.sidebarbtn} ${selectedTab === item.name ? Styles.active : ''}`}
          onClick={() => handleTabChange(item.name)}
        >
          {item.icon}
          <div className={Styles.btnName}>{item.name}</div>
        </button>
      ))}
    </div>
  );
};

export default SidebarMenu;
