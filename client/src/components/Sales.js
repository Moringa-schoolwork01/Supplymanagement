import React,  { useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import { Row, Col } from 'antd'
import { PlusOutlined} from '@ant-design/icons'
import { Space, Table, Tag } from 'antd';


function Sales() {

  const [sales,setSales] = useState([])
  const [selectedSales, setSelectedSales] = useState(null);



  useEffect(()=> {
    fetch('/sales', )
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json)
        setSales(json)
    })
}, [])

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'product_name',
    key: 'product_name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Customer Name',
    dataIndex: 'customer_name',
    key: 'contact_name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Quantity ',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Total ',
    dataIndex: 'total',
    key: 'total',
    render: (text) => <Tag color={"green"}>{`${text}.00`}</Tag>,

  },
  {
    title: 'Payment Method',
    dataIndex: 'payment_method',
    key: 'payment_method',
    render: (text) => <Tag color={"geekblue"}>{text}</Tag>,
  },
]

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
      <Table columns={columns} dataSource={sales} />

        {selectedSales && (
  <div>
  <div className="form-group">
  <label htmlFor="order_quantity">Product Name</label>
  <input
    type="text"
    className="form-control"
    id="product_name"
    name="product_name"
    value={selectedSales.product_name}
    onChange={(e) => setSelectedSales({...selectedSales, product_name: e.target.value})}
  />
</div>

<div className="form-group">
<label htmlFor="order_quantity">Customer Nmae</label>
<input
  type="text"
  className="form-control"
  id="customer_name"
  name="customer_name"
  value={selectedSales.customer_name}
  onChange={(e) => setSelectedSales({...selectedSales, customer_name: e.target.value})}
/>
</div>

<div className="form-group">
<label htmlFor="quantity">Quantity</label>
<input
  type="text"
  className="form-control"
  id="quantity"
  name="quantity"
  value={selectedSales.quantity}
  onChange={(e) => setSelectedSales({...selectedSales, quantity: e.target.value})}
/>
</div>

<div className="form-group">
<label htmlFor="quantity">Total</label>
<input
  type="text"
  className="form-control"
  id="total"
  name="total"
  value={selectedSales.total}
  onChange={(e) => setSelectedSales({...selectedSales, total: e.target.value})}
/>
</div>

<div className="form-group">
<label htmlFor="quantity">Payment Method</label>
<input
  type="text"
  className="form-control"
  id="payment_method"
  name="payment_method"
  value={selectedSales.payment_method}
  onChange={(e) => setSelectedSales({...selectedSales, payment_method: e.target.value})}
/>
</div>
</div>
        )}






          {/* <table class="table">
  <thead>
    <tr class="table-primary">
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Quantity</th>
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
            <td>{sale.product_name}</td>
            <td>{sale.customer_name}</td>
            <td>{sale.quantity}</td>
            <td>{sale.total}</td>
            <td>{sale.payment_method}</td>
            </tr>

          )
        })
      }
    
  </tbody>
</table>   */}
</div>
    </div>
  )
}

export default Sales
