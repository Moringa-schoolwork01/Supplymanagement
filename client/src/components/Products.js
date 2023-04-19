import React from 'react'
import { Link,Outlet } from 'react-router-dom'


function Products() {
  // const navigate = useNavigate()

  return (
    <div className='prodcont'>

    <h3 >Add your product here</h3>
    <button className='btn2'><Link to='addproduct'>Add new product</Link></button>
    <Outlet />

          <table class="table">
  <thead>
    <tr class="table-primary">
      <th scope="col">#</th>
      <th scope="col">Product code </th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>32yu8nm</td>
      <td>Chairs</td>
      <td>$20</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>RUH44758</td>
      <td>Tables</td>
      <td>$70</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >TY598IJ </td>
      <td >Mabati </td>
      <td>$150</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >GH667IO </td>
      <td >Wheelbarrow </td>
      <td>$200</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >GT559NM </td>
      <td >Paperbag </td>
      <td>$50</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
  </tbody>
</table>  
    </div>
  )
}





export default Products
