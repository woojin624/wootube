import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayVideoDetail from './components/play_video_detail/play_video_detail';
import SearchList from './components/search_list/search_list';
import SearchNavBar from './components/search_nav_bar/search_nav_bar';
import styles from './search.module.css';

function Search({ youtube }) {
  // useHistory를 사용하여 경로를 사용
  const history = useHistory();

  const [videos, setVideos] = useState([]);
  // 비디오를 선택하면 선택한 비디오의 정보를 저장하고, 그 정보를 이용해서 비디오의 디테일을 보여준다
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.search}>
      {/* 자식 컴포넌트인 SearchNavBar에 props으로 history를 보냄 */}
      <SearchNavBar onSearch={search} history={history} />
      <section className={styles.content}>
        {/* selectedVideo가 있다면 PlayVideoDetail를 불러온다 */}
        {selectedVideo && (
          <div className={styles.detail}>
            <PlayVideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <SearchList
            videos={videos} //
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default Search;
