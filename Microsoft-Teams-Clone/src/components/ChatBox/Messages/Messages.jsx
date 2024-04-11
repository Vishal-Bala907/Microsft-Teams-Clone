import { useEffect, useState } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase.js";
import { doc, onSnapshot } from "firebase/firestore";
const texts = [];
export default function Messages() {
  const currentUser = JSON.parse(sessionStorage.getItem("messages"));
  const dispatch = useDispatch();
  const chatId = useSelector((state) => state.chatcontext.chatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [chatId]);
  return (
    <div>
      {messages.map((m) => {
        return <Message message={m} key={m.id} />;
      })}
    </div>
  );
}
