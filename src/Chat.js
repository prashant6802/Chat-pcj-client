import React, {useEffect, useState} from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { nanoid } from "nanoid";
import { IoMdSend } from 'react-icons/io';

const Chat = ({socket,username,room}) => {
  
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if(currentMessage !== ""){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + 
                ":" +
                new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");

        }
        
    };

    useEffect(() => {
        socket.on("recieve_message",(data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);
  
    return (
        <>
    
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container"> {/*ScrollToBottom instead of div*/}
        {messageList.map((messageContent) => {
            return (<div className="message" id={username === messageContent.author ? "you" : (messageContent.author === "Server") ? "servermessage" : "other" } key={nanoid()}>
                    <div className={username === messageContent.author ? "totalmess" : (messageContent.author === "Server") ? "totalmess2" : "totalmess3"}>
                    <div className="message-content">
                        <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                        <div><p>{messageContent.author}</p></div>
                    </div>
                    </div>
            </div>)
        })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input 
            type="text" 
            value={currentMessage}
            placeholder="Enter Message..."
            onChange={(event) => {
                setCurrentMessage(event.target.value);
            }}
            onKeyDown={(event) => {event.key === "Enter" && sendMessage();}}
        />
        <button onClick={sendMessage}><IoMdSend size={34} /></button>
      </div>
    </div>
    </>
  )
}

export default Chat
