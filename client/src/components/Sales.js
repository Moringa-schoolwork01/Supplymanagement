import React,  { useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import { Row, Col } from 'antd'
import { PlusOutlined} from '@ant-design/icons'


function Sales() {


  const [sales,setSales] = useState([])


  useEffect(()=> {
    fetch('/sales')
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json)
        setSales(json)
    })
}, [])
  return (
    <div className='prodcont'>
      <div className='prodsales'>
      
    <h3 >Recent Sales</h3>
    {/* <Row>
        <Col span={20}></Col>
        <Col span={4}>
           <button className='btn2'>
        <PlusOutlined />
        <Link to='AddSale'>Make Sale</Link>
      </button>
      </Col>
        </Row>  */}
        <button className='btn2'>
        <PlusOutlined />
        <Link to='AddSale'>Make Sale</Link>
      </button>
      {/* <Outlet /> */}
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


      {
        sales.map((sale) =>{
          return(
            <tr>
            <th scope="row">{sale.id}</th>
            <td>{sale.date}</td>
            <td>{sale.name}</td>
            <td>{sale.price}</td>
            <td>{sale.discount}</td>
            <td>{sale.total}</td>
            <td>{sale.payment_method}</td>
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

export default Sales
