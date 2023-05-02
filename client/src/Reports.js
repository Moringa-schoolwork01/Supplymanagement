import React,  { useEffect, useState } from 'react'

function Reports() {

  const [salereports,setSalereports] = useState([])
  const [productreports,setProductreports] = useState([])
  const [weeklyreports,setWeeklyreports] = useState([])



  useEffect(()=> {
    fetch('/product_sales_report')
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json)
        setSalereports(json)
    })
}, [])

useEffect(()=> {
  fetch('/top_products')
  .then((resp) => resp.json())
  .then((json) => {
      console.log(json)
      setProductreports(json)
  })
}, [])

useEffect(()=> {
  fetch('/weekly_report')
  .then((resp) => resp.json())
  .then((json) => {
      console.log(json)
      setWeeklyreports(json)
  })
}, [])
  return (
    <div className='prodcont'>
    <div className='prodreport'>
    <h3 >Product Sales Reports</h3>

          <table class="table">
  <thead>
    <tr class="table-primary">
      <th scope="col">Product_name </th>
      <th scope="col">Total_sales</th>
    </tr>
  </thead>
  <tbody>

    {
      salereports.map((salereport) =>{
        return(
          <tr>
          <td>{salereport.product_name}</td>
          <td>{salereport.total_sales}</td>
          
        </tr>
        )
      })
    }
  
 
  </tbody>
</table>  


<h3 >Top Products</h3>

<table class="table">
<thead>
<tr class="table-primary">
<th scope="col">Product Name </th>
<th scope="col">Price</th>
<th scope="col">Total Sales</th>
</tr>
</thead>
<tbody>

  {
    productreports.map((productreport) =>{
      return(
        <tr>
        <td>{productreport.name}</td>
        <td>{productreport.price}</td>
        <td>{productreport.total_sales}</td>
        
      </tr>
      )
    })
  }
</tbody>
</table> 

<h3 >Weekly Product Report</h3>

<table class="table">
<thead>
<tr class="table-primary">
<th scope="col">Date </th>
<th scope="col">Item</th>
<th scope="col">No.Sold</th>
<th scope="col">Price per Item</th>
<th scope="col">Total</th>
{/* <th scope="col">Payment method</th> */}
</tr>
</thead>
<tbody>
{/* {
    weeklyreports.map((weeklyreport) =>{
      return(
        <tr>
        <td>{weeklyreport.date}</td>
        <td>{weeklyreport.time}</td>
        <td>{weeklyreport.product_sold}</td>
        <td>{weeklyreport.price}</td>
        <td>{weeklyreport.quantity}</td>
        <td>{weeklyreport.total_sales}</td>
      </tr>
      )
    })
  } */}
<tr>
<td >7.7.2023 </td>
<td >Wheelbarrow </td>
<td>10</td>
<td>$200</td>
<td>$2000</td>
</tr>
<tr>
<td >7.7.2023 </td>
<td >cement </td>
<td>30</td>
<td>$900</td>
<td>$800</td>
</tr><tr>
<td >7.7.2023 </td>
<td >sandsoil </td>
<td>50</td>
<td>$1200</td>
<td>$6000</td>
</tr>

</tbody>
</table> 
</div>

    </div>
  )
}


export default Reports
