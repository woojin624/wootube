import React, { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './play_search_item.module.css';

const PlaySearchItem = memo(({ video, video: { snippet }, onVideoClick, youtube, addMyItem }) => {
  // console.log('프롭으로 받아온 videoId : ', video);
  // console.log('프롭으로 받아온 channelId : ', channelId);

  const [getVideo, setGetVideo] = useState(null);
  const [channel, setChannel] = useState(null);

  // 유튜브 api로부터 해당 비디오의 디테일과 채널정보를 받아온다
  useEffect(() => {
    youtube
      .videoDetail(video.id) //
      .then((getVideo) => setGetVideo(getVideo));
    youtube
      .channels(video.snippet.channelId) //
      .then((channel) => setChannel(channel));
  }, [video, youtube]);

  // channel && console.log("새로운 채널의 Id : ", channel[0].id);
  // getVideo && console.log('새로운 비디오의 Id : ', getVideo);

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

  let decode = require('unescape');
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <>
      {getVideo && channel && (
        <li className={styles.video} onClick={clickVideo}>
          <div className={styles.thumbWrap}>
            <img className={styles.thumbnail} src={getVideo[0].snippet.thumbnails.medium.url} alt='video thumbnail' />
          </div>
          <div className={styles.contentWrap}>
            <p className={styles.title}>{decode(getVideo[0].snippet.title)}</p>
            <div className={styles.viewDateWrap}>
              <h4 className={styles.viewCount}>{numberWithCommas(getVideo[0].statistics.viewCount)} views</h4>
              <h4 className={styles.date}>ㅣ Premiered {getVideo[0].snippet.publishedAt.substring(0, 10)}</h4>
            </div>
            <div className={styles.channelWrap}>
              <img className={styles.channelIcon} src={channel[0].snippet.thumbnails.medium.url} alt='' />
              <p className={styles.channel}>{getVideo[0].snippet.channelTitle}</p>
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
      )}
    </>
  );
});

export default PlaySearchItem;
