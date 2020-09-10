import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons';
// import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import axios from './axios';

function Chat({messages}) {
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            message: input,
            name: "Jogn",
            timestamp:"new Date().toUTCString()",
            received: true
        });

        setInput(' ');
    };

    return (
        <div className ='chat'>
            <div class="chat__header">
                <Avatar />
                <div class="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div class="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div class="char__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">
                            {/* Sonny */}
                            {message.name}
                        </span>
                        {/* This is a message */}
                            {message.message}
                        <span className="chat__timestamp">
                            {/* {new Date().toUTCString()} */}
                            {message.timestamp}
                        </span>
                    </p>
                ))}

                {/* <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        Sony
                    </span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">
                        Sony
                    </span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> */}
            </div>
            <div class="chat__footer">
                <InsertEmoticon />
                <form>
                    <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    placeholder="Type a message"
                    type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
/**
 * header 
 *      avatar , {h2, p info}, {icons container}
 * chat body
 * input field
 */