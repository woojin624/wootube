import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchList from './components/search_list/search_list';
import SearchNavBar from './components/search_nav_bar/search_nav_bar';
import styles from './search.module.css';

function Search({ youtube }) {
  // useHistory를 사용하여 경로를 사용
  const history = useHistory();

  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
    // }, []);
  });

  return (
    <div className={styles.search}>
      {/* 자식 컴포넌트인 SearchNavBar에 props으로 history를 보냄 */}
      <SearchNavBar onSearch={search} history={history} />
      <SearchList videos={videos} />
    </div>
  );
}

export default Search;
