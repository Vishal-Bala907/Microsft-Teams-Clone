import React, { useState } from "react";
import styles from "./ChatNavbar.module.css";
import Profile from "../Users/Profile";

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
  const [visible, setVisible] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <input type="search" name="" id="" placeholder="search" />
        </div>
        <div className={styles.right}>
          <span style={{ fontWeight: 900 }}>...</span>
          <div
            onClick={() => {
              setVisible(!visible);
            }}
            className={styles.profile}
            id="profilePic"
            style={profileStyle}
          ></div>
        </div>
      </nav>

      <Profile visible={visible} />
    </>
  );
}
