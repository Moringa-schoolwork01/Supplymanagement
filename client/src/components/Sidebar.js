import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./Auth"

function Sidebar() {
const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('jwt')
    navigate('/login')
  }

const auth = useAuth()

  return (
    <div className="dashbord">
       <div className='sidebar'>
        <div className='header'>
        <h1 className='head1'>Bright Pearl</h1>
        <h5 className='head5'>Point Of Sale</h5>
      <p></p>
        </div>
      
      <ul>

      <li><Link to='/home'>Dashboard </Link></li>
        <li><Link to='/sales'>Sales </Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/reports'>Reports</Link></li>
        {/* <li><Link to='/profile'>Profile</Link></li> */}
      </ul>
      {!auth.user && (
              <button className="btn1" onClick={handleLogout}>Logout</button>
      )}
    </div>
    </div>
  )
}

export default Sidebar
