import './App.css';
import Home from './components/Home';
import{Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import Sales from './components/Sales';
import Reports from './Reports';
import { Space} from "antd"



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
      </Routes> 
     </Space>
    
      
      
    </div>
  );
}

export default App;



