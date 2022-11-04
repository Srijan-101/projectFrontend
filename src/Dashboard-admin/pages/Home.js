import React, { useEffect, useState } from 'react'
import { PieChart, Cell, Pie, Tooltip, ResponsiveContainer} from 'recharts';

import OutletInformation from './Components/OutletInformation';
import axios from 'axios';
import { isAuth,getCookie } from '../../Helper/helper';



const data01 = [
    { name: 'Shankhamul Outlet', value: 15647.5 },
    { name: 'Durbarmarg Outlet', value: 20078.6 },
    { name: 'Jawalakhel Outlet', value: 7849.7},
    { name: 'Balkumari Outlet', value: 4575.6 },
];




const CustomTooltip = ({ active, payload }) => {
 


    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-[#04d1b2] p-2 active:outline-none " style={{ border: '1px solid white' }}>
                <p className="label" style={{ color: 'white' }}>{`${payload[0].name} : Rs. ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const COLORS = ['#f66d43', '#ffaf66', '#778ebe', '#64c2a7', '#2d87bb'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text className="font-bold font-white" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Home = () => {

    const [outletNumber,setOutletNumber] =  useState({
          number : 0
    })

    const getOutletNumber = async () => {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/api/GetOutletNumber`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
            data: {
                email: isAuth().email
            }
        })
    } 

    useEffect(() => {
         getOutletNumber()
            .then(res => setOutletNumber({number:res.data}))
            .catch(e => console.log(e));
    },[])



    return (
        <div className='mb-[11rem]'>
            <div class="flex-1 max-w-5xl md:max-w-5xl mx-auto p-1 mt-2">
                <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:gap-20">
                    <li class="bg-white rounded-lg shadow-xl">
                        <div class="h-80 p-5">
                            <p className='text-gray-500 font-bold tracking-wide text-base text-medium'>SALES</p>
                            <p className='text-gray-500  font-medium text-sm'>Total sales today</p>
                            <ResponsiveContainer className="lg:mt-[-2rem]" width="100%" height="100%">
                                <PieChart width={600} height={600}>
                                    <Pie
                                        dataKey="value"
                                        isAnimationActive={false}
                                        data={data01}
                                        labelLine={false}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={120}
                                        fill="#8884d8"
                                        label={renderCustomizedLabel}
                                    >
                                        {data01.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>

                        </div>
                    </li>
                    <li class="bg-white rounded-lg shadow-xl">
                        <div class="h-64 p-5">
                            <p className='text-gray-500 font-bold tracking-wide text-base text-medium'>OUTLETS</p>
                            <p className='text-gray-500 font-medium text-sm'>Total number of Outlets</p>
                            <h1 className="text-8xl text-center mt-6">{outletNumber.number}</h1>
                        </div>
                    </li>
                </ul>
                   
            </div>
        <div class="flex-1 max-w-5xl pb-6 md:max-w-5xl mx-auto mt-1">
            <ul class="grid grid-cols-1 mt-4">
                    <li class="bg-white rounded-lg shadow-xl">
                        <div class="overflow-x-auto relative">
                           <OutletInformation/>
                        </div>
                    </li>
            </ul>
        </div>
            
           
        </div>
    )
}

export default Home;