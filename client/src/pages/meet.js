import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelListContainer from '../components/ChannelListContainer'
import ChannelContainer from '../components/ChannelContainer'

const apiKey=`${process.env.REACT_APP_STREAM_API_KEY}`;
const apiSecret=process.env.REACT_APP_STREAM_API_SECRET
const appId=process.env.REACT_APP_STREAM_API_APP_ID
const client= StreamChat.getInstance(apiKey);
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
