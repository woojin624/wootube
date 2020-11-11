import React, { useRef } from 'react';
import MainVideoItem from '../main_video_item/main_video_item';
import styles from './main_video_list.module.css';

// 메인화면에서 인기영상을 보여주는 비디오 슬라이더이다
// 기본 상태에서 리스트가 보이며 돋보기에 포커싱이 되었을 때
// 리스트의 높이가 낮아지며 오버플로우에 가려져 보이지 않게된다.

const MainVideoList = (props) => {
  // const videolistWrap = useRef();
  // const videolistActive = () => {
  //     let className = videolistWrap.current.className;
  //     videolistWrap.current.className = `${[className, styles.focus].join(" ")}`;
  // };

  // console.log(videolistWrap);
  const videolist = useRef();
  const dotNavEls = useRef();

  let slideId = 0;

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
    <section className={styles.videolistWrap}>
      <div className={styles.sliderContainer}>
        <ul ref={videolist} className={styles.videolist}>
          {props.videos.map((video) => (
            <MainVideoItem key={video.id} video={video} />
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
