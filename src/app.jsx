import React, { useState } from 'react';
import './app.css';
import './reset.css';
import Main from './main';
import Search from './search';
import Youtube from './service/youtube';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Play from './play';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
function App() {
  const [searchValue, SetSearchValue] = useState([]);
  // main_search_bar로부터 받아온 value값
  const getValue = (e) => {
    // console.log(e);
    SetSearchValue(e);
  };

  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (e) => {
    setSelectedVideo(e);
    // console.log(e);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={['/', '/main']} exact>
          {/* connect Main */}
          <Main youtube={youtube} getValue={getValue} onVideoClick={selectVideo} />
        </Route>
        <Route path='/search'>
          {/* connect Search */}
          <Search youtube={youtube} searchValue={searchValue} onVideoClick={selectVideo} />
        </Route>
        <Route path='/play'>
          {/* connect Play */}
          <Play youtube={youtube} getSearch={getValue} searchValue={searchValue} onVideoClick={selectVideo} getVideo={selectedVideo} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
