import React, { useRef, useState } from 'react';
import PlayMyList from '../play_my_list/play_my_list';
import PlayRelateList from '../play_relate_list/play_relate_list';
import classNames from 'classnames';
import styles from './play_list.module.css';

const PlayList = ({ videos, handleVideo, myItems }) => {
  const [listClass, setListClass] = useState(true);
  const listNameWrap = useRef();
  const onResultsClick = () => {
    setListClass(true);
    listNameWrap.current.className = `${classNames(styles.listNameWrap)}`;
  };
  const onMyListClick = () => {
    setListClass(false);
    listNameWrap.current.className = `${classNames(styles.listNameWrap, styles.active)}`;
  };

  return (
    <div className={styles.listWrap}>
      <div ref={listNameWrap} className={styles.listNameWrap}>
        <h2 className={styles.resultsListTop} onClick={onResultsClick}>
          Results
        </h2>
        <h2 className={styles.myListTop} onClick={onMyListClick}>
          My Play List
        </h2>
      </div>
      <PlayRelateList
        videos={videos} //
        handleVideo={handleVideo}
        listClass={listClass}
      />
      <PlayMyList
        videos={videos} //
        handleVideo={handleVideo}
        listClass={listClass}
        myItems={myItems}
      />
    </div>
  );
};

export default PlayList;
