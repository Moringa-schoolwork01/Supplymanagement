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



function App() {
  return (
    <div className="App">
     <Space className='dashcontent'>
     <Sidebar />
     <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/sales" element={<Sales />}></Route>
        <Route exact path="/reports" element={<Reports />}></Route>
        <Route exact path="/customers" element={<Customers />}></Route>
        <Route exact path="/orders" element={<Orders />}></Route>
      </Routes> 
     </Space>
    
      
      
    </div>
  );
}

export default App;



