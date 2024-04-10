import React from "react";
import { FaRegHandPaper } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsChatText, BsEmojiSmile, BsCameraVideoFill } from "react-icons/bs";
import { IoGridOutline, IoShare } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaMicrophone } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";
import styles from "./VideoChatNavbar.module.css";
import { SlArrowDown } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { toggleVideoPlay } from "../../Redux Store/NavBar Slices/ChatContext";
// import "./commons.css";

export default function TopBar({
  agoraEngine,
  localMicrophoneTrack,
  localCameraTrack,
  setInCall,
  inCall,
  joined,
  setJoined,
  usePublish,
  remoteUsers,
}) {
  const dispatch = useDispatch();
  // const { playVideo } = useSelector((state) => state.chatcontext.playVideo);
  // const [inCall, setinCall] = useState(true);
  const handleLeaveClick = async () => {
    try {
      await agoraEngine.leave();
      localCameraTrack && localCameraTrack.close();
      localMicrophoneTrack && localMicrophoneTrack.close();
      setInCall(false);
      setJoined(false);
    } catch (err) {
      console.log(err);
    }
    // };
  };
  const stopCamera = () => {
    localCameraTrack.close();
  };
  const startCamera = () => {};

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.leftOptions}>
          <div>
            <BsChatText style={{ fontSize: "larger" }} />
            <p style={{ fontSize: "x-small" }}>Chat</p>
          </div>
          <div>
            <IoIosPeople style={{ fontSize: "larger" }} />
            <p style={{ fontSize: "x-small" }}>People</p>
          </div>
          <div>
            <FaRegHandPaper style={{ fontSize: "larger" }} />
            <p style={{ fontSize: "x-small" }}>Raise</p>
          </div>
          <div>
            <BsEmojiSmile style={{ fontSize: "larger" }} />
            <p style={{ fontSize: "x-small" }}>React</p>
          </div>
          <div>
            <IoGridOutline style={{ fontSize: "larger" }} />
            <p style={{ fontSize: "x-small" }}>View</p>
          </div>
          <div>
            <HiDotsHorizontal style={{ fontSize: "larger" }} />
            <p style={{ fontSize: "x-small" }}>More</p>
          </div>
        </div>
        <hr style={{ width: "2em", rotate: "90deg" }} />

        <div
          className={styles.leftOptions}
          onClick={() => {
            dispatch(toggleVideoPlay());
          }}
        >
          <div>
            <BsCameraVideoFill style={{ fontSize: "larger" }} />
            <p style={{ fontSize: "x-small" }}>Camera</p>
          </div>

          <div>
            <FaMicrophone style={{ fontSize: "larger" }} />
            <p style={{ fontSize: "x-small" }}>Mic</p>
          </div>
          <div>
            <IoShare style={{ fontSize: "larger" }} />
            <p style={{ fontSize: "x-small" }}>Share</p>
          </div>
          <div>
            <button className="LeaveButton" onClick={handleLeaveClick}>
              <ImPhoneHangUp />
              <span style={{ marginLeft: "12%" }}>Leave</span>
              {/* <hr style={{ width: "2em", rotate: "90deg" }} /> */}
              <SlArrowDown style={{ marginLeft: "12%" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
