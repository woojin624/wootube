import React, { memo, useEffect, useState } from 'react';
import styles from './play_search_item.module.css';

const PlaySearchItem = memo(({ video, video: { snippet }, onVideoClick, youtube }) => {
  console.log('프롭으로 받아온 videoId : ', video);
  // console.log('프롭으로 받아온 channelId : ', channelId);

  const [getVideo, setGetVideo] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    youtube
      .videoDetail(video.id) //
      .then((getVideo) => setGetVideo(getVideo));
    youtube
      .channels(video.snippet.channelId) //
      .then((channel) => setChannel(channel));
  }, [video, youtube]);

  // channel && console.log("새로운 채널의 Id : ", channel[0].id);
  getVideo && console.log('새로운 비디오의 Id : ', getVideo);

  const clickVideo = () => {
    onVideoClick(video);
    window.scrollTo(0, 0);
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
        </li>
      )}
    </>
  );
});

export default PlaySearchItem;
