import React, { useState } from "react";
import styles from "./styles/VideoAudio.module.css";
import { useSelector } from "react-redux";
import {
  LocalVideoTrack,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteUsers,
  useClientEvent,
} from "agora-rtc-react";
import { IMicrophoneAudioTrack, ICameraVideoTrack } from "agora-rtc-sdk-ng";
import config from "./config";

export default function VideoAudio({
  localMicrophoneTrack,
  localCameraTrack,
  remoteUsers,
}) {
  const playVideo = useSelector((state) => state.chatcontext.playVideo);

  return (
    <div className={styles.videos} style={{ backgroundColor: "#202020" }}>
      <div className="vid" style={{ height: "30%", width: "30%" }}>
        <LocalVideoTrack track={localCameraTrack} play={playVideo} />
      </div>
      {remoteUsers.map((remoteUser) => (
        <div className={styles.videoFrames} key={remoteUser.uid}>
          <RemoteUser user={remoteUser} playVideo={true} playAudio={true} />
        </div>
      ))}
    </div>
  );
}
