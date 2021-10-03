import useFetch from "../../hooks/useFetch";
import React from 'react';
import { Line, LineChart, Legend, Tooltip, XAxis, CartesianGrid, YAxis } from "recharts";
import './chart.css'

export default function Chart(){
    var [data] = useFetch('http://127.0.0.1:8000/api/history/?format=json');
    
    return <div className="chart-box">
        <div className="chart-title">
            Product analytics
        </div>
        <div className="chart">
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
    </div>
}