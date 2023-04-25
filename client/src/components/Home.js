import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Legend,
  Cell // Import Cell from recharts
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const pieChartData = [
  { name: 'Chairs', value: 400 },
  { name: 'Tables', value: 300 },
  { name: 'Mabati', value: 200 },
  { name: 'Wheelbarrow', value: 100 },
  { name: 'Paper', value: 50 }
];
const colors = ['#739cc9', '#9a83da', '#a1cf82', '#c7b4', '#AF19FF', '#b3cfb6'];
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className='homebody'>
        <div className='homeheader'>
          <h2>Dashboard Overview</h2>
          <button onClick={() => navigate('Signin')}>
            Login
            <div class='arrow-wrapper'>
              <div class='arrow'></div>
            </div>
          </button>
        </div>

        <div className='body1'>
          <div class='card'>Sales</div>
          <div class='card'>Customers</div>
          <div class='card'>Products</div>
          <div class='card'>Orders</div>
        </div>

        <div className='homecont'>
          <div className='body2'>
            <h2>Weekly Report</h2>
            <AreaChart
              width={800}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='uv'
                stroke='#8884d8'
                fill='#8884d8'
              />
            </AreaChart>
          </div>
          <div className='body3'>
            <h2>Top 5 Products</h2>
            {/* <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                color={colors}
                cx={200}
                cy={200}
                outerRadius={150}
                fill=''
                labels
                >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
              
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart> */}
          </div>
        </div>
      </div>
   

    </>

  )
}

export default Home