import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Layer, Legend, Line, LineChart, Pie, PieChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css'


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
            <h1> Hello! Well come to the mini chart  world</h1>

            <div className='chart-container grid  columns:2'>


                {/* ---------line chart----------   */}

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

                {/* --------pie chart------------ */}

                <PieChart width={400} height={400}>

                    <Pie

                        dataKey="investment"
                        startAngle={180}
                        endAngle={0}
                        data={value}
                        innerRadius={90}
                        outerRadius={110}
                        fill="#BD1451"
                        label
                    />
                    <Pie
                        dataKey="revenue"
                        startAngle={180}
                        endAngle={0}
                        data={value}
                        innerRadius={40}
                        outerRadius={60}
                        fill="#BD6614"

                    />
                    <Pie
                        dataKey="sell"
                        startAngle={360}
                        endAngle={0}
                        data={value}
                        innerRadius={0}
                        outerRadius={20}
                        fill="#14BD6B"

                    />


                    
                   
                    <Tooltip></Tooltip>
                </PieChart>

                {/* ---- composedchart------------- */}
                <ComposedChart
                    width={500}
                    height={400}
                    data={value}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                    <Scatter dataKey="sell" fill="red" />
                    <Tooltip></Tooltip>
                </ComposedChart>

            </div>
        </div>
    );
};

export default DashBoard;