import React from 'react';
import styles from './play_my_list.module.css';

const PlayMyList = (props) => (
  <ul className={styles.list}>
    MyList
    {/* {videos.map((video) => (
      <SearchVideoItem key={video.id} video={video} onVideoClick={handleVideo} />
    ))} */}
  </ul>
);

export default PlayMyList;
