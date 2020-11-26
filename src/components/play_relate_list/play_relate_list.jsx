import React from 'react';
import PlayRelateItem from '../play_relate_item/play_relate_item';
import styles from './play_relate_list.module.css';

const PlayRelateList = ({ videos, handleVideo }) => {
  return (
    <ul className={styles.list}>
      {videos.map((video) => (
        <PlayRelateItem key={video.id} video={video} onVideoClick={handleVideo} />
      ))}
    </ul>
  );
};

export default PlayRelateList;
