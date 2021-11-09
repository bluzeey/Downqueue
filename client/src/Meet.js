import React, { useState,useEffect,useContext } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { FirebaseContext } from './context/firebase';
import Cookies from 'universal-cookie';
import axios from 'axios'

import { ChannelListContainer, ChannelContainer} from './components';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

const apiKey = process.env.REACT_APP_STREAM_API_KEY
const setToken=async()=>{
    const user=await JSON.parse(window.localStorage.getItem('authUser'))
    const ProfileInfo=await JSON.parse(window.localStorage.getItem('ProfileInfo'))
    const URL = 'https://downqueue.herokuapp.com/auth/validate';
    const { data: { token,fullName,userId} } = await axios.post(URL, {
          userId: user.uid,fullName:ProfileInfo.FullName});
    cookies.set('token', token);
    cookies.set('userId', userId);
    cookies.set('name',ProfileInfo.FullName)
} 



const client = StreamChat.getInstance(apiKey);



const Meet = () => {
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const {firebase}=useContext(FirebaseContext)
    const authToken = cookies.get("token");
    if(authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('name'),
        fullName: cookies.get('name')
    }, authToken)
}

    useEffect(()=>{
        setToken()
            },[])
    if(!authToken) return 'Error, Please refresh.'
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