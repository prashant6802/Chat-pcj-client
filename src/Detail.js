import {React} from "react";
import { nanoid } from "nanoid";
import ScrollToBottom from "react-scroll-to-bottom";

const Detail = ({authorsList, socket,username,room}) => {

  return (
    <>
      <div className="room-details">
        <div className="userstitle"><h3>Room Members</h3></div>
        <ScrollToBottom className="message-container">

        {authorsList.map((item) => {
            return (<div className="members" key={nanoid()}>{item}</div>)
        })}

    </ScrollToBottom>
    </div>
    </>
  )
}

export default Detail
