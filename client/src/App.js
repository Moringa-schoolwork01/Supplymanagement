import './App.css';
import Home from './components/Home';
import{Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import Sales from './components/Sales';
import Reports from './Reports';
import { Space} from "antd"
import Customers from './components/Customers';
import Orders from './components/Orders';
import Signin from './components/Signin';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import Addcustomer from './components/Addcustomer';
import UpdateCustomer from './components/UpdateCustomer'

function App() {
  return (
    
    <div className="App">
      <>
     <Space className='dashcontent'>
     <Sidebar />
     <Routes>
        <Route exact path="/home" element={<Home />}> </Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="products/addproduct" element={<Addproduct />}/> 
        <Route exact path="/sales" element={<Sales />}></Route>
        <Route exact path="/reports" element={<Reports />}></Route>
        <Route exact path="/customers" element={<Customers />}></Route>
        <Route exact path="customers/addcustomer" element={<Addcustomer />}/>
        <Route exact path="customers/UpdateCustomer" element={<UpdateCustomer />}/>
        <Route exact path="/orders" element={<Orders />}></Route>
        <Route exact path="/home/signin" element={<Signin />}></Route>
        {/* <Route exact path="profile" element={<Profile />}></Route> */}
        <Route exact path="/home/login" element={<Login />}></Route>
      </Routes> 
     </Space>
    
      
     </>

    </div>
  );
}

export default App;


