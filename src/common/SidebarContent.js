import React from 'react';
import Styles from './SidebarMenu.module.css';
import SearchTap from '../TapPages/SearchTap';
import RankTap from '../TapPages/RankTap';
import FavTap from '../TapPages/FavTap';
import GroupTap from '../TapPages/GroupTap';
import MarkerTap from '../TapPages/MarkerTap';
import RouteTap from '../TapPages/RouteTap';

const SidebarContent = ({ selectedTab }) => {
  return (
    <div className={Styles.sidebarContent}>
      {selectedTab === '검색' && <SearchTap />}
      {selectedTab === '랭킹' && <RankTap />}
      {selectedTab === '찜' && <FavTap />}
      {selectedTab === '그룹' && <GroupTap />}
      {selectedTab === '마커' && <MarkerTap />}
      {selectedTab === '루트' && <RouteTap />}
    </div>
  );
};

export default SidebarContent;
