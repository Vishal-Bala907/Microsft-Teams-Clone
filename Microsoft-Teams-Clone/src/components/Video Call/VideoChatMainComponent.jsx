import React, { useState } from "react";
import styles from "./VideoChatNavbar.module.css";
import styles2 from "./commons.module.css";
import VideoAudio from "../Chat Area Layouts/VideoAudio";
import { FaRegBell } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsChatText } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
// import "./commons.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Calender from "./Calender";

export default function VideoChatMainComponent({
  localMicrophoneTrack,
  localCameraTrack,
  remoteUsers,
  agoraEngine,
  setInCall,
  inCall,
  setJoined,
  usePublish,
}) {
  const [selectedItem, setSelectedItem] = useState("chat");
  function renderComponent() {
    if (selectedItem === "chat") {
      return (
        <VideoAudio
          localMicrophoneTrack={localMicrophoneTrack}
          localCameraTrack={localCameraTrack}
          remoteUsers={remoteUsers}
        />
      );
    } else if (selectedItem === "calender") {
      return <Calender />;
    }
  }
  return (
    <div className={styles.maincomp}>
      <div className={styles.sidebar}>
        <div
          className={
            selectedItem === "activity" ? styles2.selected : styles2.size
          }
          onClick={() => {
            setSelectedItem("activity");
          }}
        >
          <FaRegBell />
          <p>Activity ..</p>
        </div>
        <div
          className={
            selectedItem === "community" ? styles2.selected : styles2.size
          }
          onClick={() => {
            setSelectedItem("community");
          }}
        >
          <IoIosPeople />
          <p>Community</p>
        </div>
        <div
          className={selectedItem === "chat" ? styles2.selected : styles2.size}
          onClick={() => {
            setSelectedItem("chat");
          }}
        >
          <BsChatText />
          <p>Chat</p>
        </div>
        <div
          className={
            selectedItem === "calender" ? styles2.selected : styles2.size
          }
          onClick={() => {
            setSelectedItem("calender");
          }}
        >
          <SlCalender />
          <p>Clanader</p>
        </div>
      </div>
      {/* SIDE BAR 🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆<SideBar /> */}
      <div className="rightArea" style={{ width: "100%" }}>
        <div className={styles.videoSection}>
          <TopBar
            agoraEngine={agoraEngine}
            localCameraTrack={localCameraTrack}
            localMicrophoneTrack={localMicrophoneTrack}
            setInCall={setInCall}
            inCall={inCall}
            setJoined={setJoined}
            usePublish={usePublish}
            remoteUsers={remoteUsers}
          />
          {/* <VideoAudio
            localMicrophoneTrack={localMicrophoneTrack}
            localCameraTrack={localCameraTrack}
            remoteUsers={remoteUsers}
          /> */}
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
