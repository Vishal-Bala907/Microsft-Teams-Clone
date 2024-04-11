import React from "react";
import styles from "./Profile.module.css";

export default function Profile({ visible }) {
  const profile = JSON.parse(sessionStorage.getItem("profile"));
  const displayname = profile.displayName;
  const email = profile.email;
  const photoUrl = profile.photoURL;
  // alert(visible);

  return (
    <divc
      // styles={visible ? { visibility: "visible" } : { visibility: "hidden" }}
      className={visible ? styles.profileVisible : styles.profileInvisible}
    >
      <img className={styles.img} src={photoUrl} alt="" />
      <div className={styles.displayName}>{displayname}</div>
      <div className={styles.email}>{email}</div>
    </divc>
  );
}
