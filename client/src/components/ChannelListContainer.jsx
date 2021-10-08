import React from 'react'
import { ChannelList,useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import ChannelSearch from './ChannelSearch'
import './Chatstyles.css'

const SideBar=()=>(
     <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src='assets/images/hospital.png' alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src='assets/images/logout.png' alt="Logout" width="30" />
            </div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Downqueue</p>
    </div>
)

const ChannelListContainer = () => {
    return (
        <>
            <SideBar/>
            <div className="channel-list__list__wrapper">
                <CompanyHeader/>
                <ChannelSearch/>
            </div>
        </>
    )
}

export default ChannelListContainer
