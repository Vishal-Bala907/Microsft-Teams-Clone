import React, { useRef } from "react";
import styles from "./ChatBox.module.css";

import { useContext, useState } from "react";
import { changeUser } from "../../Redux Store/NavBar Slices/ChatContext";
import { useSelector } from "react-redux";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const profile = JSON.parse(sessionStorage.getItem("profile"));
export default function Input() {
  const mess = useRef("");
  const currentUser = JSON.parse(sessionStorage.getItem("profile"));
  const chatId = useSelector((state) => state.chatcontext.chatId);
  const user = useSelector((state) => state.chatcontext.user);

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  async function sendMessage() {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      try {
        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);

        await updateDoc(doc(db, "chats", chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: serverTimestamp(),
            img: downloadURL,
          }),
        });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      try {
        await updateDoc(doc(db, "chats", chatId), {
          messages: arrayUnion({
            id: uuid(),
            text: mess.current.value,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
        mess.current.value = "";
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  }
  return (
    <div className={styles.chatSend}>
      <input
        className={styles.textInput}
        ref={mess}
        type="text"
        name=""
        id=""
      />
      <button className={styles.sendButton} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
