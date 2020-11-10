import React from 'react';
import './app.css';
import './reset.css';
import Main from './main';
import Search from './search';
import Youtube from './service/youtube';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/main']} exact>
          {/* 메인페이지 연결 */}
          <Main youtube={youtube} />
        </Route>
        <Route path='/search'>
          {/* 서치페이지 연결 */}
          <Search youtube={youtube} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
