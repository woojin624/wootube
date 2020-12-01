import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayVideoScreen from './components/play_video_screen/play_video_screen';
import PlaySearchSection from './components/play_search_section/play_search_section';
import PlayList from './components/play_list/play_list';
import styles from './play.module.css';
import PlayNavBar from './components/play_nav_bar/play_nav_bar';

function Play({ youtube, getVideo, searchValue, getSearch, onVideoClick }) {
  // main_search_bar에서 app.jsx까지 올라간 searchValue데이터를 부모로부터 받아왔다
  const [getValue, setGetValue] = useState();
  // 컴포넌트가 업데이트 됐을 때 setGetValue로 input창의 value값을 입력
  // search(searchValue)를 통해 메인에서 검색한 검색어의 영상을 띄움
  useEffect(() => {
    setGetValue(searchValue);
    search(searchValue);
  }, [searchValue]);

  //   const [getValue, setGetValue] = useState();
  const history = useHistory();

  const [videos, setVideos] = useState([]);

  // 비디오를 선택하면 선택한 비디오의 정보를 저장하고, 그 정보를 이용해서 비디오의 디테일을 보여준다
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleValue = (e) => {
    getSearch(e);
  };

  // 자식요소로부터 video로 정보를 받아오는 함수이면서 li요소 클릭시 play페이지로 이동시키는 함수
  const handleVideo = (e) => {
    onVideoClick(e);
    history.push('/play');
    console.log(e);
  };

  // app으로부터 받아온 getVideo로 state를 업데이트한다
  useEffect(() => {
    setSelectedVideo(getVideo);
    // console.log(getVideo);
  }, [getVideo]);

  const search = (query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  window.onload = function () {
    history.push('/');
  };

  return (
    <>
      <PlayNavBar onSearch={search} handleValue={handleValue} history={history} getValue={getValue} />
      {/* selectedVideo가 있다면 */}
      {selectedVideo && (
        <div className={styles.play}>
          <div className={styles.playWrap}>
            <PlayVideoScreen videoId={selectedVideo.id} channelId={selectedVideo.snippet.channelId} youtube={youtube} />
            <PlaySearchSection />
          </div>
          <PlayList
            videos={videos} //
            handleVideo={handleVideo}
          />
        </div>
      )}
    </>
  );
}

export default Play;
