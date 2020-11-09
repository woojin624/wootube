import React, { useRef } from "react";
import styles from "./search_nav_bar.module.css";

const SearchNavBar = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navWrap}>
        <div className={styles.logo}>
          <img className={styles.img} src="/images/icon-logo.png" alt="logo" />
          <h1 className={styles.title}>WOOTUBE</h1>
        </div>
        <div className={styles.searchWrap}>
          <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
          <button className={styles.button} type="submit" onClick={onClick}>
            <img className={styles.buttonImg} src="/images/icon-search-blue.png" alt="search" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SearchNavBar;
