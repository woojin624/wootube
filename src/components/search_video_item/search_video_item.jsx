import React from 'react';
import styles from './search_video_item.module.css';

// 검색된 결과를 출력할 때 한개 한개의 비디오를 표시할 video_item

// 부모 컴포넌트로부터 props을 받아온다 (videos)
// 리스트 형식으로 li 태그를 사용하고 그 안에 썸네일과 제목, 채널 이름을 넣음

const SearchVideoItem = ({ video, video: { snippet }, onVideoClick }) => {
  let decode = require('unescape');

  return (
    <li className={styles.video} onClick={() => onVideoClick(video)}>
      <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='video thumbnail' />
      <div className={styles.contentWrap}>
        <p className={styles.title}>{decode(snippet.title)}</p>
        <div className={styles.channelWrap}>
          {/* <img className={styles.channelIcon} src="" alt="" /> */}
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default SearchVideoItem;
