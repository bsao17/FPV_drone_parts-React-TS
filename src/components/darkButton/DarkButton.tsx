import React, {useState, useEffect, useContext} from "react";
import {DarkModeContext} from "../context/Context";
import styles from "./darkButton.module.scss"
import styled from "styled-components";

const NightModeButton = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 50%;
  border: inset gray 5px;
  margin-top: 2%;
`;
const DayModeButton = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: inset yellow 5px;
  margin-top: 2%;
`;


export default function DarkButton() {
    const context = useContext(DarkModeContext)
    return (
        <div className={styles.container}>
            {context.theme ? (
                <NightModeButton
                    className={context.theme ? `btn btn-dark` : "btn btn-light"}
                    // @ts-ignore
                    onClick={context.toggleTheme}
                >
                    <h2>{context.theme ? "🌚" : "🌞"}</h2>
                </NightModeButton>
            ) : (
                <DayModeButton
                    className={context.theme ? "btn btn-dark" : "btn btn-light"}
                    // @ts-ignore
                    onClick={context.toggleTheme}
                >
                    <h2>{context.theme ? "🌚" : "🌞"}</h2>
                </DayModeButton>
            )}
        </div>
    )
}