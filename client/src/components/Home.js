import React from 'react';

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
    date: '12-03-10',
    total_sales: 3500,
  },
  {
    date: '12-04-10',
    total_sales: 2100,
  },
  {
    date: '12-04-10',
    total_sales: 4000,
  },
  {
    date: '12-06-10',
    total_sales: 2000,
  },
 {
    date: '12-07-10',
    total_sales: 3000,
  },
  {
    date: '12-08-10',
    total_sales: 2500,
  },
  {
    date: '12-09-10',
    total_sales: 3500,
  }
];

const pieChartData = [
  { name: 'Chairs', value: 400 },
  { name: 'Tables', value: 300 },
  { name: 'Mabati', value: 200 },
  { name: 'Wheelbarrow', value: 100 },
  { name: 'Paper', value: 50 }
];
const customerData = [
  { name: 'Customer A', totalSpent: 1000 },
  { name: 'Customer B', totalSpent: 2000 },
  { name: 'Customer C', totalSpent: 3000 },
  { name: 'Customer D', totalSpent: 4000 },
  { name: 'Customer E', totalSpent: 5000 },
  { name: 'Customer F', totalSpent: 6000 },
  { name: 'Customer G', totalSpent: 7000 }
];

const colors = ['#739cc9', '#9a83da', '#a1cf82', '#c7b4', '#AF19FF', '#b3cfb6'];
function Home() {

//   useEffect(()=> {
//     fetch('/sales')
//     .then((resp) => resp.json())
//     .then((json) => {
//         console.log(json)
//         setSales(json)
//     })
// }, [])

 // Sort the customer data by total amount spent, in descending order
 const sortedCustomerData = customerData.sort((a, b) => b.totalSpent - a.totalSpent);

 // Get the top 5 customers
 const top5Customers = sortedCustomerData.slice(0, 5);
  return (
    <>
      <div className='homebody'>
          <h2 className='kijana'>Dashboard Overview</h2>
       
        <div className='body1'>
        <div class="card2">
    <div class="title">
        <span>
            <svg width="20" fill="currentColor" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              
            </svg>
        </span>
        <p class="title-text">
            Sales
        </p>
        <p class="percent">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height="20" width="20">
               
            </svg> 20%
        </p>
    </div>
    <div class="data">
        <p>
            39,500 
        </p>
        
        <div class="rangeA">
            <div class="fill">
            </div>
        </div>
    </div>
</div>

<div class="card2">
    <div class="title">
        <span>
            <svg width="10" fill="currentColor" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
               
            </svg>
        </span>
        <p class="title-text">
            Products
        </p>
        <p class="percent">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height="20" width="20">
                
            </svg> 70%
        </p>
    </div>
    <div class="data">
        <p>
            39,500 
        </p>
        
        <div class="rangeB">
            <div class="fill">
            </div>
        </div>
    </div>
</div>

<div class="card2">
    <div class="title">
        <span>
            <svg width="20" fill="currentColor" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              
            </svg>
        </span>
        <p class="title-text">
            Customers
        </p>
        <p class="percent">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height="20" width="20">
              
            </svg> 35%
        </p>
    </div>
    <div class="data">
        <p>
            39,500 
        </p>
        
        <div class="rangeC">
            <div class="fill">
            </div>
        </div>
    </div>
</div>

<div class="card2">
    <div class="title">
        <span>
          
        </span>
        <p class="title-text">
            Orders
        </p>
        <p class="percent">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height="20" width="20">
              
            </svg> 85%
        </p>
    </div>
    <div class="data">
        <p>
            39,500 
        </p>
        
        <div class="rangeD">
            <div class="fill">
            </div>
        </div>
    </div>
</div>


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
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='total_sales'
                stroke='#8884d8'
                fill='#8884d8'
              />
            </AreaChart>
          </div>
          <div className='body3'>
            <h2>Top 5 Products</h2>
             <PieChart width={400} height={400}>
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
            </PieChart> 
          </div>
        </div>
      </div>
   

    </>

  )
}

export default Home


