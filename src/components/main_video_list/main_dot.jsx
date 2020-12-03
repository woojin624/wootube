import React from 'react';
import styles from './main_dot.module.css';

const MainDot = ({ dotNav, dotClick }) => {
  return (
    <li>
      <span onClick={dotClick} key={dotNav} className={styles.dot}>
        &nbsp;
      </span>
    </li>
  );
};

export default MainDot;
