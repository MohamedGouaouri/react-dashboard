import React from 'react';

import { 
        HomeSharp, 
        TrendingUp, 
        PersonOutline, 
        AttachMoney, 
        BarChart,
        MailOutline,
        FeedbackOutlined,
        MessageOutlined,
        InfoOutlined
        } from '@material-ui/icons';

import './sidebar.css'
export default function Sidebar(){
    return <div className="sidebar">
        <div className="section">
            <div className="section-title">
                Dashboard
            </div>
            <div className="section-item active">
                <HomeSharp fontSize="medium" className="sidebarIcon"/>
                <div className="section-item-title">
                    Home
                </div>
            </div>
            <div className="section-item">
                <TrendingUp fontSize="medium" className="sidebarIcon"/>
                <div className="section-item-title">
                    Sales
                </div>
            </div>
        </div>

        <div className="section">
            <div className="section-title">
                Quick menu
            </div>
            <div className="section-item">
                <PersonOutline fontSize="medium" className="sidebarIcon"/>
                <div className="section-item-title">
                    Users
                </div>
            </div>
            <div className="section-item">
                <AttachMoney fontSize="medium" className="sidebarIcon"/>
                <div className="section-item-title">
                    Transactions
                </div>
            </div>
            <div className="section-item">
                <BarChart fontSize="medium" className="sidebarIcon"/>
                Reports
            </div>
        </div>
    </div>
}