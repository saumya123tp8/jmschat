import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);


  //here useeffect is used for fetch messages from db as query is written bellow
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });


    //clean up
    return () => {
      unSub();
    };
  }, [data.chatId]);

  // console.log(messages)

  return (
    <div className="messages">
    {/* here messages is an array of messag so we shoul map each msg */}
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
      {/* <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/> */}
    </div>
  );
};

export default Messages;