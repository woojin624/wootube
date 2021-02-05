import React, { memo } from 'react';
import PlaySearchItem from '../play_search_item/play_search_item';
import SearchVideoItem from '../search_video_item/search_video_item';
import styles from './play_search_list.module.css';

const PlaySearchList = memo(({ videos, handleVideo, youtube, addMyItem }) => {
  return (
    <>
      {videos && (
        <ul className={styles.list}>
          {videos.map((video) => (
            <PlaySearchItem key={video.id} video={video} onVideoClick={handleVideo} youtube={youtube} addMyItem={addMyItem} />
          ))}
        </ul>
      )}
    </>
  );
});

export default PlaySearchList;
