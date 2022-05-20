import { useContext, useState } from "react";
import styles from "./home.module.scss";
import styled from "styled-components";
import { ThemeContext } from "../context/Context";
import banner from "./images/Mountains_Banner.jpg";

const NightModeButton = styled.button`
  background-color: #000;
  border-radius: 5px;
  border: inset gray 5px;
  margin-top: 2%;
`;
const DayModeButton = styled.button`
  background-color: #fff;
  border-radius: 5px;
  border: inset yellow 5px;
  margin-top: 2%;
`;

interface props {
  myTitle: string;
}

function Home({myTitle}: props) {
  const [title] = useState<String>(myTitle);
  const context: any = useContext(ThemeContext); 
  return (
      // Picture banner with title and dark button
    <div id={styles.container}>
      <img className={styles.banner} src={banner} alt="Banner Mountain" />
      <h1 className={styles.title}>
        <span>{title}</span>
        <br />
        {context.theme ? (
          <NightModeButton
            className={context.theme ? `btn btn-dark` : "btn btn-light"}
            onClick={context.toggleTheme}
          >
            <h2>{context.theme ? "🌚" : "🌞"}</h2>
          </NightModeButton>
        ) : (
          <DayModeButton
            className={context.theme ? "btn btn-dark" : "btn btn-light"}
            onClick={context.toggleTheme}
          >
            <h2>{context.theme ? "🌚" : "🌞"}</h2>
          </DayModeButton>
        )}
      </h1>
    </div>
  );
}

export default Home;
