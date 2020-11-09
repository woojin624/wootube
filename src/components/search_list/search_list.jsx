import React from "react";
import SearchVideoItem from "../search_video_item/search_video_item";
import styles from "./search_list.module.css";

const SearchList = (props) => (
  <ul className={styles.list}>
    {props.videos.map((video) => (
      <SearchVideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default SearchList;
