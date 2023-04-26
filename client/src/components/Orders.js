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
      <th scope="col">Quantity</th>
      <th scope="col">Total sales</th>
      <th scope="col">Supplier name</th>

    </tr>
  </thead>
  <tbody>


    {
      orders.map((order) =>{
        return(
          <tr>
          <th scope="row">{order.id}</th>
          <td>{order.quantity}</td>
          <td>{order.total_sales}</td>
          <td>{order.supplier_name}</td>
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
