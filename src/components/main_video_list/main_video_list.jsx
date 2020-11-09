import React, { useRef } from 'react';
import MainVideoItem from '../main_video_item/main_video_item';
import styles from './main_video_list.module.css';

const MainVideoList = (props) => {
  // const videolistWrap = useRef();
  // const videolistActive = () => {
  //     let className = videolistWrap.current.className;
  //     videolistWrap.current.className = `${[className, styles.focus].join(" ")}`;
  // };

  // console.log(videolistWrap);
  const videolist = useRef();
  const dotNavEls = useRef();
  // console.log(dotNavEls);
  let slideId = 0;
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
