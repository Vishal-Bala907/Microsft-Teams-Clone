import React from "react";
import styles from "./ChatNavbar.module.css";
import { useSelector } from "react-redux";

export default function ChatNavbar() {
  const profile = JSON.parse(sessionStorage.getItem("profile"));
  console.log("navbar", profile);
  const IMG_URL = profile.photoURL;
  // Define the profileStyle object to set the background image
  const profileStyle = {
    backgroundImage: "url('" + `${IMG_URL}` + "')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <input type="search" name="" id="" placeholder="search" />
        </div>
        <div className={styles.right}>
          <span style={{ fontWeight: 900 }}>...</span>
          <div
            className={styles.profile}
            id="profilePic"
            style={profileStyle}
          ></div>
        </div>
      </nav>
    </>
  );
}
