import React,{ useEffect, useState } from 'react'

function Orders() {

  const [orders,setOrders] = useState([])


  useEffect(()=> {
    fetch('/orders')
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json)
        setOrders(json)
    })
}, [])
  return (
    <div className='prodcont'>
<div className='prodorders'>
          <h3 > Recent Orders </h3>

          <table class="table">
  <thead>
    <tr class="table-primary">
      <th scope="col">#</th>
      <th scope="col">Date </th>
      <th scope="col">Time </th>
      <th scope="col">Product sold</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total sales</th>

    </tr>
  </thead>
  <tbody>


    {
      orders.map((order) =>{
        return(
          <tr>
          <th scope="row">{order.id}</th>
          <td>{order.date}</td>
          <td>{order.time}</td>
          <td>{order.product_sold}</td>
          <td>{order.price}</td>
          <td>{order.quantity}</td>
          <td>{order.total_sales}</td>
        </tr>
    
        )
      })
    }
  </tbody>
</table>  
</div>

    </div>
  )
}

export default Orders
