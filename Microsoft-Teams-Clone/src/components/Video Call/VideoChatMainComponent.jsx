import React from "react";
import styles from "./VideoChatNavbar.module.css";
import VideoAudio from "../Chat Area Layouts/VideoAudio";
// import "./commons.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

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
  return (
    <div className={styles.maincomp}>
      <SideBar />
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
          <VideoAudio
            localMicrophoneTrack={localMicrophoneTrack}
            localCameraTrack={localCameraTrack}
            remoteUsers={remoteUsers}
          />
        </div>
      </div>
    </div>
  );
}
