import React, {useContext} from "react";
import styles from "./video.module.scss"
import {DarkModeContext} from "../context/darkContext";
import HeaderBanner from "../header/HeaderBanner";

const Video = () => {
    const context = useContext(DarkModeContext)
    return (
        <div className={styles.container}>
            <HeaderBanner title={'Vidéos'}/>
            <section className={"d-flex flex-wrap justify-content-center align-items-center"}>
                <div>
                    <h5 className={styles.videoTitle}>DJI Mavic mini</h5>
                    <iframe
                        className={styles.frame}
                        width="560" height="315" src="https://www.youtube.com/embed/5XkVJ2X2ndE"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <h5 className={styles.videoTitle}>5'- FPV</h5>
                    <iframe
                        className={styles.frame}
                        width="560" height="315" src="https://www.youtube.com/embed/YGOVhIlmBwo"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <h5 className={styles.videoTitle}>DJI Mavic mini</h5>
                    <iframe
                        className={styles.frame}
                        width="560" height="315" src="https://www.youtube.com/embed/nJbfpCzWEqk"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <h5 className={styles.videoTitle}>5' - FPV</h5>
                    <iframe
                        className={styles.frame}
                        width="560" height="315" src="https://www.youtube.com/embed/Lfu6PShJKVI"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <h5 className={styles.videoTitle}>FLYHAL - FX1</h5>
                    <iframe
                        className={styles.frame}
                        width="560" height="315" src="https://www.youtube.com/embed/PAiQn9_FzqU"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </section>
        </div>
    )
}

export default Video