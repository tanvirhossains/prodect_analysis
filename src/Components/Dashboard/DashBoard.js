import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const value = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <h1> Hello! Well come to the chart mini world</h1>

            <LineChart height={350} width={500} data={value} margin={{
                top: 25,
                right: 30,
                left: 20,
                bottom: 5
            }}>
                <Line dataKey={'investment'} stroke="#8884d8" ></Line>
                <Line dataKey={'sell'} stroke="#81E40B" ></Line>
                <Line dataKey={'revenue'} stroke="#E4310B" ></Line>
                <Legend></Legend>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis />
                <Tooltip />
            </LineChart>


            <PieChart width={400} height={400}>
                <Pie
                    dataKey="investment"
                    startAngle={180}
                    endAngle={0}
                    data={value}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip></Tooltip>
            </PieChart>

        </div>
    );
};

export default DashBoard;