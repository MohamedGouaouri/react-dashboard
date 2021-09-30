import React from 'react'
import Chart from '../../chart/Chart'

import FeaturedInfo from '../../featuredInfo/FeaturedInfo'

import './home.css'
import Member from './Member'
import TransactionTable from './TransactionTable'

export default function Home(){
    return <div className="home">
        <FeaturedInfo />
        <Chart />
        <div className="wrapper">
            <div className="new-joins">
                <h2>New Join Members</h2>
                <Member name="mohamed" role="Software engineer"/>
                <Member name="Bhd_Sd" role="Software engineer"/>
                <Member name="Younes" role="Data analyst"/>
            </div>

            <div className="transactions">
                <h2>Latest transactions</h2>
                <TransactionTable />
            </div>
        </div>
    </div>
}