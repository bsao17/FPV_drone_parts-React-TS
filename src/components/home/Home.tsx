import { useContext, useState } from "react";
import styles from "./home.module.scss";
import banner from "./images/Mountains_Banner.jpg";


interface props {
  myTitle: string;
}

function Home({myTitle}: props) {
  const [title] = useState<String>(myTitle);
  return (
      // Picture banner with title and dark button
    <div id={styles.container}>
      <img className={styles.banner} src={banner} alt="Banner Mountain" />
      <h1 className={styles.title}>
        <span>{title}</span>
      </h1>
    </div>
  );
}

export default Home;
