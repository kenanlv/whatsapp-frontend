import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className='sidebar__header'>
                <Avatar src="https://assets.pando.com/img/writer-avatar.776f63a6cd65.jpg" />
                <div class="sidebar__headerRight">
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

            <div class="sidebar__search">
                <div class="sidebar__searchContainer">
                    <SearchOutlined className="sidebar__searchIcon" />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div class="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar

// sidebar_header
//      avartar
//      sidebar_header_right
// search box
// contact container
