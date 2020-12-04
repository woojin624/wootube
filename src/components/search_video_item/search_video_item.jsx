import React, { memo, useRef } from 'react';
import classNames from 'classnames';
import styles from './search_video_item.module.css';

// 검색된 결과를 출력할 때 한개 한개의 비디오를 표시할 video_item

// 부모 컴포넌트로부터 props을 받아온다 (videos)
// 리스트 형식으로 li 태그를 사용하고 그 안에 썸네일과 제목, 채널 이름을 넣음

const SearchVideoItem = memo(({ video, video: { snippet }, onVideoClick, addMyItem }) => {
  const addBtn = useRef();

  // 검색결과에서 오른쪽 아래 리스트에 추가하는 아이콘을 누를 시 작동하는 함수
  // 클릭 시 애니메이션이 작동하며
  // 해당 영상의 정보를 플레이 리스트에 추가한다
  const onAddBtnClick = (e) => {
    e.stopPropagation();
    addBtn.current.className = `${classNames(styles.addBtn, styles.active)}`;
    console.log(video);

    const myItem = {
      id: Date.now(),
      video: video,
    };
    addMyItem(myItem);
  };

  let decode = require('unescape');
  return (
    <li className={styles.video} onClick={() => onVideoClick(video)}>
      <div className={styles.thumbWrap}>
        <img className={styles.thumbnail} src={snippet.thumbnails.high.url} alt='video thumbnail' />
      </div>
      <div className={styles.contentWrap}>
        <p className={styles.title}>{decode(snippet.title)}</p>
        <div className={styles.channelWrap}>
          {/* <img className={styles.channelIcon} src="" alt="" /> */}
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
      <div ref={addBtn} className={styles.addBtn} onClick={onAddBtnClick}>
        <div className={styles.threeLine}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <div className={styles.add}>
          <div className={styles.hor}></div>
          <div className={styles.ver}></div>
        </div>
      </div>
    </li>
  );
});

export default SearchVideoItem;
