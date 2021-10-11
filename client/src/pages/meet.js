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
import { FirebaseContext } from '../context/firebase';
import 'stream-chat-react/dist/css/index.css';


server_client = stream_chat.StreamChat(api_key="STREAM_KEY", api_secret="STREAM_SECRET") 
token = server_client.create_token('john')
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaWN5LWZvZy0yIn0.jkEQ-J1EkpTJv104D_KIC_tWLLdDPCZjDqahfTR6Q5A';
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
    const{ firebase }=useContext(FirebaseContext)
    const [profileData, setProfileData] = useState({
        Fullname:'',city:'',country:'',emailAddress:'',Bio:'',Tag:'',setProfile:false
    })
    const isInvalid=profileData.Fullname===""
    const db=firebase.firestore();   
    useEffect(()=>{
       db.collection("Users-data").doc(user.uid).get().then(doc=>setProfileData({
            Fullname:doc.data().Name,
            city:doc.data().City,
            country:doc.data().Country,
            emailAddress:doc.data().emailAddress,
            Bio:doc.data().Bio,
            Tag:doc.data().Tag,
            setProfile:doc.data().setProfile})
       )},[])

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('46pt5uptgfnd');

      await client.connectUser(
        {
          id: user.uid,
          name: profileData.name,
          image: 'https://getstream.io/random_png/?id=icy-fog-2&name=icy-fog-2',
        },
        userToken,
      );

      setChatClient(client);
    };

    initChat();
  }, []);

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