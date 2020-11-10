import React from 'react';
import styles from './main_video_item.module.css';

// 메인화면에 나오게 되는 인기영상리스트에 들어가는 video_item이다
// props으로 받아온 값을 통해 비디오의 썸네일과 정보를 보여준다

const MainVideoItem = (props) => (
  <li className={styles.video}>
    <figure className={styles.thumbWrap}>
      <img className={styles.thumbnail} src={props.video.snippet.thumbnails.standard.url} alt='video thumbnails' />
    </figure>
    <div className={styles.info}>
      <p className={styles.title}>{props.video.snippet.title}</p>
      <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
    </div>
  </li>
);

export default MainVideoItem;
