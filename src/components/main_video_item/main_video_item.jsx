import React from 'react';
import styles from './main_video_item.module.css';

// 메인화면에 나오게 되는 인기영상리스트에 들어가는 video_item이다
// props으로 받아온 값을 통해 비디오의 썸네일과 정보를 보여준다

const MainVideoItem = ({ video, onVideoClick }) => {
  let decode = require('unescape');
  console.log(video);
  const clickVideo = () => {
    onVideoClick(video);
  };
  return (
    <li className={styles.video} onClick={clickVideo}>
      <figure className={styles.thumbWrap}>
        <img className={styles.thumbnail} src={video.snippet.thumbnails.standard.url} alt='video thumbnails' />
      </figure>
      <div className={styles.info}>
        <p className={styles.title}>{decode(video.snippet.title)}</p>
        <p className={styles.channel}>{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default MainVideoItem;
