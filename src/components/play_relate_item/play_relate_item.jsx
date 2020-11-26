import React from 'react';
import styles from './play_relate_item.module.css';

const PlayRelateItem = ({ video, video: { snippet }, onVideoClick }) => {
  let decode = require('unescape');

  return (
    <>
      <li className={styles.video} onClick={() => onVideoClick(video)}>
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
