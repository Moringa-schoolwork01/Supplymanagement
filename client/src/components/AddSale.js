
import { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input , Col, Row, Select,} from 'antd';
import { useNavigate } from 'react-router-dom';
import { maxWidth, width } from '@mui/system';


  const onSearch = (value) => {
    console.log('search:', value);
  };
// const onFinish = (values) => {
//   console.log('Success:', values);
// };
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const AddSale= () => {
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [selected_customers, setSelectedCustomers] = useState([]);
    const [selected_price, setSelectedPrice] = useState(0);
    const [payment_method, setPaymentMethod] = useState('');
    const [quantity, setQuantity] = useState('');
  const [supplier_name, setSupplierName] = useState('');
  const [buying_price, setBuyingPrice] = useState('');
  const [selected_product, setSelectedProduct] = useState('');
  const [total_price, setTotalPrice] = useState('');

    useEffect(() => {
        fetch('/select_product')
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])

    useEffect(() => {
        fetch('/select_customer')
        .then(response => response.json())
        .then(newcustomer => setCustomers(newcustomer))
    },[])


    const onProductChange = (value) => {
        console.log(`selected ${value}`);
        setSelectedProduct(value)
      };

      const onCustomerChange = (value) =>{
        setSelectedCustomers(value)
      }

      useEffect(()=> {
        console.log('tuko apa buanaa')
        fetch(`/products/${selected_product}`)
        .then((res)=> res.json())
        .then((data)=>setSelectedPrice(data.price))
      },[selected_product])


    function handleSubmit(event) {
        // event.preventDefault();
        console.log('starting form submit');
        const newOrder = {
            total: selected_price * parseInt(quantity),
            quantity: quantity,
            payment_method: payment_method,
            product_id: selected_product,
            customer_id: selected_customers
            //   product: selected_product,
            //   quantity: quantity,
            //   supplier_name: supplier_name,
            //   buying_price: buying_price,
            //   total_price: parseInt(buying_price)* parseInt(quantity),
        };
        console.log(newOrder);
        fetch('/sales', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrder),
        })
            .then((response) => response.json())
            .then((data) => {
                // onAdd(data);
                console.log('tuko hapa ')
                setSelectedProduct('');
                setQuantity('');
                setSupplierName('');
                setBuyingPrice('');
                setTotalPrice('');
                alert('Sale was successful')
                navigate('/sales')
                console.log(data)
            })
            .catch((error) => console.error(error));
    }
    
    return(
        <>
        <Row>
        <Col span={4}></Col>
        <Col span={8}>
            <img
            className='formimg'
            style={{
                marginTop: 200,
                width: 350,
                marginLeft: -150
            }}
             src={"https://static.vecteezy.com/system/resources/thumbnails/005/086/602/small/warehouse-workers-check-quantity-and-delivery-of-products-from-customers-purchase-orders-to-deliver-goods-to-the-correct-location-free-vector.jpg"} alt=''></img>
        </Col>
      <Col span={8}>
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
            marginTop: 200,
          minWidth: 600,
          marginRight:550
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        
      >

<Form.Item
          label="Product Name"
          name="product_id"
          
        >
          <Select
    showSearch
    placeholder="Select a product"
    optionFilterProp="children"
    onChange={onProductChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={products}
 
   
    ></Select>
        </Form.Item>

        <Form.Item
          label="Customer Name"
          name="customer_id"
          
        >
          <Select
    showSearch
    placeholder="Select a customer"
    optionFilterProp="children"
    onChange={onCustomerChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={customers}
 
   
    ></Select>
        </Form.Item>
        
        <Form.Item
          label="Quantity"
          name="quantity"
          onChange={(event) => setQuantity(event.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Payment method"
          name="payment_method"
          onChange={(event) => setPaymentMethod(event.target.value)}
        >
          <Input />
        </Form.Item>

   

       
     
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form></Col>
      <Col span={4}></Col>
        
      </Row>
      </>

    )
   

};
export default AddSale;