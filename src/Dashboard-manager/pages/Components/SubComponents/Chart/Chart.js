
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import axios  from "axios";
import { useState ,useEffect} from "react";
import { getCookie ,isAuth} from "../../../../../Helper/helper";






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

  const GetMonthlyData = async () => {
    return await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/api/GetMonthly/${isAuth().outletId}`,
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
