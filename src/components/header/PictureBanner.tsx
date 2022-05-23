import React from "react"
import mountainsPicture from "./images/Mountains_Banner.jpg"
import styles from "./pictureBanner.module.scss"

const PictureBanner = () => {
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={mountainsPicture} alt="Mountains and drones Banner"/>
        </div>
    )
}

export default PictureBanner;