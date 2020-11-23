import React from 'react';
import styles from './play_list.module.css';

const PlayList = (props) => {
  return (
    <div className={styles.listWrap}>
      <div className={styles.listNameWrap}>
        <h2 className={styles.resultsListTop}>Results</h2>
        <h2 className={styles.myListTop}>My Play List</h2>
      </div>
    </div>
  );
};

export default PlayList;
