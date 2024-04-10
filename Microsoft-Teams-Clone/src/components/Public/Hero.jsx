import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className={styles.Hero}>
        <h1>Easily connect with people in Microsoft Teams free</h1>
        <p className={styles.para}>
          Learn how Teams free can help you seamlessly meet and chat with
          others, share files online, and collaborate with anyone, from
          anywhere—all in one app.
        </p>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <Link to="/signup" className={styles.signup}>
              Signup for free
            </Link>
            <a className={styles.download} href="">
              Download Teams
            </a>
          </div>
          <a className={styles.download} style={{ marginTop: "1em" }} href="">
            Explore Teams for your business
          </a>
        </div>
        <div
          style={{ height: "29rem", width: "100%", backgroundSize: "cover" }}
        >
          <div className={styles.mainImage}></div>
        </div>
      </div>
    </>
  );
}
