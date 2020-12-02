import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './play_my_list.module.css';

const PlayMyList = ({ videos, onVideoClick, listClass }) => {
  console.log(listClass);

  const list = useRef();

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

  return (
    <ul ref={list} className={styles.list}>
      {videos[4] && (
        <li className={styles.video} onClick={clickVideo}>
          <div className={styles.thumbWrap}>
            <img className={styles.thumbnail} src={videos[4].snippet.thumbnails.medium.url} alt='video thumbnail' />
          </div>
          <div className={styles.contentWrap}>
            <p className={styles.title}>{decode(videos[4].snippet.title)}</p>
            <div className={styles.channelWrap}>
              <p className={styles.channel}>{videos[4].snippet.channelTitle}</p>
            </div>
          </div>
        </li>
      )}
      <div className={styles.line}></div>
      {videos[2] && (
        <li className={styles.video} onClick={clickVideo}>
          <div className={styles.thumbWrap}>
            <img className={styles.thumbnail} src={videos[2].snippet.thumbnails.medium.url} alt='video thumbnail' />
          </div>
          <div className={styles.contentWrap}>
            <p className={styles.title}>{decode(videos[2].snippet.title)}</p>
            <div className={styles.channelWrap}>
              <p className={styles.channel}>{videos[2].snippet.channelTitle}</p>
            </div>
          </div>
        </li>
      )}
      <div className={styles.line}></div>
    </ul>
  );
};

export default PlayMyList;
