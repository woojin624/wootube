import styles from "./main_search_bar.module.css";
import React, { useRef } from "react";

const MainSearchBar = (props) => {
    const searchWrap = useRef();
    const input = useRef();
    const searchFocusOn = () => {
        let className = searchWrap.current.className;
        searchWrap.current.className = `${[className, styles.focus].join(" ")}`;
    };
    const searchFocusOut = () => {
        let className = styles.searchWrap;
        searchWrap.current.className = className;
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/icon-logo.png" alt="logo" />
                <div className={styles.titleWrap}>
                    <h1 className={styles.title}>WOOTUBE</h1>
                    <p className={styles.slogan}>You can make your playlist on playing</p>
                </div>
            </div>
            <div ref={searchWrap} className={styles.searchWrap}>
                <input ref={input} className={styles.input} onFocus={searchFocusOn} onBlur={searchFocusOut} type="search" placeholder="" />
                <button className={styles.button} type="submit">
                    <img className={styles.buttonImg} src="/images/icon-search-blue.png" alt="search" />
                </button>
            </div>
        </header>
    );
};

export default MainSearchBar;
