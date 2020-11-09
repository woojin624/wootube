import React, { useEffect, useState } from 'react';
import MainSearchBar from './components/main_search_bar/main_search_bar.jsx';
import Footer from './components/footer/footer.jsx';
import styles from './main.module.css';
import MainVideoList from './components/main_video_list/main_video_list.jsx';

const Main = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopularMain() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.main}>
      <MainSearchBar />
      <MainVideoList videos={videos} />
      <Footer />
    </div>
  );
};

export default Main;
