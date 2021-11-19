import { Avatar } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/sidebar.css";
import { IconButton } from "@material-ui/core";
import Chats from "./Chats";
import { connect } from "react-redux";


const mapToState = (state) => ({
  user: state.authState.user,
});
const mapDispatchToProps = (dispatch) => ({});


const SideBar = ({user}) => {
//   console.log(user.user.username)

// const [conversations, setConversations] = useState([]);
// const [currentChat, setCurrentChat] = useState(null);
// const [message, setMessage] = useState([]);
// const [newMessage, setNewMessage] = useState("");
// const [arrivalMessage, setArrivalMessage] = useState(null);
// const [onlineUsers, setOnlineUsers] = useState([]);
// const socket = useRef()
// //user
// const ADDRESS = "http://localhost:3003";

// useEffect(() => {
//   socket.current = io(ADDRESS, { transports: ["websocket"] });
//   socket.current.on("getMessage",(data)=>{
//     setArrivalMessage({
//       sender: data.senderId,
//       message: data.message,
//       createdAt: Date.now(),
//     });
//   })

//   }
//   , []);

//   useEffect(() => { 
//     arrivalMessage  && currentChat?.participants.includes(arrivalMessage.sender) && setMessage((prev) => [...prev, arrivalMessage])
//   }, [arrivalMessage, currentChat]);


//   useEffect(() => { 
//    socket.current.emit("addUser",user.user._id)
//    socket.current.on("getUsers",(users)=>{
//       setOnlineUsers(
//         users.filter((user)=>user._id !== user.userId)

//       )
//     })
//   }, [user.user]);


//   useEffect(() => {
//     const getConversations = async () => {
//       try { 
//         let response = await axios.get(`${ADDRESS}/whatsapp/conversations/${user.user._id}`);
//         setConversations(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getConversations();
//   }, [user.user._id]);

//   useEffect(() => {
//     const getMessages = async () => {
//       try {
//         const response = await axios.get(`${ADDRESS}/whatsapp/messages` + currentChat?._id);
//         setMessage(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getMessages();
//   }, [currentChat]);






    




  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
        <h6>{user.user.username}</h6>
        
        <div className="sidebar-headerright">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="siebar-search">
        <div className="sidebar-searchcontainer">
          <SearchIcon />
          <input placeholder="chats" type="text" />
        </div>
      </div>
      <div className="sidebar-chhatsGroups">
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        
      </div>
    </div>
  );
};

export default connect(mapToState, mapDispatchToProps)(SideBar);
