import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import MicIcon from "@material-ui/icons/Mic";
import "../styles/chats.css"



const Chat = () => {
    return (
        <div className="chatroom">
      <div className="chatroom-header">
        <Avatar />
        <div className="chatroom-headerinfoleft">
          <h3>something</h3>
        </div>
        <div className="chatroom-header-inforight">
          <SearchIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="chatroom-body">
        <p>messages here</p>
        <p>messages here</p>
        <p>messages here</p>
        
        <p>messages here</p>
        <p>messages here</p>
        <p>messages here</p>
        <p>messages here</p>
        <p>messages here</p>
        <p>messages here</p>
        <p>messages here</p>
        <p>messages here</p>
        <p>messages here</p>

     
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


export default Chat;