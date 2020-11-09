import React from 'react';
import './app.css';
import './reset.css';
import Main from './main';
import Search from './search';
import Youtube from './service/youtube';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
function App() {
  return (
    <>
      {/* 메인페이지 연결 */}
      <Main youtube={youtube} />
      {/* 서치페이지 연결 */}
      <Search youtube={youtube} />
    </>
  );
}

export default App;
