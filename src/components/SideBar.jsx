import { Avatar } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/sidebar.css"
import { Col, Row, Container } from "react-bootstrap"; 
import Chat from "./Chat";
import Chats from "./Chats";

const SideBar = () => {

    return( 

     <Row className= "no-gutters">
          <Col sm={4}  >
 <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
        <div className="sidebar-headerright">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
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
        
      </div>

    
    </div>
    </Col>
    <Col sm={8} >
        <Chat />

    </Col>
         
     </Row>   
   


    )
}


export default  SideBar