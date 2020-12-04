import React, { memo, useRef } from 'react';
import classNames from 'classnames';
import styles from './play_relate_item.module.css';

const PlayRelateItem = memo(({ video, video: { snippet }, onVideoClick, addMyItem }) => {
  let decode = require('unescape');

  // 비디오 클릭시 작동하는 함수 비디오를 재생하고 스크롤을 맨위로 올린다
  const clickVideo = () => {
    onVideoClick(video);
    window.scrollTo(0, 0);
  };

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
      <div className={styles.line}></div>
    </>
  );
});

export default PlayRelateItem;
