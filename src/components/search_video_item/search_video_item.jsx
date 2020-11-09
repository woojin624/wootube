import React from "react";
import styles from "./search_video_item.module.css";

const SearchVideoItem = (props) => (
  <li className={styles.video}>
    <img className={styles.thumbnail} src={props.video.snippet.thumbnails.medium.url} alt="video thumbnail" />
    <div className={styles.contentWrap}>
      <p className={styles.title}>{props.video.snippet.title}</p>
      <div className={styles.channelWrap}>
        {/* <img className={styles.channelIcon} src="" alt="" /> */}
        <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default SearchVideoItem;
