import React from 'react';
import styles from './play_relate_item.module.css';

const PlayRelateItem = ({ video, video: { snippet }, onVideoClick }) => {
  let decode = require('unescape');

  // 비디오 클릭시 작동하는 함수 비디오를 재생하고 스크롤을 맨위로 올린다
  const clickVideo = () => {
    onVideoClick(video);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <li className={styles.video} onClick={clickVideo}>
        <div className={styles.thumbWrap}>
          <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='video thumbnail' />
        </div>
        <div className={styles.contentWrap}>
          <p className={styles.title}>{decode(snippet.title)}</p>
          <div className={styles.channelWrap}>
            {/* <img className={styles.channelIcon} src="" alt="" /> */}
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
      <div className={styles.line}></div>
    </>
  );
};

export default PlayRelateItem;
