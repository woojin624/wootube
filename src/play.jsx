import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayVideoScreen from './components/play_video_screen/play_video_screen';
import PlaySearchSection from './components/play_search_section/play_search_section';
import PlayList from './components/play_list/play_list';
import styles from './play.module.css';
import SearchNavBar from './components/search_nav_bar/search_nav_bar';

function Play({ youtube, getVideo, searchValue }) {
  //   const [getValue, setGetValue] = useState();
  const history = useHistory();

  const [videos, setVideos] = useState([]);

  // 비디오를 선택하면 선택한 비디오의 정보를 저장하고, 그 정보를 이용해서 비디오의 디테일을 보여준다
  const [selectedVideo, setSelectedVideo] = useState(null);

  // app으로부터 받아온 getVideo로 state를 업데이트한다
  useEffect(() => {
    setSelectedVideo(getVideo);
  }, [getVideo]);

  const search = (query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  return (
    <>
      <SearchNavBar onSearch={search} history={history} />
      {/* selectedVideo가 있다면 */}
      {selectedVideo && (
        <div className={styles.play}>
          <div className={styles.playWrap}>
            <PlayVideoScreen video={selectedVideo} />
            <PlaySearchSection />
          </div>
          <PlayList />
        </div>
      )}
    </>
  );
}

export default Play;
