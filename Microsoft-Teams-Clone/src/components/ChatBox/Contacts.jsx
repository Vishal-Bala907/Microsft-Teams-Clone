import React, { useState, useEffect } from "react";
import styles from "./ChatNavbar.module.css";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { changeUser } from "../../Redux Store/NavBar Slices/ChatContext";

export default function Contacts() {
  const currentUser = JSON.parse(sessionStorage.getItem("profile"));
  const [chats, setChats] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getChats = () => {
      if (currentUser) {
        const unsub = onSnapshot(
          doc(db, "userChats", currentUser.uid),
          (doc) => {
            setChats(doc.data() || {});
          }
        );
        return unsub;
      }
    };

    const unsubscribe = getChats();
    return () => unsubscribe();
  }, [currentUser]);
  const [userId, setUserId] = useState(null);

  const handleSelect = (user) => {
    setSelectedUser(user);
    dispatch(changeUser(user));
    setUserId(user.uid);
  };
  // const [selectedPerson , setSelectedPerson]
  // userId === chat.userInfo.id ? styles.userSelected : styles.user;

  return (
    <div style={{ width: "28vw", height: "auto" }}>
      <Search />
      <section className={styles.contacts}>
        {Object.entries(chats)
          .sort((a, b) => b[1].date - a[1].date)
          .map(([chatId, chat]) => (
            <div
              key={chatId}
              className={
                userId === chat.userInfo.uid ? styles.userSelected : styles.user
              }
              onClick={() => {
                handleSelect(chat.userInfo);
              }}
            >
              <div
                className={styles.img}
                style={{
                  backgroundImage: `url('${chat.userInfo.photoURL}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p>
                <b style={{ fontSize: "1.3  vw" }}>
                  {chat.userInfo.displayName}
                </b>
                <p>{chat.userInfo.lastMessage?.text}</p>
              </p>
            </div>
          ))}
      </section>
    </div>
  );
}
