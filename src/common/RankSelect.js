import React from 'react';
import Styles from './RankSelect.module.css';

const RankSelect = () => {
  return (
    <div className={Styles.rankSelectContainer}>
      <select className={Styles.rankSelect}>
        <option>실시간 조회수 TOP 10</option>
        <option>최근 최다 좋아요 TOP 10</option>
        <option>최근 최다 찜 TOP 10</option>
      </select>
    </div>
  );
};

export default RankSelect;
