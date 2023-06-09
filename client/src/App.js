import './App.css';
import Home from './components/Home';
import{Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import Sales from './components/Sales';
import Reports from './Reports';
import { Row,Col,Space} from "antd"
import Customers from './components/Customers';
import Orders from './components/Orders';
import Signin from './components/Signin';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import Addcustomer from './components/Addcustomer';
import UpdateCustomer from './components/UpdateCustomer'
import Addorder from './components/Addorder';
import LandingPage from './components/LandingPage';
// import Newtable from './components/Newtable';
import Sampleform from './components/Sampleform';
import AddSale from './components/AddSale';

function App() {
  return (
    <div className="App">
      {/* {window.location.pathname !== '/' 
      && window.location.pathname !== '/login' 
      && window.location.pathname !== '/signin' } */}
      
      <>
     <Space className='dashcontent'>
     <Routes>
       <Route exact path="/" element={
        <Row>
            <Col span={24}><LandingPage /></Col>
        </Row>      
      }>
      </Route>

        <Route exact path="/home" element={
             <Row>
            <Col span={8}> <Sidebar /></Col>
             <Col span={16}><Home /></Col>
         </Row> 
      }></Route>

<Route exact path="/orders/sampleform" element={
             <Row>
            <Col span={8}> <Sidebar /></Col>
             <Col span={16}><Sampleform /></Col>
         </Row> 
      }></Route>


        <Route exact path="/products" element={
        <Row>
            <Col span={8}> <Sidebar /></Col>
             <Col span={16}><Products /></Col>
         </Row>   
            }></Route>

        <Route exact path="products/addproduct" element={
        <Row>
            <Col span={8}> <Sidebar /></Col>
             <Col span={16}><Addproduct /></Col>
         </Row>     
         }/> 

        <Route exact path="/sales" element={
          <Row>
            <Col span={8}> <Sidebar /></Col>
             <Col span={16}><Sales /></Col>
         </Row>    
          }></Route>

<Route exact path="/sales/addsale" element={
          <Row>
            <Col span={8}> <Sidebar /></Col>
             <Col span={16}><AddSale /></Col>
         </Row>    
          }></Route>

        <Route exact path="/reports" element={
            <Row>
            <Col span={8}> <Sidebar /></Col>
              <Col span={16}><Reports /></Col>
            </Row>     
        }></Route>

        <Route exact path="/customers" element={
          <Row>
          <Col span={8}> <Sidebar /></Col>
            <Col span={16}><Customers /></Col>
          </Row>      
        }></Route>

        <Route exact path="customers/addcustomer" element={
          <Row>
          <Col span={8}> <Sidebar /></Col>
            <Col span={16}><Addcustomer /></Col>
          </Row>      
        }/>

        <Route exact path="customers/UpdateCustomer" element={
        <Row>
        <Col span={8}> <Sidebar /></Col>
          <Col span={16}><UpdateCustomer /></Col>
        </Row>     
        }/>

        <Route exact path="/orders" element={
        <Row>
        <Col span={8}> <Sidebar /></Col>
          <Col span={16}><Orders /></Col>
        </Row>      
        }></Route>
        <Route exact path="orders/addorder" element={
          <Row>
          <Col span={8}> <Sidebar /></Col>
            <Col span={16}><Addorder /></Col>
          </Row>      
        }/>
        <Route exact path="/signin" element={
        <Row>
          <Col span={16}><Signin /></Col>
        </Row>     
      }></Route>

        <Route exact path="/login" element={
        <Row>
        <Col span={16}><Login /></Col>
      </Row>     
        }></Route>
      </Routes> 
     </Space> 
     </>

    </div>
  );
}

export default App;


