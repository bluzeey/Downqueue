import React from 'react'
import {StreamChat,connect} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelListContainer from '../components/ChannelListContainer'
import ChannelContainer from '../components/ChannelContainer'

const user=JSON.parse(window.localStorage.getItem('authUser'))
const apiKey=process.env.REACT_APP_STREAM_API_KEY;
const apiSecret=process.env.REACT_APP_STREAM_API_SECRET;
const appId=process.env.REACT_APP_STREAM_API_APP_ID;
const client= StreamChat.getInstance(apiKey);
const ConnectUser=async(user)=>{
    await client.connectUser(
        {id:user.id,
        name:user.name}
    )
}

const Meet = () => {
    return (
        <div>
            <Chat client={client} theme="team light">
                <ChannelListContainer/>
                <ChannelContainer/>
            </Chat>
        </div>
    )
}

export default Meet
