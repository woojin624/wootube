import React from 'react';
import styles from './play_video_detail.module.css';

const PlayVideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video} //
      type='text/html'
      title='youtube video player'
      width='100%'
      height='500px'
      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
      frameBorder='0'
      allowFullScreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default PlayVideoDetail;
