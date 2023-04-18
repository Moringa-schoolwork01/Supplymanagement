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
import { useEffect } from 'react';




function App() {
  useEffect(() => {
    fetch('/auth')
      .then(res => {
        if (res.ok) {
          res.json().then(user => setCurrentUser(user))
        }
      })
  }, [])
  

  if(!currentUser) return <Login setCurrentUserUser={setCurrentUser}/>
  return (
    <div className="App">
     <Space className='dashcontent'>
     <Sidebar />
     <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/reports" element={<Reports />}></Route>
        <Route exact path="/customers" element={<Customers />}></Route>
        <Route exact path="/orders" element={<Orders />}></Route>
      </Routes> 
     </Space>
    
      
      
    </div>
  );
}

export default App;



