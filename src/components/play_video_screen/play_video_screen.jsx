import React, { useEffect, useState } from 'react';
import styles from './play_video_screen.module.css';

const PlayVideoScreen = ({ video, youtube }) => {
  let decode = require('unescape');

  const [mainVideo, setMainVideo] = useState();
  const [channel, setChannel] = useState();
  // const [mainVideo, setMainVideo] = useState([]);
  useEffect(() => {
    youtube
      .videoDetail(video.id) //
      .then((mainVideo) => setMainVideo(mainVideo));
  }, []);
  useEffect(() => {
    youtube
      .channels(video.snippet.channelId) //
      .then((channel) => setChannel(channel));
  }, []);
  channel && console.log(channel[0]);
  mainVideo && console.log(mainVideo[0]);

  return (
    <>
      {mainVideo && (
        <section className={styles.detail}>
          <div className={styles.line}></div>
          <h2 className={styles.title}>{decode(mainVideo[0].snippet.title)}</h2>
          <h4 className={styles.viewCount}>등록일 {mainVideo[0].snippet.publishedAt}</h4>
          <h4 className={styles.viewCount}>조회수 {mainVideo[0].statistics.viewCount}</h4>
          <h4 className={styles.viewCount}>좋아요 {mainVideo[0].statistics.likeCount}</h4>
          <h4 className={styles.viewCount}>싫어요 {mainVideo[0].statistics.dislikeCount}</h4>
          <div className={styles.videoBox}>
            <iframe
              className={styles.video} //
              type='text/html'
              title='youtube video player'
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${mainVideo[0].id}?autoplay=1`}
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.channelWrap}>
            <img className={styles.channelIcon} src={channel[0].snippet.thumbnails.medium.url} alt='' />
            <h3 className={styles.channelTitle}>{mainVideo[0].snippet.channelTitle}</h3>
          </div>
          <pre className={styles.description}>{mainVideo[0].snippet.description}</pre>
        </section>
      )}
    </>
  );
};

export default PlayVideoScreen;
