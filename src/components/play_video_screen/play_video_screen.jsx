import React, { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './play_video_screen.module.css';

const PlayVideoScreen = memo(({ videoId, channelId, youtube }) => {
  // console.log('프롭으로 받아온 videoId : ', videoId);
  // console.log('프롭으로 받아온 channelId : ', channelId);

  const [video, setVideo] = useState(null);
  const [channel, setChannel] = useState(null);

  // 유튜브 api로부터 해당 비디오의 디테일과 채널정보를 받아온다
  useEffect(() => {
    youtube
      .videoDetail(videoId) //
      .then((video) => setVideo(video));
    youtube
      .channels(channelId) //
      .then((channel) => setChannel(channel));
  }, [videoId, channelId, youtube]);

  // channel && console.log('새로운 채널의 Id : ', channel[0]);
  // video && console.log('새로운 비디오의 Id : ', video[0]);

  // 설명부분
  const desc = useRef();
  let activeMore = false;
  // 비디오의 설명 부분을 자세히, 간단히 로 토글하는 함수
  const moreDesc = (e) => {
    if (activeMore === false) {
      desc.current.className = `${classNames(styles.description)}`;
      e.currentTarget.innerText = 'SHOW LESS';
      activeMore = true;
    } else if (activeMore === true) {
      desc.current.className = `${classNames(styles.description, styles.compact)}`;
      e.currentTarget.innerText = 'SHOW MORE';
      activeMore = false;
    }
  };
  //
  // title Symbols decoding
  let decode = require('unescape');
  // cut text after Date
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      {video && channel && (
        <section className={styles.detail}>
          <div className={styles.line}></div>
          <h2 className={styles.title}>{decode(video[0].snippet.title)}</h2>
          <div className={styles.aboutWrap}>
            <div className={styles.viewDateWrap}>
              <h4 className={styles.viewCount}>
                <i className='fas fa-play'></i> {numberWithCommas(video[0].statistics.viewCount)}
              </h4>
              <h4 className={styles.date}>ㅣ Premiered {video[0].snippet.publishedAt.substring(0, 10)}</h4>
            </div>
            <div className={styles.likeWrap}>
              <h4 className={styles.likeCount}>
                <i className='fas fa-thumbs-up'></i> {numberWithCommas(video[0].statistics.likeCount)}
              </h4>
              <h4 className={styles.dislikeCount}>
                <i className='fas fa-thumbs-down'></i> {numberWithCommas(video[0].statistics.dislikeCount)}
              </h4>
            </div>
          </div>
          <div className={styles.videoBox}>
            <iframe
              className={styles.video} //
              type='text/html'
              title='youtube video player'
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${video[0].id}?autoplay=1`}
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.line}></div>
          <div className={styles.channelWrap}>
            <img className={styles.channelIcon} src={channel[0].snippet.thumbnails.medium.url} alt='' />
            <h3 className={styles.channelTitle}>{video[0].snippet.channelTitle}</h3>
          </div>
          <pre ref={desc} className={classNames(styles.description, styles.compact)}>
            {video[0].snippet.description}
          </pre>
          <span className={styles.more} onClick={moreDesc}>
            SHOW MORE
          </span>
          <div className={styles.line}></div>
        </section>
      )}
    </>
  );
});
// .play_video_screen_description__39AEj.play_video_screen_compact__qBmwf
export default PlayVideoScreen;
