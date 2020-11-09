import React, { useEffect, useState } from "react";
import MainSearchBar from "./components/main_search_bar/main_search_bar.jsx";
import Footer from "./components/footer/footer.jsx";
import styles from "./main.module.css";
import MainVideoList from "./components/main_video_list/main_video_list.jsx";

const Main = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyB7cih2UEFLVvPB2PjkA68OaJN36SbSRgI", requestOptions)
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));
    }, []);
    return (
        <div className={styles.main}>
            <MainSearchBar />
            <MainVideoList videos={videos} />
            <Footer />
        </div>
    );
};

export default Main;
