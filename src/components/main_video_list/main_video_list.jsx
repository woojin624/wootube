import React, { useEffect, useRef } from 'react';
import MainVideoItem from '../main_video_item/main_video_item';
import classNames from 'classnames';
import styles from './main_video_list.module.css';

// 메인화면에서 인기영상을 보여주는 비디오 슬라이더이다
// 기본 상태에서 리스트가 보이며 돋보기에 포커싱이 되었을 때
// 리스트의 높이가 낮아지며 오버플로우에 가려져 보이지 않게된다.

const MainVideoList = ({ videos, focus, handleVideo }) => {
  // -----업데이트 된 focus를 전달 받는 방법을 찾아야한다
  // console.log(focus);

  let wrapClassFocus = focus;
  // section.videolistWrap을 ref로 받아온다
  const videolistWrap = useRef();

  // videolistWrap의 클래스를 바꾸어줄 함수
  const videolistActive = () => {
    // focus = eval(focus);
    if (wrapClassFocus === false) {
      videolistWrap.current.className = `${classNames(styles.videolistWrap, styles.focus)}`;
    } else if (wrapClassFocus === true) {
      videolistWrap.current.className = `${classNames(styles.videolistWrap)}`;
    }
    // console.log(className);
  };
  // focus가 업데이트되고 videolistActive()함수를 실행시키기 위해 useEffect() 사용
  useEffect(() => {
    videolistActive();
  });

  // 자식컴포넌트로부터 video를 받아오는 함수
  const onVideoClick = (e) => {
    handleVideo(e);
  };

  // videolist, dotNavEls를 ref로 받아온다
  const videolist = useRef();
  const dotNavEls = useRef([]);
  console.log(dotNavEls);
  let slideId = 1;

  // 좌우 화살표의 기능을 맡는 함수
  const mainSlidePrev = () => {
    slideId--;
    if (slideId === -1) {
      slideId = 0;
    }
    videolist.current.style.left = -(slideId * 100) + '%';
  };

  const mainSlideNext = () => {
    slideId++;
    if (slideId === 10) {
      slideId = 9;
    }
    videolist.current.style.left = -(slideId * 100) + '%';
  };

  // 기본적인 슬라이더의 형태를 가지고 있으며
  // ul태그 안에서는 props로 받아온 videos를 map을 통해 각각 MainVideoItem에 id를 부여해준다
  // MainVideoItem에서 생성된 li들로 슬라이더를 채운다

  return (
    <section ref={videolistWrap} className={styles.videolistWrap}>
      <div className={styles.sliderContainer}>
        <ul ref={videolist} className={styles.videolist}>
          {videos.map((video) => (
            <MainVideoItem key={video.id} video={video} onVideoClick={onVideoClick} />
          ))}
        </ul>
        <nav className={styles.arrowNav}>
          <ul>
            <li className={styles.prevBtn} onClick={mainSlidePrev}>
              <div className={styles.arrowTop}></div>
              <div className={styles.arrowBottom}></div>
            </li>
            <li className={styles.nextBtn} onClick={mainSlideNext}>
              <div className={styles.arrowTop}></div>
              <div className={styles.arrowBottom}></div>
            </li>
          </ul>
        </nav>
        <nav className={styles.dotnav}>
          <ul>
            <li>
              <span ref={dotNavEls} className={styles.selected}>
                &nbsp;
              </span>
            </li>
            <li>
              <span ref={dotNavEls}>&nbsp;</span>
            </li>
            <li>
              <span ref={dotNavEls}>&nbsp;</span>
            </li>
            <li>
              <span ref={dotNavEls}>&nbsp;</span>
            </li>
            <li>
              <span ref={dotNavEls}>&nbsp;</span>
            </li>
            <li>
              <span ref={dotNavEls}>&nbsp;</span>
            </li>
            <li>
              <span ref={dotNavEls}>&nbsp;</span>
            </li>
            <li>
              <span ref={dotNavEls}>&nbsp;</span>
            </li>
            <li>
              <span ref={dotNavEls}>&nbsp;</span>
            </li>
            <li>
              <span ref={dotNavEls}>&nbsp;</span>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default MainVideoList;
