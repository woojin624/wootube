import React, { useEffect, useRef } from 'react';
import styles from './play_search_section.module.css';

const PlaySearchSection = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    // value = 'asd';
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter' && inputRef.current.value !== '') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchWrap}>
      <input ref={inputRef} className={styles.input} type='search' placeholder='Search...' onKeyPress={onKeyPress} />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img className={styles.buttonImg} src='./images/icon-search-blue.png' alt='search' />
      </button>
    </div>
  );
};

export default PlaySearchSection;
