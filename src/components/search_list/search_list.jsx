import React, { memo } from 'react';
import SearchVideoItem from '../search_video_item/search_video_item';
import styles from './search_list.module.css';

// 검색된 결과를 보여줄 리스트이다. 자식 컴포넌트인 SearchVideoItem을 가져와 리스트를 채운다

// unordered list 형식인 ul태그를 사용하고 그 안을 li인 video_item으로 채운다
// 부모 컴포넌트로부터 props를 받아오며 받아온 props의 videos를 map을 통해 빙글빙글 돌며 하나의 비디오마다 id를 설정해준다

const SearchList = memo(({ videos, handleVideo, addMyItem }) => {
  // console.log(videos);
  return (
    <ul className={styles.list}>
      {videos.map((video) => (
        <SearchVideoItem key={video.id} video={video} onVideoClick={handleVideo} addMyItem={addMyItem} />
      ))}
    </ul>
  );
});

export default SearchList;
