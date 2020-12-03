import React, { useEffect, useRef } from 'react';
import PlayRelateItem from '../play_relate_item/play_relate_item';
import classNames from 'classnames';
import styles from './play_relate_list.module.css';

const PlayRelateList = ({ videos, handleVideo, listClass }) => {
  // console.log(listClass);

  const list = useRef();

  const listActive = () => {
    if (listClass === true) {
      list.current.className = `${classNames(styles.list, styles.active)}`;
    } else if (listClass === false) {
      list.current.className = `${classNames(styles.list)}`;
    }
  };

  useEffect(() => {
    listActive();
  }, [listClass]);

  return (
    <ul ref={list} className={classNames(styles.list, styles.active)}>
      {videos.map((video) => (
        <PlayRelateItem key={video.id} video={video} onVideoClick={handleVideo} />
      ))}
    </ul>
  );
};

export default PlayRelateList;
