import React, { createContext, useContext, useState, useEffect } from "react";
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
import VideoChatNavBar from "../Video Call/VideoChatNavBar.jsx";
import VideoChatMainComponent from "../Video Call/VideoChatMainComponent.jsx";

import { Provider } from "react-redux";
import LoginAndProfileStore from "../../Redux Store/NavBar Slices/LoginAndProfileStore.jsx";

// Define the shape of the Agora context
const AgoraContext = createContext(null);

// AgoraProvider component to provide the Agora context to its children
export const AgoraProvider = ({
  children,
  localCameraTrack,
  localMicrophoneTrack,
}) => (
  <AgoraContext.Provider value={{ localCameraTrack, localMicrophoneTrack }}>
    {children}
  </AgoraContext.Provider>
);

// Custom hook to access the Agora context
export const useAgoraContext = () => {
  const context = useContext(AgoraContext);
  if (!context)
    throw new Error("useAgoraContext must be used within an AgoraProvider");
  return context;
};

// AgoraManager component responsible for handling Agora-related logic and rendering UI
//  joined={joined}
// setJoined={setJoined}
export const AgoraManager = ({
  config,
  children,
  joined,
  setJoined,
  inCall,
  setInCall,
}) => {
  // Retrieve local camera and microphone tracks and remote users
  const agoraEngine = useRTCClient();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  const { isLoading: isLoadingMic, localMicrophoneTrack } =
    useLocalMicrophoneTrack();
  const remoteUsers = useRemoteUsers();
  // Join a channel when the user clicks on the 'Join' button in the nav bar
  const [role, setRole] = useState("host"); // Default role is host

  // Publish local tracks
  usePublish([localMicrophoneTrack, localCameraTrack]);

  // Join the Agora channel with the specified configuration
  useJoin({
    appid: config.appId,
    channel: config.channelName,
    token: config.rtcToken,
    uid: config.uid,
  });

  // Event listeners for user interaction in the channel
  useClientEvent(agoraEngine, "user-joined", (user) => {
    console.log("The user", user.uid, "has joined the channel");
  });

  useClientEvent(agoraEngine, "user-left", (user) => {
    console.log("The user", user.uid, "has left the channel");
  });

  useClientEvent(agoraEngine, "user-published", (user, mediaType) => {
    console.log("The user", user.uid, "has published media in the channel");
  });

  // Function to handle role change (host/audience)
  const handleRoleChange = (event) => {
    setRole(event.target.value);
    if (event.target.value === "host") {
      agoraEngine
        .setClientRole("host")
        .then(() => {
          console.log("Client role set to host successfully");
        })
        .catch((error) => {
          console.error("Error setting client role:", error);
        });
    } else {
      agoraEngine
        .setClientRole("audience")
        .then(() => {
          console.log("Client role set to audience successfully");
        })
        .catch((error) => {
          console.error("Error setting client role:", error);
        });
    }
  };

  // Cleanup function for local tracks when component unmounts
  useEffect(() => {
    return () => {
      localCameraTrack?.close();
      localMicrophoneTrack?.close();
    };
  }, []);

  // Check if devices are still loading
  const deviceLoading = isLoadingMic || isLoadingCam;
  if (deviceLoading) return <div>Loading devices...</div>;

  // Render the AgoraProvider and associated UI components
  return (
    <Provider store={LoginAndProfileStore}>
      <AgoraProvider
        localCameraTrack={localCameraTrack}
        localMicrophoneTrack={localMicrophoneTrack}
      >
        {children}

        <VideoChatNavBar />
        <VideoChatMainComponent
          localCameraTrack={localCameraTrack}
          localMicrophoneTrack={localMicrophoneTrack}
          remoteUsers={remoteUsers}
          agoraEngine={agoraEngine}
          inCall={inCall}
          joined={joined}
          setJoined={setJoined}
          setInCall={setInCall}
          usePublish={usePublish}
        />
      </AgoraProvider>
    </Provider>
  );
};

// Export the AgoraManager component as the default export
export default AgoraManager;
