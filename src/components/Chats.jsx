import { Avatar } from "@material-ui/core";
import '../styles/chats.css'

const Chats = () => {
    return(
        <div className="chats">
          <Avatar />
          <div className="chats-info">
            <h5>name</h5>
            <p>message</p>
          </div>
          
        </div>
     
    )
}

export default Chats;   