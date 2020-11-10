import React, { useRef } from 'react';
import styles from './search_nav_bar.module.css';

// 부모 컴포넌트로부터 history를 받아와서 logo가 onClick시 history.push('/')가 작동하도록 함
const SearchNavBar = ({ onSearch, history }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // 검색결과 화면의 상단에 위치하는 navbar를 보여준다
  // 큰 틀은 header태그를 사용하며 nav태그 안에서 로고와 타이틀, 그리고 검색을 하는 searchWrap영역이 있다
  // searchWrap영역안에는 검색할 것을 입력할 input태그와 값을 전달할 button태그로 이루어져 있으며
  // input에는 onKeyPress() 함수를, button에는 onClick() 함수를 주고 둘 다 handleSearch()라는 함수를 호출하게 된다

  // handleSearch()함수는 ref로 연결된 input태그에 현재 입력된 값(const value = inputRef.current.value;)을 onSearch()로 전달해준다

  return (
    <header className={styles.header}>
      <nav className={styles.navWrap}>
        <div
          className={styles.logo}
          onClick={() => {
            // props로 받아온 history를 사용하여 메인으로 이동
            history.push('/');
          }}
        >
          <img className={styles.img} src='/images/icon-logo.png' alt='logo' />
          <h1 className={styles.title}>WOOTUBE</h1>
        </div>
        <div className={styles.searchWrap}>
          <input ref={inputRef} className={styles.input} type='search' placeholder='Search...' onKeyPress={onKeyPress} />
          <button className={styles.button} type='submit' onClick={onClick}>
            <img className={styles.buttonImg} src='/images/icon-search-blue.png' alt='search' />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SearchNavBar;
