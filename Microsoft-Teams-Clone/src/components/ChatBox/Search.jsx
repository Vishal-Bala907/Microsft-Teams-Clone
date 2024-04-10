import React, { useRef } from "react";
import styles from "./ChatNavbar.module.css";
import { useState } from "react";
import { db } from "../../firebase";
import { RxCross2 } from "react-icons/rx";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
export default function Search() {
  // const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const username = useRef("");
  const [IMG_URL, setImageUrl] = useState("");
  // const IMG_URL = "";

  const currentUser = JSON.parse(sessionStorage.getItem("profile"));

  const handleSearch = async () => {
    console.log(username.current.value);
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username.current.value)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        // console.log("found", user);
      });
      // setErr(false);
      setImageUrl(user.photoURL);
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  function closeSearch() {
    setUser(null);
    username.current.value = "";
  }

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <section className={user ? styles.searchFound : styles.search}>
      <div className={styles.serachWrapper}>
        <input
          className={styles.searchEnter}
          type="text"
          ref={username}
          placeholder="Search user"
          onKeyDown={handleKey}
        />
        <span
          style={{ position: "relative", right: "2em", fontSize: "1.5em" }}
          onClick={closeSearch}
        >
          <RxCross2 />
        </span>
      </div>
      {user && (
        <section className={styles.contacts} onClick={handleSelect}>
          <div
            className={`${styles.userFound} `}
            // onClick={() => userSelected(user)}
          >
            <div
              className={styles.img}
              style={{
                backgroundImage: "url('" + `${user.photoURL}` + "')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <p>
              <b>{user.displayName}</b>
            </p>
          </div>
        </section>
      )}
    </section>
  );
}
