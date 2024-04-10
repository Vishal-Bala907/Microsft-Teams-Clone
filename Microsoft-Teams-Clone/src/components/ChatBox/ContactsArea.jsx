import React, { useEffect, useState } from "react";
import { IoFilterOutline, IoChatbox } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import styles from "./ChatNavbar.module.css";
import Contacts from "./Contacts";
import ChatBox from "./Contacts";
import { setJoined } from "../../Redux Store/NavBar Slices/JoinCall.js";
import { useDispatch, useSelector } from "react-redux";

export default function ContactsArea({
  renderActionButton,
  setJoined,
  joined,
}) {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const profile = JSON.parse(sessionStorage.getItem("profile"));
  let name = "";

  // const joined = useSelector((state) => state.joinCall.joined);

  const handleStartCallClick = () => {
    setJoined(true); // Call the setJoined function to initiate the call
    // dispatch(setJoined());
    alert(joined);
  };

  return (
    <div className={styles.contactArea}>
      <section className={styles.top}>
        <b style={{ fontSize: "x-large", fontWeight: 500 }}>Chat</b>
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

      {/* <Contacts users={users} /> */}
      <ChatBox />
    </div>
  );
}
