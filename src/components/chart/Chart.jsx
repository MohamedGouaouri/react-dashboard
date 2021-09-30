import React from "react";
import { Line, LineChart, Legend, Tooltip, XAxis, CartesianGrid, YAxis } from "recharts";
import './chart.css'

export default function Chart(){
    const data = [
        {
          "year": "2000",
          "price": 4000,
          
        },
        {
          "year": "2001",
          "price": 3000,

        },
        {
          "year": "2002",
          "price": 2000,

        },
        {
          "year": "2003",
          "price": 2780,
        },
        {
          "year": "2004",
          "price": 1890,

        },
        {
          "year": "2005",
          "price": 2390,
          

        },
        {
          "year": "2006",
          "price": 3490,

        }
      ]
    return <div className="chart">
        <div className="chart-title">
            Product analytics
        </div>
        <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
    </div>
}