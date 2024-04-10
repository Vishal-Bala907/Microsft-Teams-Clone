import React from "react";
import styles from "./ChatBox.module.css";
import Messages from "./Messages/Messages";
import Input from "./Input";

export default function ChatBox() {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.main}>
        <Messages />
      </div>
      <Input />
    </div>
  );
}
