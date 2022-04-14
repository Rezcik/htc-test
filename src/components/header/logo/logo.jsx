import styles from "./logo.module.css";
import logo from "../../../assets/img/logo.svg";
import React from "react";

export function Logo(){
    return (
        <div className={styles.logo}>
            <img src={logo}/>
        </div>
    );
}
