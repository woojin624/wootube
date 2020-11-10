import styles from './main_search_bar.module.css';
import React, { useRef } from 'react';

// 메인화면에서 보이는 로고와 검색창을 담당하는 컴포넌트이다

// 부모 컴포넌트로부터 history를 받아와서 button이 onClick시 history.push('/search')가 작동하도록 함
const MainSearchBar = ({ history }) => {
  // history가 나온다
  // console.log(history);
  const searchWrap = useRef();
  const input = useRef();

  // 메인 검색창 돋보기 모양을 누르면 포커스온이 된다
  // 포커스온이 되면 focus클래스가 추가되며 검색창이 길어진다
  const searchFocusOn = () => {
    let className = searchWrap.current.className;
    // 사용하는 css가 postCSS이므로 일반적인 클래스 추가 방식이 아닌
    // join을 통하여 클래스 이름을 연결시켜준다.
    searchWrap.current.className = `${[className, styles.focus].join(' ')}`;
  };

  // 메인 검색창에서 포커스아웃 될 때 만약 input안의 value가 비어있으면 클래스를 제거하여 원위치로 돌아온다
  // 하지만 만약 어떠한 값이 입력되어 있으면 포커스가 나가도 현재상태를 유지
  const searchFocusOut = () => {
    if (input.current.value === '') {
      let className = styles.searchWrap;
      searchWrap.current.className = className;
    }
  };

  //

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='/images/icon-logo.png' alt='logo' />
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>WOOTUBE</h1>
          <p className={styles.slogan}>You can make your playlist on playing</p>
        </div>
      </div>
      <div ref={searchWrap} className={styles.searchWrap}>
        {/* 인풋을 통하여 검색창의 인터랙션을 제어, onFocus와 onBlur */}
        <input ref={input} className={styles.input} onFocus={searchFocusOn} onBlur={searchFocusOut} type='search' placeholder='' />
        <button
          className={styles.button}
          onClick={() => {
            // props로 받아온 history를 사용하여 서치로 이동
            history.push('/search');
          }}
          type='submit'
        >
          <img className={styles.buttonImg} src='/images/icon-search-blue.png' alt='search' />
        </button>
      </div>
    </header>
  );
};

export default MainSearchBar;
