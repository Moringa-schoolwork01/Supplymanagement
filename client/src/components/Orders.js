import React from 'react'

function Orders() {
  return (
    <div className='prodcont'>

    <h3 >Recent Orders</h3>

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
    <tr>
      <th scope="row">1</th>
      <td>2023-04-16</td>
      <td>10:30pm</td>
      <td>Chairs</td>
      <td>$20</td>
      <td>100</td>
      <td>$2000</td>

    
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>2023-04-16</td>
      <td>10:30pm</td>
      <td>Tables</td>
      <td>$70</td>
      <td>300</td>
      <td>$721000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>2023-04-16</td>
      <td>10:30pm</td>
      <td >Mabati </td>
      <td>$150</td>
      <td>200</td>
      <td>$30000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>2023-04-16</td>
      <td>10:30pm</td>
      <td >Wheelbarrow </td>
      <td>$200</td>
      <td>300</td>
      <td>$60000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>2023-04-16</td>
      <td>10:30pm</td>
      <td >Paperbag </td>
      <td>$50</td>
      <td>1000</td>
      <td>$50000</td>
    </tr>
  </tbody>
</table>  

    </div>
  )
}

export default Orders
