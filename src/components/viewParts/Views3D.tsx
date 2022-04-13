import React from "react"
import styles from "./views3D.module.scss"
import support from "./images/FPV-support_2022.png"

class Views3D extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {/* <video id={styles.antenna} controls>
          <source src={"./assets/video/Antenna-FPV_2022.mp4"} type={"video/mp4"} />
        </video> */}
                <img className={styles.image} src={support} alt="FPV-support"/>
                <div className={styles.buttons}>
                    <a className={"btn btn-success me-3"} href={""}>Dounwload</a>
                    <a className={"btn btn-primary"} href="../../html/Support-FPV_2022.html" target={"_blank"}>3D
                        view</a>
                </div>
            </div>
        );
    }
}

export default Views3D;
