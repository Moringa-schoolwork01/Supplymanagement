import React from 'react'

function Sales() {
  return (
    <div className='prodcont'>

    <h3 >Recent Sales</h3>

          <table class="table">
  <thead>
    <tr class="table-primary">
      <th scope="col">#</th>
      <th scope="col">Date </th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Discount</th>
      <th scope="col">Total</th>
      <th scope="col">Payment method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>32yu8nm</td>
      <td>Chairs</td>
      <td>$20</td>
      <td>$0</td>
      <td>$20</td>
      <td>Mpesa</td>

    
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>RUH44758</td>
      <td>Tables</td>
      <td>$70</td>
      <td>$0</td>
      <td>$70</td>
      <td>Mpesa</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >TY598IJ </td>
      <td >Mabati </td>
      <td>$150</td>
      <td>$0</td>
      <td>$150</td>
      <td>Mpesa</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >GH667IO </td>
      <td >Wheelbarrow </td>
      <td>$200</td>
      <td>$0</td>
      <td>$200</td>
      <td>Mpesa</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >GT559NM </td>
      <td >Paperbag </td>
      <td>$50</td>
      <td>$0</td>
      <td>$50</td>
      <td>Cash</td>
    </tr>
  </tbody>
</table>  

    </div>
  )
}

export default Sales
