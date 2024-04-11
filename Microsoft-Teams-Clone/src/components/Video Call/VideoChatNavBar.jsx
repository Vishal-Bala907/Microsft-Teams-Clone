import React from "react";
import styles from "./VideoChatNavbar.module.css";
import { useSelector } from "react-redux";

export default function NavBar() {
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
      <>
        <nav className={styles.videoChatnavbar}>
          <div>
            <input
              className={styles.videoChatnavbarInput}
              type="search"
              name=""
              id=""
              placeholder="search"
            />
          </div>
          <div className={styles.right}>
            <span style={{ fontWeight: 900 }}>...</span>
            <div>
              <span className={styles.profilePic} style={profileStyle}></span>
            </div>
          </div>
        </nav>
      </>
    </>
  );
}
