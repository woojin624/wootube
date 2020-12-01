import styles from './main_search_bar.module.css';
import classNames from 'classnames';
import React, { useRef } from 'react';

// 메인화면에서 보이는 로고와 검색창을 담당하는 컴포넌트이다

// 부모 컴포넌트로부터 history를 받아와서 button이 onClick시 history.push('/search')가 작동하도록 함
const MainSearchBar = ({ history, handleClass, handleValue }) => {
  // history가 나온다
  // console.log(history);
  const searchWrap = useRef();
  const input = useRef();
  let searchValue;
  let listClass;

  // 인풋 태그에 전달해주는 함수
  // 검색창에 무언가를 입력한 상태에서 엔터키를 누르면 mainToSearch 함수가 실행
  const onKeyPress = (event) => {
    if (event.key === 'Enter' && input.current.value !== '') {
      mainToSearch();
    }
  };

  // onKeyPress와 onClick에서 동시에 같은 함수가 일어나게 하기 위하여 분리시킨 함수
  const mainToSearch = () => {
    // props로 받아온 handleValue를 통해 현재 input에 입력된 값을 부모 컴포넌트에 전송
    searchValue = input.current.value;
    handleValue(searchValue);
    // props로 받아온 history를 사용하여 서치로 이동
    history.push('/search');
  };

  // 메인 검색창 돋보기 모양을 누르면 포커스온이 된다
  // 포커스온이 되면 focus클래스가 추가되며 검색창이 길어진다

  // ******포커스온이 되는 순간 형제 컴포넌트인 MainVideoList의 최상위 노드인 section.videolistWrap에 focus클래스를 추가해야한다**
  // 본인 -> 형제로 전달을 해주거나
  // 본인 -> 부모 -> 형제로 전달해주는 방법을 찾아야한다
  const searchFocusOn = () => {
    // 사용하는 css가 postCSS이므로 일반적인 클래스 추가 방식이 아닌
    // join을 통하여 클래스 이름을 연결시켜준다.
    // let className = searchWrap.current.className;
    // searchWrap.current.className = `${[className, styles.focus].join(' ')}`;
    searchWrap.current.className = `${classNames(styles.searchWrap, styles.focus)}`;
    // listClass = 'main_video_list_videolistWrap__2w75m main_video_list_focus__1dTQR';
    listClass = false;
    // 부모컴포넌트로부터 받아와 작동시키는 함수
    handleClass(listClass);
  };

  // 메인 검색창에서 포커스아웃 될 때 만약 input안의 value가 비어있으면 클래스를 제거하여 원위치로 돌아온다
  // 하지만 만약 어떠한 값이 입력되어 있으면 포커스가 나가도 현재상태를 유지
  const searchFocusOut = () => {
    if (input.current.value === '') {
      // let className = styles.searchWrap;
      // searchWrap.current.className = className;
      searchWrap.current.className = `${classNames(styles.searchWrap)}`;
      // listClass = 'main_video_list_videolistWrap__2w75m';
      listClass = true;
      // 부모컴포넌트로부터 받아와 작동시키는 함수
      handleClass(listClass);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='./images/icon-logo.png' alt='logo' />
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>WOOTUBE</h1>
          <p className={styles.slogan}>You can make your playlist on playing</p>
        </div>
      </div>
      <div ref={searchWrap} className={styles.searchWrap}>
        {/* 인풋을 통하여 검색창의 인터랙션을 제어, onFocus와 onBlur */}
        <input ref={input} className={styles.input} onFocus={searchFocusOn} onBlur={searchFocusOut} onKeyPress={onKeyPress} type='search' placeholder='' />
        <button className={styles.button} onClick={mainToSearch} type='submit'>
          <img className={styles.buttonImg} src='./images/icon-search-blue.png' alt='search' />
        </button>
      </div>
    </header>
  );
};

export default MainSearchBar;
