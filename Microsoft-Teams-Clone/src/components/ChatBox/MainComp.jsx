import React from "react";
import ChatNavbar from "./ChatNavbar";
import ContactsArea from "./ContactsArea.jsx";
import { Provider } from "react-redux";
import LoginAndProfileStore from "../../Redux Store/NavBar Slices/LoginAndProfileStore.jsx";

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
        <ContactsArea
          renderActionButton={renderActionButton}
          joined={joined}
          setJoined={setJoined}
        />
      </div>
    </Provider>
  );
}
