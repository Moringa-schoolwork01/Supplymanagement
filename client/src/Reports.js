import React from 'react'

function Reports() {
  return (
    <div className='prodcont'>

    <h3 >Reports</h3>

          <table class="table">
  <thead>
    <tr class="table-primary">
      <th scope="col">#</th>
      <th scope="col">Date </th>
      <th scope="col">Item</th>
      <th scope="col">No.Sold</th>
      <th scope="col">Price per Item</th>
      <th scope="col">Total</th>
      {/* <th scope="col">Payment method</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>4.7.2023</td>
      <td>Chairs</td>
      <td>40</td>
      <td>$20</td>
      <td>$800</td>
      {/* <td>Mpesa</td> */}

    
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>5.7.2023</td>
      <td>Tables</td>
      <td>60</td>
      <td>70</td>
      <td>$560</td>
      {/* <td>Mpesa</td> */}
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >6.7.2023</td>
      <td >Mabati </td>
      <td>70</td>
      <td>150</td>
      <td>$10500</td>
      {/* <td>Mpesa</td> */}
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >7.7.2023 </td>
      <td >Wheelbarrow </td>
      <td>10</td>
      <td>$200</td>
      <td>$2000</td>
      {/* <td>Mpesa</td> */}
    </tr>
    <tr>
      <th scope="row">5</th>
      <td >8.7.2023</td>
      <td >Paperbag </td>
      <td>50</td>
      <td>$50</td>
      <td>$2500</td>
      {/* <td>Cash</td> */}
    </tr>
  </tbody>
</table>  

    </div>
  )
}


export default Reports
