import React, { Component } from "react";
import styles from "./home.module.scss";
import { gsap } from "gsap";

interface props {}

const ref: React.RefObject<any> = React.createRef();

const myContext = React.createContext(false);

class Home extends Component<{}, { title: String; sentence: String }> {
  constructor(props: props) {
    super(props);
    this.state = {
      title: "My new hobby",
      sentence: "",
    };
    this.rotateMe = this.rotateMe.bind(this);
  }

  rotateMe() {
    gsap.to(ref.current, { rotateY: 360 });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 ref={ref} className={styles.title}>
          <span>{this.state.title}</span>
          <br />
          <button className="btn btn-secondary" onClick={this.rotateMe}>Rotate me</button>
        </h1>
      </div>
    );
  }
}

export default Home;
