import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar,IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFile  from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import { useParams } from "react-router-dom";
import db from '../firebase'

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("")
  const [ roomName,setRoomName] = useState("")
  const { roomId } = useParams()

  useEffect(()=>{
      if(roomId){
        db.collection("rooms").doc(roomId).onSnapshot((snapshot) =>(
          setRoomName(snapshot.data().name)
        ))
      }
  },[roomId])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage =(e)=>{
    e.preventDefault()
    console.log("obj",input)
    setInput("")
  }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__headerInfo">
            <h3>{roomName}</h3>
            <p>Last Seen....</p>

        </div>  
        <div className="chat__headerRight">
        <IconButton>
           <SearchOutlined/>    
         </IconButton>
         <IconButton>
           <AttachFile/>    
         </IconButton>
         <IconButton>
           <MoreVertIcon/>    
         </IconButton>  
        </div>
      </div>
      <div className="chat__body">
         <p className={`chat__message  ${true && "chat__receiver"}`}>
         <span className="chat__name">Faith</span>
            Hey Guys
            <span className="chat__timestamp">09:34pm</span>
         </p>

         <p className="chat__message">Hey Guys</p>
         <p className="chat__message">Hey Guys</p>
      </div>
      <div className="chat__footer">
       <InsertEmoticonIcon/>
       <form>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}placeholder="type a message"/>
        <button type="submit" onClick={sendMessage}>Send</button>
       </form>
       <MicIcon/>
      </div>
    </div>
  );
}

export default Chat;
