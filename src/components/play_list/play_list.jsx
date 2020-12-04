import React, { memo, useRef, useState } from 'react';
import PlayMyList from '../play_my_list/play_my_list';
import PlayRelateList from '../play_relate_list/play_relate_list';
import classNames from 'classnames';
import styles from './play_list.module.css';

const PlayList = memo(({ videos, handleVideo, myItems, addMyItem, delMyItem }) => {
  const [listClass, setListClass] = useState(true);
  const listNameWrap = useRef();

  // resultList와 myList를 토글로 번갈아가며 클래스를 추가 제거하여 변경한다
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
        addMyItem={addMyItem}
      />
      <PlayMyList
        videos={videos} //
        handleVideo={handleVideo}
        listClass={listClass}
        myItems={myItems}
        delMyItem={delMyItem}
      />
    </div>
  );
});

export default PlayList;
