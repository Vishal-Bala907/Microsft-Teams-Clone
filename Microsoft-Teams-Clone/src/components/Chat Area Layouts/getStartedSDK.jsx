import { useEffect, useState } from "react";
import { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { AgoraManager } from "./agoraManager.jsx";
import config from "./config";
import MainComp from "../ChatBox/MainComp.jsx";
import { BsCameraVideo } from "react-icons/bs";
import { Provider } from "react-redux";
import LoginAndProfileStore from "../../Redux Store/NavBar Slices/LoginAndProfileStore.jsx";
import { useSelector } from "react-redux";
import {
  setauthenticatedUser,
  setProfile,
  logout,
} from "../../Redux Store/NavBar Slices/LoginAndImages.js";
export function GetStarted() {
  const agoraEngine = useRTCClient(
    AgoraRTC.createClient({ codec: "vp8", mode: config.selectedProduct })
  );
  const [joined, setJoined] = useState(false); // state only
  const [inCall, setInCall] = useState(true);
  const [users, setUsers] = useState([{}]);
  const profile = useSelector((state) => state.login.profile);

  // const joined = useSelector((state) => state.joinCall.joined);

  const handleJoinClick = () => {
    setJoined(true);
  };

  const handleLeaveClick = () => {
    setJoined(false);
  };

  const renderActionButton = () => {
    return joined ? (
      // <BsCameraVideo onClick={handleLeaveClick}>Leave</BsCameraVideo>
      <BsCameraVideo />
    ) : (
      <BsCameraVideo onClick={handleJoinClick}>Join</BsCameraVideo>
    );
  };

  return (
    <Provider store={LoginAndProfileStore}>
      <div>
        {joined ? (
          <AgoraRTCProvider client={agoraEngine}>
            <AgoraManager
              config={config}
              agoraEngine={agoraEngine}
              joined={joined}
              setJoined={setJoined}
              inCall={inCall}
              setInCall={setInCall}
            ></AgoraManager>
          </AgoraRTCProvider>
        ) : (
          <MainComp
            renderActionButton={renderActionButton}
            setJoined={setJoined}
          />
        )}
      </div>
    </Provider>
  );
}

export default GetStarted;
