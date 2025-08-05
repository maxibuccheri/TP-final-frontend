import React from 'react';
import './WhatsApp.css';
import SmallSideBar from '../components/SmallSideBar.jsx';
import ChatDetail from '../components/ChatDetail.jsx';
import LeftMenu from '../components/LeftMenu.jsx';

function WhatsApp() {
    return (
        <div className="container">
            <div className='components'>
                <div className='smallside'>
                    <SmallSideBar/>
                </div>
                
                <div className="left-side">
                    <LeftMenu/>
                </div>
            </div>
        </div>
    );



}

export default WhatsApp