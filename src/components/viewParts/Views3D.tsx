import React, { Component } from "react";
import styles from "./views3D.module.scss";

interface props {}
interface state {
  controlVideo: boolean;
}

class Views3D extends Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      controlVideo: true,
    };
  }
  render() {
    return (
      <div>
        <video id={styles.antenna} controls={this.state.controlVideo}>
          <source
            src={"./assets/videos/Antenna-FPV_2022.mp4"}
            type={"video/mp4"}
          />
        </video>
      </div>
    );
  }
}

export default Views3D;
