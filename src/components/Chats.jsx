import { Avatar } from "@material-ui/core";
import '../styles/chat.css'

const Chats = () => {
    return(
        <div className="chats">
          <Avatar />
          <div className="chats-info">
            <h3>name</h3>
            <p>message</p>
          </div>
        </div>
     
    )
}

export default Chats;   