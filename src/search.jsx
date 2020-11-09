import React, { useEffect, useState } from 'react';
import SearchList from './components/search_list/search_list';
import SearchNavBar from './components/search_nav_bar/search_nav_bar';
import styles from './search.module.css';

function Search({ youtube }) {
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
  }, []);

  return (
    <div className={styles.search}>
      <SearchNavBar onSearch={search} />
      <SearchList videos={videos} />
    </div>
  );
}

export default Search;
