import { React, useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Chat.js";
import Detail from "./Detail.js";
import Design from "./Design";

const socket = io.connect("https://accessible-regular-stomach.glitch.me");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [authorsList, setAuthorsList] = useState([]);
  const [styleapp, setStyleApp] = useState("App");
  const [stylebapp, setStyleBapp] = useState("bapp");

  const duoData = {
    room: room,
    author: username,
  };

  const getUsers = async () => {
    socket.emit("get_users", room);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    socket.on("recieve_users", (data) => {
      setAuthorsList(data);
    });
  });

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", duoData);
      setShowChat(true);
      setStyleApp("App2");
      setStyleBapp("bapp2");
      socket.emit("get_users", room);
    }
  };

  const leaveroom = () => {
    socket.emit("leaveRoom", duoData);
    setShowChat(false);
    setStyleApp("App");
    setStyleBapp("bapp");
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 500);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="total">
        <div className={styleapp}>
          {!showChat ? (
            <>
              <div className="joinChatContainer">
                <h3>Join a Room</h3>
                <input
                  type="text"
                  placeholder="Enter Your Name..."
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Room ID..."
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                />
                <button onClick={joinRoom}>Enter</button>
              </div>
              <div className="copyright">
                <p style={{ textAlign: "center", color: "white" }}>
                  Let's Connect
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="loginafterin">
                <div className="profila">PROFILE</div>
                <div className="spaced"></div>
                <div className="data">
                  <h3>USERNAME : {username}</h3>
                </div>
                <div className="data">
                  <h3>ROOM ID : {room}</h3>
                </div>
                <button onClick={leaveroom} className="leavebutton">
                  Leave
                </button>
              </div>
            </>
          )}
        </div>

        <div className={stylebapp}>
          {!showChat ? (
            <>
              <Design />
            </>
          ) : (
            <>
              <div className="everything">
                <Chat socket={socket} username={username} room={room} />
                <Detail
                  authorsList={authorsList}
                  socket={socket}
                  username={username}
                  room={room}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
