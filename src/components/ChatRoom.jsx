import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import "../styles/Chatroom.css"
import { InsertEmoticon } from "@material-ui/icons";
import { Row, Col } from 'react-bootstrap'
import SideBar from "./SideBar";
import {connect} from 'react-redux'

import { io } from "socket.io-client"
import { useEffect } from "react";
const mapStateToProps = (state) => ({
  user: state.users
    
  })
 
const mapDispatchToProps = (dispatch) => ({})



const ADDRESS = "http://localhost:3003";

const socket = io(ADDRESS, {transports: ['websocket']});



const ChatRoom = ({user}) => {

  console.log(user)

   useEffect(() => {

    socket.on("connection", () => {
      console.log("connected")
      
    })

    // socket.current.on("getMessage", (data) => {
    //   setArrivalMessage({
    //     sender: data.senderId,
    //     text: data.text,
    //     createdAt: Date.now(),
    //   });
  
  }, []);



  const fetchUsers = async () =>{
    try{
      let response = await fetch(`${ADDRESS}/whatsapp/`
      , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        } 
      })
      let data = await response.json();
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }

    return (

      <Row className="no-gutters app">
          <Col sm={4}>
            <SideBar />
          </Col>
          <Col sm={8}>
        <div className="chatroom ">
      <div className="chatroom-header">
        <Avatar />
        <div className="chatroom-headerinfoleft">
          <h3>name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chatroom-header-inforight">
          <IconButton>  
          <SearchIcon />
          </IconButton>
          <IconButton>
          <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatroom-body  ">
        <p className="chatroom-message">
          <span className="chatroom-name">name</span>
          <span className="chatroom-timestamp">{new Date().toUTCString()}</span>
           </p>
           <p className="chatroom-message chatroom-reciever">
          <span className="chatroom-name">name</span>
          <span className="chatroom-timestamp">{new Date().toUTCString()}</span>
           </p>
           <p className="chatroom-message">
          <span className="chatroom-name">name</span>
          <span className="chatroom-timestamp">{new Date().toUTCString()}</span>
           </p>
           
           
     
      </div>
      <div className="chatroom-footer m-2">
        <IconButton>
        <InsertEmoticon />
        </IconButton>
        <IconButton>
        <AttachFileIcon />
        </IconButton>
        <form>
          <input placeholder="Type a message here" type="text" />
          <button  type="submit">
            <IconButton>
            <SendIcon />
            </IconButton>
          </button>
        </form>
        <IconButton>
        <MicIcon />
        </IconButton>
      </div>
    </div>
    </Col>
</Row>
    );
}


export default connect(mapStateToProps, mapDispatchToProps) (ChatRoom);