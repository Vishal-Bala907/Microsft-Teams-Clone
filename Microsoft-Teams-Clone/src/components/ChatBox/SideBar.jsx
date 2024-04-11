import React, { useState } from "react";
import "./common.css";
import { FaRegBell } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsChatText, BsEmojiSmile } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const [defaultSelection, setDefaultSelection] = useState("chat");
  return (
    <div className={styles.sidebar}>
      <div
        className={`${styles.bell} size  ${
          defaultSelection === "Activity" ? "hover" : "normal"
        }`}
        onClick={() => setDefaultSelection("Activity")}
      >
        <FaRegBell />
        <p>Activity</p>
      </div>
      <div
        className={`${styles.community} size  ${
          defaultSelection === "community" ? "hover" : "normal"
        }`}
        onClick={() => setDefaultSelection("community")}
      >
        <IoIosPeople />
        <p>Community</p>
      </div>

      {/* TODO Chat button 😩😩 */}

      <div
        className={`${styles.chat} size ${
          defaultSelection === "chat" ? "hover" : "normal"
        }`}
        onClick={() => setDefaultSelection("chat")}
        id="chat"
      >
        <BsChatText />
        <p>Chat</p>
      </div>

      {/* TODO Calender button 😩😩 */}
      <div
        className={`${styles.claneder} size  ${
          defaultSelection === "calender" ? "hover" : "normal"
        }`}
        onClick={() => setDefaultSelection("calender")}
      >
        <SlCalender />
        <p>Clanader</p>
      </div>
    </div>
  );
}
