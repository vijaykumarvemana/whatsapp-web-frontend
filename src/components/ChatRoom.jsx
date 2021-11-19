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
import { useEffect, useRef,useState } from "react";
import axios from "axios";



const mapStateToProps = (state) => ({
  user: state.authState.user
    
  })
 
const mapDispatchToProps = (dispatch) => ({

})






const ChatRoom = ({user}) => {
  

const [conversations, setConversations] = useState(null);
const [currentChat, setCurrentChat] = useState(null);
const [messages, setMessages] = useState([]);
const [newMessage, setNewMessage] = useState("");
const [arrivalMessage, setArrivalMessage] = useState(null);
const [onlineUsers, setOnlineUsers] = useState([]);
const socket = useRef()
//user
const ADDRESS = "http://localhost:3003";

useEffect(() => {
  socket.current = io(ADDRESS, { transports: ["websocket"] });
  socket.current.on("getMessage",(data)=>{
    console.log(data)
    setArrivalMessage({
      senderId: data.senderId,
      message: data.message,
      createdAt: Date.now(),
    });
  })

  }
  , []);

  useEffect(() => { 
    arrivalMessage  && currentChat?.participants.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat]);


  useEffect(() => { 
   socket.current.emit("addUser",user.user._id)
   socket.current.on("getUsers",(users)=>{
     console.log(users)
      setOnlineUsers(
        users.filter((user)=>user._id !== user.userId)

      )
    })
  }, [user.user]);


  useEffect(() => {
    const getConversations = async () => {
      try { 
        let response = await axios.get(`${ADDRESS}/whatsapp/conversations/${user.user._id}`);
       
        setConversations(response.data);
       
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user.user._id]);

  console.log(conversations[0]._id)
  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(`${ADDRESS}/whatsapp/messages` + currentChat?._id);
        console.log(response.data)
        setMessages(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

   const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      senderId: user.user._id,
      message: newMessage,
      conversationId: conversations[0]._id,
    };
    console.log(message)
    const receiverId = currentChat?.participants.filter((participant) => participant !== user.user._id); 
    console.log(receiverId)

    socket.current.emit("sendMessage",{
      senderId: user.user._id,
      receiverId,
      message: newMessage,
    })

    try {
      const response = await axios.post(`${ADDRESS}/whatsapp/messages`, message);
      console.log(response.data);
      setMessages([...message, response.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };


    return (

      <Row className="no-gutters app">
          <Col sm={4}>
            <SideBar onlineUsers={onlineUsers} currentId={user.user._id} setCurrentChat={setCurrentChat}/>
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
          <span className="chatroom-name"></span>
          <span className="chatroom-timestamp">{new Date().toUTCString()}</span>
           </p>
           <p className="chatroom-message chatroom-reciever">
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
          <input placeholder="Type a message here" value={newMessage}type="text" onChange= {(e) => setNewMessage(e.target.value)} />
          <button  type="submit" onClick={handleSubmit}>
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