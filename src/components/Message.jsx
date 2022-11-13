import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      className="message owner"
    >
    {/* <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    > */}
      <div className="messageInfo">
        {/* <img
          src="https://th.bing.com/th/id/OIP.uie5hh6D9ZSGlRWxP11g2wHaEo?pid=ImgDet&w=1920&h=1200&rs=1"
          alt=""
        /> */}
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        {/* <p>hello</p> */}
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
        {/* <img src="https://th.bing.com/th/id/OIP.uie5hh6D9ZSGlRWxP11g2wHaEo?pid=ImgDet&w=1920&h=1200&rs=1" alt="" /> */}
      </div>
    </div>
  );
};

export default Message;