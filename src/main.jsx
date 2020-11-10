import React, { useEffect, useState } from 'react';
import MainSearchBar from './components/main_search_bar/main_search_bar.jsx';
import Footer from './components/footer/footer.jsx';
import styles from './main.module.css';
import MainVideoList from './components/main_video_list/main_video_list.jsx';
import { useHistory } from 'react-router-dom';

const Main = ({ youtube, props }) => {
  // useHistory를 사용하여 경로를 사용
  const history = useHistory();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopularMain() //
      .then((videos) => setVideos(videos));
    // }, []);
  });
  return (
    <div className={styles.main}>
      {/* 자식 컴포넌트인 MainSearchBar에 props으로 history를 보냄 */}
      <MainSearchBar history={history} />
      <MainVideoList videos={videos} />
      <Footer />
    </div>
  );
};

export default Main;
