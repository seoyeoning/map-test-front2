import React, { useState } from 'react';
import Styles from './RoundTap.module.css';

const RoundTap = () => {
  const [activeMaker, setActiveMaker] = useState(true);

  const handleActiveRoot = () => {
    setActiveMaker(!activeMaker);
  };

  return (
    <div className={Styles.roundTap}>
      <button
        className={`${Styles.Btn} ${activeMaker ? Styles.active : ''}`}
        onClick={handleActiveRoot}
      >
        마커
      </button>
      <button className={`${activeMaker ? '' : Styles.active}`} onClick={handleActiveRoot}>
        루트
      </button>
    </div>
  );
};

export default RoundTap;
