import { useContext, useState } from "react";
import styles from "./home.module.scss";
import banner from "./images/Mountains_Banner.jpg";
import DarkButton from "../darkButton/DarkButton";
import Views3D from "../viewParts/Views3D";
import Navigation from "../navigation/Navigation";


interface props {
  myTitle: string;
}

function Home() {
  const [title] = useState<String>("Home");
  return (
      // Picture banner with title and dark button
    <div id={styles.container}>
      <img className={styles.banner} src={banner} alt="Banner Mountain" />
      <h1 className={styles.title}>
        <span>{title}</span>
      </h1>
        <Navigation/>
        <Views3D/>
        <DarkButton/>
    </div>
  );
}

export default Home;
