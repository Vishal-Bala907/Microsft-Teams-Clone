import React, { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./Message.css";
import styles from "./message.module.css";
export default function Message({ message }) {
  const currentUser = JSON.parse(sessionStorage.getItem("profile"));
  const chatId = useSelector((state) => state.chatcontext.chatId);
  const user = useSelector((state) => state.chatcontext.user);

  // console.log("Message ", user);
  const ref = useRef();
  console.log("MESSAGES ", message);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  console.log(message);

  return (
    <div
      ref={ref}
      className={
        message.senderId === currentUser.uid
          ? styles.senderWrapper
          : styles.wrapper
      }
    >
      <div
        className={
          message.senderId === currentUser.uid
            ? styles.chatSender
            : styles.chatReciver
        }
      >
        {/* className={`${textstyle}` */}
        <img
          className="img"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : user.photoURL
          }
          alt=""
        />
        <p>{message.text}</p>
        {/* className={`${textFor}`} */}
      </div>
    </div>
  );
}
