import React from 'react'

function Customers() {
  return (
    <div className='prodcont'>

    <h3 >Add new customer</h3>
    <button className='btn2'>Add new Customer</button>

          <table class="table">
  <thead>
    <tr class="table-primary">
      <th scope="col">#</th>
      <th scope="col">Full name</th>
      <th scope="col">Contant</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Jeffrey dama</td>
      <td>0722848380</td>
      <td>jeff@email.com</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Sammy kuria</td>
      <td>0768696986</td>
      <td>sammy@email.com</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Dante mabwoy</td>
      <td>0787889097</td>
      <td>dnte@email.com</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Bobby shmoney</td>
      <td>0766789636</td>
      <td>bobby@email.com</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>shiks kapienga</td>
      <td>0722848380</td>
      <td>shiks@email.com</td>
      <button className='custom-btn btn-2'>Update</button>
      <button className='btnd'>Delete</button>
    </tr>
  </tbody>
</table>  

    </div>
  )
}

export default Customers
