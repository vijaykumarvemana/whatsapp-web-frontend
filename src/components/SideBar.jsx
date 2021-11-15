import { Avatar } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/sidebar.css";
import { IconButton } from "@material-ui/core";
import Chats from "./Chats";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
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
      </div>
    </div>
  );
};

export default SideBar;
