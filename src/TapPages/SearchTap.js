import React from 'react';
import Styles from './SearchTap.module.css';
import SearchInput from '../common/SearchInput';
import RoundTap from '../common/RoundTap';

import { AiFillStar } from 'react-icons/ai';
import MakeBtn from '../common/MakeBtn';
import MakeBtn2 from '../common/MakeBtn2';

const SearchTap = () => {
  return (
    <div className={Styles.searchTap}>
      <SearchInput />
      <RoundTap />
      <div className={Styles.searchMarker}>
        <div className={Styles.searchMarkerInfo}>
          <div className={Styles.title}>을지로 스타벅스</div>
          <div className={Styles.writer}>동궁</div>
          <div className={Styles.date}>2023.10.21</div>
        </div>
        <button className={Styles.fav}>
          <AiFillStar />
        </button>
      </div>
      <MakeBtn text="그룹 만들기" />
      <MakeBtn2 text="수정 완료" />
      <MakeBtn2 text="마커 생성" />
    </div>
  );
};

export default SearchTap;
