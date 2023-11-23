import React from 'react';
import Styles from './RankTap.module.css';
import RankSelect from '../common/RankSelect';

const RankTap = () => {
  return (
    <div className={Styles.rankTap}>
      <RankSelect />
    </div>
  );
};

export default RankTap;
