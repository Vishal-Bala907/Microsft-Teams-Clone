import React from "react";
import styles from "./VideoChatNavbar.module.css";
import { FaRegBell } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsChatText } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import styles2 from "./commons.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.bell} ${styles2.size}`}>
        <FaRegBell />
        <p>Activity</p>
      </div>
      <div className={`${styles.community} ${styles2.size}`}>
        <IoIosPeople />
        <p>Community</p>
      </div>
      <div className={`${styles.chat} ${styles2.size}`}>
        <BsChatText />
        <p>Chat</p>
      </div>
      <div className={`${styles.claneder} ${styles2.size}`}>
        <SlCalender />
        <p>Clanader</p>
      </div>
    </div>
  );
}
