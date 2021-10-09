import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelListContainer from '../components/ChannelListContainer'
import ChannelContainer from '../components/ChannelContainer'

const apiKey='46pt5uptgfnd'
const apiSecret='tt4dfghkrxdf4x7p5tk8e44fygkc3zgju93g6k2tx53nwaks4mxtgbubu8ync4c4'
const appId='1146713'
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
