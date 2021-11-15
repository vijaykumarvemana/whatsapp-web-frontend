import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import MicIcon from "@material-ui/icons/Mic";
import "../styles/Chatroom.css"



const ChatRoom = () => {
    return (
        <div className="chatroom">
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
      <div className="chatroom-body">
        <p className="chatroom-message">
          <span className="chatroom-name">name</span>
          <span className="chatroom-timestamp">{new Date().toUTCString()}</span>
           </p>
     
      </div>
      <div className="chatroom-footer">
        <SentimentVerySatisfiedIcon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button  type="submit">
            <SendIcon />
          </button>
        </form>
        <MicIcon />
      </div>
    </div>

    );
}


export default ChatRoom;