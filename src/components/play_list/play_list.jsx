import React from 'react';
import PlayMyList from '../play_my_list/play_my_list';
import PlayRelateList from '../play_relate_list/play_relate_list';
import styles from './play_list.module.css';

const PlayList = ({ videos, handleVideo }) => {
  return (
    <div className={styles.listWrap}>
      <div className={styles.listNameWrap}>
        <h2 className={styles.resultsListTop}>Results</h2>
        <h2 className={styles.myListTop}>My Play List</h2>
      </div>
      <PlayRelateList
        videos={videos} //
        handleVideo={handleVideo}
      />
      <PlayMyList />
    </div>
  );
};

export default PlayList;
