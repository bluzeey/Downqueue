import React, { useEffect, useState,useContext } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  useMessageContext,
  Window,
} from 'stream-chat-react';
import { useAuthListener } from '../hooks';
import {firebase} from '../lib/firebase.prod'
import 'stream-chat-react/dist/css/index.css';
import axios from 'axios'

const getUser=async()=>{
  const db=firebase.firestore();   
  const user=JSON.parse(window.localStorage.getItem('authUser'))
  const doc =await db.collection("Users-data").doc(user.uid).get()
}
const api_key=process.env.REACT_APP_STREAM_API_KEY
const api_secret=process.env.REACT_APP_STREAM_API_SECRET
const app_id=process.env.REACT_APP_STREAM_API_APP_ID
const filters = { type: 'messaging', members: { $in: ['icy-fog-2'] } };
const sort = { last_message_at: -1 };

const CustomChannelPreview = (props) => {
  const { channel, setActiveChannel } = props;

  const { messages } = channel.state;
  const messagePreview = messages[messages.length - 1]?.text.slice(0, 30);

  return (
    <div onClick={() => setActiveChannel(channel)} style={{ margin: '12px' }}>
      <div>{channel.data.name || 'Unnamed Channel'}</div>
      <div style={{ fontSize: '14px' }}>{messagePreview}</div>
    </div>
  );
};

const CustomMessage = () => {
  const { message } = useMessageContext();

  return (
    <div>
      <b style={{ marginRight: '4px' }}>{message.user.name}</b> {message.text}
    </div>
  );
};

const Meet = () => {
    const [chatClient, setChatClient] = useState(null);
    const { user } = useAuthListener();
    const db=firebase.firestore();   
    useEffect(()=>{
      const setData= async()=>{ 
        const db=firebase.firestore();   
        const user=await JSON.parse(window.localStorage.getItem('authUser'))
        const doc =await db.collection("Users-data").doc(user.uid).get()
        const profile = {Fullname: doc.data().Name}
        const token=await axios.post('http://localhost:5000/auth/validate',{userId:profile.Fullname})
        const sessionToken=token.data.token
        const client=StreamChat.getInstance(api_key)
        await client.connectUser(
        {
          id: profile.Fullname,
          name: profile.Fullname
       },sessionToken,)
       setChatClient(client);}
       setData()
      },[])


  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <Chat client={chatClient} theme='messaging light'>
      <ChannelList filters={filters} sort={sort} Preview={CustomChannelPreview} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList Message={CustomMessage} />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default Meet;