import React from "react";
import ChatNavbar from "./ChatNavbar";
import ChatBox from "./ChatBox.jsx";
import SideBar from "./SideBar.jsx";
import ContactsArea from "./ContactsArea.jsx";
import { Provider } from "react-redux";
import LoginAndProfileStore from "../../Redux Store/NavBar Slices/LoginAndProfileStore.jsx";
// import ChatBox "./ChatBox.jsx";
// import { Outlet } from "react-router-dom";

export default function MainNavbar({
  renderActionButton,
  setJoined,
  joined,
  // users,
}) {
  // for managing messages
  sessionStorage.setItem("messages", JSON.stringify([{}]));
  return (
    <Provider store={LoginAndProfileStore}>
      <ChatNavbar />
      <div className="main">
        <SideBar />
        <ContactsArea
          renderActionButton={renderActionButton}
          joined={joined}
          setJoined={setJoined}
        />
        {/* <Outlet /> */}
        <ChatBox />
      </div>
    </Provider>
  );
}
