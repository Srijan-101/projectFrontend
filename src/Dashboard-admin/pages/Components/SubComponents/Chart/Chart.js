
import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import { getCookie } from "../../../../../Helper/helper";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useParams } from "react-router-dom";

const data = [
  {
    name: "Jan",
    data: 2400,
  },
  {
    name: "Feb",
    data: 1398,
  },
  {
    name: "Mar",
    data: 9800,
  },
  {
    name: "Apr",
    data: 3908,
  },
  {
    name: "May",
    data: 4800,
  },
  {
    name: "Jun",
    data: 3800,
  },
  {
    name: "Jul",
    data: 4300,
  },
  {
    name: "Aug",
    data: 4300,
  },
  {
    name: "Sep",
    data: 4310,
  },
  {
    name: "Oct",
    data: 4320,
  },
  {
    name: "Nov",
    data: 430,
  },
  {
    name: "Dec",
    data: 3450,
  }
];




const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-[#04d1b2] p-2 active:outline-none hover:border-white focus:outline-none" style={{ border: '1px solid white' }}>
        <p className="label" style={{ color: 'white' }}>{`${label} : NPR. ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function Chart() {
  const [Data,SetData] = useState();
  const params = useParams();

  const GetMonthlyData = async () => {
    return await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/api/GetMonthly/${params.id}`,
      headers: {
          'Authorization': 'Bearer ' + getCookie('token')
      },
  })
  }

  useEffect(() => {
    GetMonthlyData()
        .then(res => {
              SetData(res.data);
        }) 
        .catch((e) => console.log(e));
        
}, []);


  return (
    <BarChart
      width={700}
      height={300}
      data={Data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Bar dataKey="amount" barSize={20} fill="#8884d8" />
    </BarChart>
  );
}
