import React, { useState } from "react";
import { IoFilterOutline, IoChatbox } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import styles from "./ChatNavbar.module.css";
import Contacts from "./Contacts";
import ChatBox from "./ChatBox.jsx";
import Calender from "./Calender.jsx";
import "./common.css";
import { FaRegBell } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsChatText, BsEmojiSmile } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import styles2 from "./SideBar.module.css";

export default function ContactsArea({
  renderActionButton,
  setJoined,
  joined,
}) {
  const [users, setUsers] = useState([]);
  const profile = JSON.parse(sessionStorage.getItem("profile"));
  let name = "";

  const handleStartCallClick = () => {
    setJoined(true); // Call the setJoined function to initiate the call
  };
  const [feature, setFeature] = useState("chat");

  const renderFeature = (item) => {
    if (feature === "chat") return <ChatBox />;
    else if (feature === "calender") return <Calender />;
  };

  return (
    <>
      <div className={styles2.sidebar}>
        <div
          className={`${styles2.bell} size  ${
            feature === "Activity" ? "hover" : "normal"
          }`}
          onClick={() => setFeature("Activity")}
        >
          <FaRegBell />
          <p>Activity</p>
        </div>
        <div
          className={`${styles2.community} size  ${
            feature === "community" ? "hover" : "normal"
          }`}
          onClick={() => setFeature("community")}
        >
          <IoIosPeople />
          <p>Community</p>
        </div>

        {/* TODO Chat button 😩😩 */}

        <div
          className={`${styles2.chat} size ${
            feature === "chat" ? "hover" : "normal"
          }`}
          onClick={() => setFeature("chat")}
          id="chat"
        >
          <BsChatText />
          <p>Chat</p>
        </div>

        {/* TODO Calender button 😩😩 */}
        <div
          className={`${styles2.claneder} size  ${
            feature === "calender" ? "hover" : "normal"
          }`}
          onClick={() => setFeature("calender")}
        >
          <SlCalender />
          <p>Clanader</p>
        </div>
      </div>
      {/*!!!!!!!!!!!!!!!!!!!!!!!!!! <SideBar /> */}
      <div className={styles.contactArea}>
        <section className={styles.top}>
          <b style={{ fontSize: "1.5vw", fontWeight: 500 }}>Chat</b>
          <div className={styles.options}>
            <div title="filter">
              <IoFilterOutline />
            </div>
            <div
              title="Start Video Call"
              className={styles.startCall}
              onClick={handleStartCallClick}
            >
              <BsCameraVideo />
              {/* {renderActionButton()} */}
            </div>
            <div className={styles.newChat}>
              <IoChatbox />
            </div>
          </div>
        </section>
        <hr />

        <Contacts users={users} />
      </div>
      {renderFeature()}
    </>
  );
}
