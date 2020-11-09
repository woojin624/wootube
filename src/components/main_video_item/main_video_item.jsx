import React from "react";
import styles from "./main_video_item.module.css";

const MainVideoItem = (props) => (
    <li className={styles.video}>
        <figure className={styles.thumbWrap}>
            <img className={styles.thumbnail} src={props.video.snippet.thumbnails.standard.url} alt="video thumbnails" />
        </figure>
        <div className={styles.info}>
            <p className={styles.title}>{props.video.snippet.title}</p>
            <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
        </div>
    </li>
);

export default MainVideoItem;
