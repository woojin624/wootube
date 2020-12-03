import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './play_my_list.module.css';
import PlayMyItem from '../play_my_item/play_my_item';

const PlayMyList = ({ videos, onVideoClick, listClass, handleVideo, myItems }) => {
  // console.log(listClass);

  const list = useRef();
  // result리스트와 myList를 토글로 번갈아가며 보여준다
  const listActive = () => {
    if (listClass === false) {
      list.current.className = `${classNames(styles.list, styles.active)}`;
    } else if (listClass === true) {
      list.current.className = `${classNames(styles.list)}`;
    }
  };

  useEffect(() => {
    listActive();
  }, [listClass]);

  let decode = require('unescape');
  const clickVideo = () => {
    // onVideoClick(videos);
    window.scrollTo(0, 0);
  };
  console.log(myItems);
  return (
    <ul ref={list} className={styles.list}>
      {myItems && myItems.length > 0 && myItems.map((myItem) => <PlayMyItem key={myItem.id} myItem={myItem} onVideoClick={handleVideo} />)}
      {/* {myItems.length !== 0 && <PlayMyItem key={myItems.id} myItem={myItems} onVideoClick={handleVideo} />} */}
    </ul>
  );
};

export default PlayMyList;
