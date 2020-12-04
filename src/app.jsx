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

  // myItems 배열을 스테이트로 생성
  const [myItems, setMyItems] = useState([]);
  // addToList 아이콘을 누르면 작동하는 함수
  // 플레이리스트에 해당 비디오를 추가한다
  const createMyListItem = (myItem) => {
    // setMyItems((myItem) => {
    //   const updated = { ...myItems };
    //   updated[myItem.id] = myItem;
    //   return updated;
    // });
    // myItems 배열에 myItem을 추가
    setMyItems(myItems.concat(myItem));
  };

  return (
    <BrowserRouter basename='/wootube'>
      <Switch>
        <Route path={['/', '/main']} exact>
          {/* connect Main */}
          <Main youtube={youtube} getValue={getValue} onVideoClick={selectVideo} />
        </Route>
        <Route path='/search'>
          {/* connect Search */}
          <Search youtube={youtube} searchValue={searchValue} onVideoClick={selectVideo} addMyItem={createMyListItem} />
        </Route>
        <Route path='/play'>
          {/* connect Play */}
          <Play youtube={youtube} getSearch={getValue} searchValue={searchValue} onVideoClick={selectVideo} getVideo={selectedVideo} addMyItem={createMyListItem} myItems={myItems} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
