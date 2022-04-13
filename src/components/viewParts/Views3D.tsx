import React from "react"
import styles from "./views3D.module.scss"
import support from "./FPV-support_2022.png"

interface props {}

class Views3D extends React.Component<props> {
  
  render() {
    return (
      <div className={styles.container}>
        {/* <video id={styles.antenna} controls>
          <source src={"./assets/video/Antenna-FPV_2022.mp4"} type={"video/mp4"} />
        </video> */}
        <img className={styles.image} src={support} alt="FPV-support" />
        <div className={styles.buttons}>
          <a className={"btn btn-success"} href="https://">Dounwload</a>
          <a className={"btn btn-primary"} href="https://">3D view</a>
        </div>
      </div>
    );
  }
}

export default Views3D;
