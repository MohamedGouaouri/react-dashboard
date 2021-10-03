import React from 'react';
import { Link } from 'react-router-dom';
import { 
        HomeSharp, 
        TrendingUp, 
        PersonOutline, 
        AttachMoney, 
        BarChart
        } from '@material-ui/icons';

import './sidebar.css'
export default function Sidebar(){
    return <div className="sidebar">
        <div className="section">
            <div className="section-title">
                Dashboard
            </div>
            <Link to="/">
                <div className="section-item">
                    <HomeSharp fontSize="medium" className="sidebarIcon"/>
                    <div className="section-item-title">
                        Home
                    </div>
                </div>
            </Link>
            <Link to="/products">
                <div className="section-item">
                    <TrendingUp fontSize="medium" className="sidebarIcon"/>
                    <div className="section-item-title">
                        Products
                    </div>
                </div>
            </Link>
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