import React, { memo, useRef } from 'react';
import classNames from 'classnames';
import styles from './play_my_item.module.css';

const PlayMyItem = memo(({ myItem, onVideoClick, delMyItem }) => {
  // console.log(myItem.video);

  let decode = require('unescape');

  // 비디오 클릭시 작동하는 함수 비디오를 재생하고 스크롤을 맨위로 올린다
  const clickVideo = () => {
    onVideoClick(myItem.video);
    window.scrollTo(0, 0);
  };

  const delBtn = useRef();
  // 마이리스트에서 오른쪽 아래 리스트에서 삭제하는 아이콘을 누를 시 작동하는 함수
  // 클릭 시 애니메이션이 작동하며
  // 해당 영상의 정보를 플레이 리스트에서 0.7초뒤 삭제한다
  const onDelBtnClick = (e) => {
    e.stopPropagation();

    delBtn.current.className = `${classNames(styles.delBtn, styles.active)}`;
    setTimeout(() => {
      delMyItem(myItem);
    }, 700);
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
          <div ref={delBtn} className={styles.delBtn} onClick={onDelBtnClick}>
            <i className='fas fa-trash-alt'></i>
          </div>
        </li>
      )}
      <div className={styles.line}></div>
    </>
  );
});

export default PlayMyItem;
