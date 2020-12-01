import React, { useEffect, useState } from 'react';
import MainSearchBar from './components/main_search_bar/main_search_bar.jsx';
import Footer from './components/footer/footer.jsx';
import styles from './main.module.css';
import MainVideoList from './components/main_video_list/main_video_list.jsx';
import { useHistory } from 'react-router-dom';

function Main({ youtube, getValue, onVideoClick }) {
  // useHistory를 사용하여 경로를 사용
  const history = useHistory();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube.mostPopularMain().then((videos) => setVideos(videos));
  }, [youtube]);

  // main_video_list의 클래스를 조작해줄 focus states
  const [focus, setFocus] = useState(true);
  // 자식 컴포넌트로부터 조작될 함수
  // search_nav_bar에서 클래스 이름을 바꿔서 가져오는 것까지 해결
  // setFocus를 써서 state변경
  const handleClass = (e) => {
    setFocus(e);
  };

  // useEffect(() => {
  //   // console.log('class changed', focus);
  // }, [focus]);

  // 자식 컴포넌트의 input에서 전송된 값을 getValue를 통해 또 다시 부모 컴포넌트에게 전송
  const handleValue = (e) => {
    getValue(e);
  };

  // 자식컴포넌트로부터 video를 받아오는 함수이면서 클릭시 play페이지로 이동시킨다
  const handleVideo = (e) => {
    onVideoClick(e);
    history.push('/play');
  };

  return (
    <div className={styles.main}>
      {/* 자식 컴포넌트인 MainSearchBar에 props으로 history를 보냄 */}
      <MainSearchBar history={history} handleClass={handleClass} handleValue={handleValue} />
      <MainVideoList videos={videos} focus={focus} handleVideo={handleVideo} />
      <Footer />
    </div>
  );
}

export default Main;
