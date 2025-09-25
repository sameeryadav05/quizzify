import React from "react";
import useAuthStore from "../store/AuthStore";
import { ResponsiveContainer, LineChart, Line, AreaChart,XAxis, YAxis, CartesianGrid, Legend, Tooltip, Area, BarChart, Bar } from "recharts";
import { getValueTransition } from "motion";
const Graph = () => {
  const logout = useAuthStore((state) => state.logout);
  const data = [
    {
      name: "js",
      student: 5,
      fees: 4,
    },
    {
      name: "python",
      student: 2,
      fees: 5,
    },
    {
      name: "node.js",
      student: 15,
      fees: 10,
    },
    {
      name: "c++",
      student: 9,
      fees: 7,
    },
    {
      name: "java",
      student: 9,
      fees: 3,
    },
  ];
  return (
    <>
      <div className="graph">
      <h1>Line chart</h1>
        <ResponsiveContainer width="80%" aspect={3}>
          <LineChart  data={data} width={500} height={300} margin={{top:50,left:20,right:20,bottom:5}}>
          <CartesianGrid strokeDasharray='3 3'/>
          <YAxis dataKey="student"/>
            <XAxis dataKey="name" tickFormatter={value => value + " programming"}  interval={'preserveStartEnd'}/>
            <Tooltip contentStyle={{borderRadius:'1rem',color:'inherit'}}/>
            <Line type={'monotoneX'} dataKey="student" stroke="red" activeDot={{r:5}}/>
            <Line dataKey="fees" stroke="blue" activeDot={{r:5}}/>
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>


      <div className="graph">

        <ResponsiveContainer width={'100%'} aspect={3}>
        <LineChart data={data} width={700} height={400} margin={{top:50,left:20,right:20,bottom:5}}>
        <CartesianGrid strokeOpacity={0.5} strokeDasharray={'3 3'} />
          <YAxis dataKey="student"/>
            <XAxis dataKey="name" tickFormatter={value => value + " programming"}  interval={'preserveStartEnd'}/>
            <Tooltip contentStyle={{borderRadius:'1rem',color:'inherit'}}/>
            <Line type={'monotoneX'} dataKey="student" stroke="red" activeDot={{r:5}}/>
            <Line dataKey="fees" stroke="blue" activeDot={{r:5}}/>
        <Legend />
        </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="graph">
      <h1>Area chart</h1>
        <ResponsiveContainer width="80%" aspect={3}>
          <AreaChart  data={data} width={500} height={300} margin={{top:50,left:20,right:20,bottom:5}}>
          <CartesianGrid strokeDasharray='3 3'/>
          <YAxis dataKey="student"/>
            <XAxis dataKey="name" tickFormatter={value => value + " programming"}  interval={'preserveStartEnd'}/>
            <Tooltip contentStyle={{borderRadius:'1rem',color:'inherit'}}/>
            <Area type={'monotoneX'} dataKey="student" stroke="red" activeDot={{r:5}}/>
            <Area dataKey="fees" stroke="blue" activeDot={{r:5}}/>
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="graph">
      <h1>Bar chart</h1>
        <ResponsiveContainer width="80%" aspect={3}>
          <BarChart  data={data} width={500} height={300} margin={{top:50,left:20,right:20,bottom:5}}>
          <CartesianGrid strokeDasharray='3 3'/>
          <YAxis dataKey="student"/>
            {/* <XAxis dataKey="name" tickFormatter={value => value + " programming"}  interval={'preserveStartEnd'}/> */}
            <Tooltip contentStyle={{borderRadius:'1rem',color:'inherit'}}/>
            <Bar type={'monotoneX'} dataKey="student" stroke="red" fill="red" activeDot={{r:5}}/>
            <Bar dataKey="fees" stroke="blue" fill="blue" activeDot={{r:5}}/>
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Graph;
