import React from 'react';

import { HomeSharp, TrendingUp, PersonOutline, AttachMoney, BarChart } from '@material-ui/icons';

import './sidebar.css'
export default function Sidebar(){
    return <div className="sidebar">
        <div className="section">
            <div className="section-title">
                Dashboard
            </div>
            <div className="section-item">
                <HomeSharp fontSize="large"/>
                <div className="title">
                    Home
                </div>
            </div>
            <div className="section-item">
                <TrendingUp fontSize="large"/>
                <div className="title">
                    Sales
                </div>
            </div>
        </div>

        <div className="section">
            <div className="section-title">
                Quick menu
            </div>
            <div className="section-item">
                <PersonOutline fontSize="large"/>
                <div className="title">
                    Users
                </div>
            </div>
            <div className="section-item">
                <AttachMoney fontSize="large"/>
                <div className="title">
                    Transactions
                </div>
            </div>
            <div className="section-item">
                <BarChart fontSize="large"/>
                Reports
            </div>
        </div>
    </div>
}