import React from 'react';

import './featuredInfo.css';

export default function FeaturedInfo(){
    return <div className="info">
        <div className="info-card">
            <h2>Revenue</h2>
            <div className="price">
                <h2>$2,444</h2>
                <div className="status negative">-11.7</div>
            </div>
            <span>Compared to last month</span>
        </div>
        <div className="info-card">
            <h2>Sales</h2>
            <div className="price">
                <h2>$100,9</h2>
                <div className="status negative">-1.4</div>
            </div>
            <span>Compared to last month</span>
        </div>

        <div className="info-card">
            <h2>Cost</h2>
            <div className="price">
                <h2>$2,444</h2>
                <div className="status postive">+2.1</div>
            </div>
            <span>Compared to last month</span>
        </div>
    </div>
}