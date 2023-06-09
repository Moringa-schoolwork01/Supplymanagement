
import { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input , Col, Row, Select,} from 'antd';


  const onSearch = (value) => {
    console.log('search:', value);
  };
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Sampleform= () => {
    const [form ]= Form.useForm()
    const [products, setProduct] = useState([]);
    const [quantity, setQuantity] = useState('');
  const [supplier_name, setSupplierName] = useState('');
  const [buying_price, setBuyingPrice] = useState('');
  const [selected_product, setSelectedProduct] = useState('');
  const [total_price, setTotalPrice] = useState('');

    useEffect(() => {
        fetch('/select_product')
        .then(response => response.json())
        .then(data => setProduct(data))
    },[]

    )
    const onProductChange = (value) => {
        console.log(`selected ${value}`);
        setSelectedProduct(value)
      };
    const handleSubmit = (event) => {
        // event.preventDefault();
        const newOrder = {
          product: selected_product,
          quantity: quantity,
          supplier_name: supplier_name,
          buying_price: buying_price,
          total_price: parseInt(buying_price)* parseInt(quantity),
        };
        console.log (newOrder)
        fetch('/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrder),
        })
          .then((response) => response.json())
          .then((data) => {
            // onAdd(data);
            setSelectedProduct('');
            setQuantity('');
            setSupplierName('');
            setBuyingPrice('');
            setTotalPrice('');
          })
          .catch((error) => console.error(error));
      };
    
    return(
        <>
        <Row>
        <Col span={4}></Col>
        <Col span={8}>
            <img
            className='formimg'
            style={{
                marginTop: 200,
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
        }}
        initialValues={{
          remember: true,
        }}
        form = {form}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        
      >
        <Form.Item
          label="Quantity"
          name="quantity"
          onChange={(event) => setQuantity(event.target.value)}
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          label="Supplier Name"
          name="suppler_name"
          onChange={(event) => setSupplierName(event.target.value)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Buying Price"
          name="buying_price"
          onChange={(event) => setBuyingPrice(event.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Name"
          name="product"
          
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
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form></Col>
      <Col span={4}></Col>
        
      </Row>
      </>

    )
   

};
export default Sampleform;