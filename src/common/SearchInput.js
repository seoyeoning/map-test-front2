import React from 'react';
import Styles from './SearchInput.module.css';

const SearchInput = () => {
  return (
    <div className={Styles.SearchInputContainer}>
      <input className={Styles.searchInput} placeholder="장소를 입력하세요." />
    </div>
  );
};

export default SearchInput;
