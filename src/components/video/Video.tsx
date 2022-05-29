import React, {useContext, useEffect} from "react";
import styles from "./video.module.scss"
import {DarkModeContext} from "../context/darkContext";
import HeaderBanner from "../header/HeaderBanner";
import {LogoContext} from "../context/ContexNavigationLogo";

const Video = () => {
    const contextLogo = useContext(LogoContext)
    const contextDark = useContext(DarkModeContext)
    useEffect(()=>{
        contextLogo.togglePageStl(false)
        contextLogo.togglePageVideo(true)
        contextLogo.togglePageAdmin(false)
    }, [])
    return (
        <div className={styles.container}>
            <HeaderBanner title={'Vidéos'}/>
            <section className={"d-flex flex-wrap justify-content-center align-items-center"}>
                <div>
                    <h5 className={contextDark.theme ? styles.videoTitle : styles.videoTitleDark}>DJI Mavic mini</h5>
                    <iframe
                        className={contextDark.theme ? styles.frame : styles.frameDark}
                        width="560" height="315" src="https://www.youtube.com/embed/5XkVJ2X2ndE"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <h5 className={contextDark.theme ? styles.videoTitle : styles.videoTitleDark}>5'- FPV</h5>
                    <iframe
                        className={contextDark.theme ? styles.frame : styles.frameDark}
                        width="560" height="315" src="https://www.youtube.com/embed/YGOVhIlmBwo"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <h5 className={contextDark.theme ? styles.videoTitle : styles.videoTitleDark}>DJI Mavic mini</h5>
                    <iframe
                        className={contextDark.theme ? styles.frame : styles.frameDark}
                        width="560" height="315" src="https://www.youtube.com/embed/nJbfpCzWEqk"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <h5 className={contextDark.theme ? styles.videoTitle : styles.videoTitleDark}>5' - FPV</h5>
                    <iframe
                        className={contextDark.theme ? styles.frame : styles.frameDark}
                        width="560" height="315" src="https://www.youtube.com/embed/Lfu6PShJKVI"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <h5 className={contextDark.theme ? styles.videoTitle : styles.videoTitleDark}>FLYHAL - FX1</h5>
                    <iframe
                        className={contextDark.theme ? styles.frame : styles.frameDark}
                        width="560" height="315" src="https://www.youtube.com/embed/PAiQn9_FzqU"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <h5 className={contextDark.theme ? styles.videoTitle : styles.videoTitleDark}>5' - FPV</h5>
                    <iframe
                        className={contextDark.theme ? styles.frame : styles.frameDark}
                        width="560" height="315" src="https://www.youtube.com/embed/mifz_wJKJsE"
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