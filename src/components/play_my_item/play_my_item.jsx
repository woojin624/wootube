import React from 'react';
import styles from './play_my_item.module.css';

const PlayMyItem = ({ myItem, onVideoClick }) => {
  // console.log(myItem.video);

  let decode = require('unescape');

  // 비디오 클릭시 작동하는 함수 비디오를 재생하고 스크롤을 맨위로 올린다
  const clickVideo = () => {
    onVideoClick(myItem.video);
    window.scrollTo(0, 0);
  };
  return (
    <>
      {myItem.video && (
        <li className={styles.video} onClick={clickVideo}>
          <div className={styles.thumbWrap}>
            <img className={styles.thumbnail} src={myItem.video.snippet.thumbnails.medium.url} alt='video thumbnail' />
          </div>
          <div className={styles.contentWrap}>
            <p className={styles.title}>{decode(myItem.video.snippet.title)}</p>
            <div className={styles.channelWrap}>
              <p className={styles.channel}>{myItem.video.snippet.channelTitle}</p>
            </div>
          </div>
        </li>
      )}
      <div className={styles.line}></div>
    </>
  );
};

export default PlayMyItem;
