import React, { useState,useEffect,useContext } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { FirebaseContext } from './context/firebase';
import { useAuthListener } from './hooks';
import Cookies from 'universal-cookie';
import axios from 'axios'

import { ChannelListContainer, ChannelContainer, Auth} from './components';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

const apiKey = process.env.REACT_APP_STREAM_API_KEY
const setToken=async()=>{
    const user=await JSON.parse(window.localStorage.getItem('authUser'))
    const URL = 'https://downqueue.herokuapp.com/auth/validate';
    const { data: { token, userId} } = await axios.post(URL, {
          userId: user.uid});
    cookies.set('token', token);
    cookies.set('userId', userId);
} 



const client = StreamChat.getInstance(apiKey);



const Meet = ({profileData}) => {
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const {user}=useAuthListener()
    const {firebase}=useContext(FirebaseContext)
    const authToken = cookies.get("token");
    if(authToken,profileData) {
    client.connectUser({
        id: cookies.get('userId'),
        name: profileData.Fullname,
        fullName: profileData.Fullname
    }, authToken)
}

    useEffect(()=>{
        setToken()
            },[])
    if(!authToken) return <Auth/>
    return (
        <>
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                <ChannelContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                />
            </Chat>
        </div>
        </>
    );
}

export default Meet;