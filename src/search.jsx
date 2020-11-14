import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayVideoDetail from './components/play_video_detail/play_video_detail';
import SearchList from './components/search_list/search_list';
import SearchNavBar from './components/search_nav_bar/search_nav_bar';
import styles from './search.module.css';

function Search({ youtube, searchValue, onVideoClick }) {
  // main_search_bar에서 app.jsx까지 올라간 searchValue데이터를 부모로부터 받아왔다
  const [getValue, setGetValue] = useState();
  // 컴포넌트가 업데이트 됐을 때 setGetValue로 input창의 value값을 입력
  // search(searchValue)를 통해 메인에서 검색한 검색어의 영상을 띄움
  useEffect(() => {
    // console.log(searchValue);
    setGetValue(searchValue);
    search(searchValue);
  }, [searchValue]);

  // useHistory를 사용하여 경로를 사용
  const history = useHistory();

  const [videos, setVideos] = useState([]);
  // 비디오를 선택하면 선택한 비디오의 정보를 저장하고, 그 정보를 이용해서 비디오의 디테일을 보여준다
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = (query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  // 자식요소로부터 video로 정보를 받아오는 함수이면서 li요소 클릭시 play페이지로 이동시키는 함수
  const handleVideo = (e) => {
    onVideoClick(e);
    history.push('/play');
  };

  // useEffect(() => {
  //   youtube.mostPopular().then((videos) => setVideos(videos));
  // }, [youtube]);

  return (
    <div className={styles.search}>
      {/* 자식 컴포넌트인 SearchNavBar에 props으로 history를 보냄 */}
      <SearchNavBar onSearch={search} history={history} getValue={getValue} />
      <section className={styles.content}>
        <div className={styles.list}>
          <SearchList
            videos={videos} //
            handleVideo={handleVideo}
          />
        </div>
      </section>
    </div>
  );
}

export default Search;
