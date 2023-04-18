import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="dashbord">
       <div className='sidebar'>
        <div className='header'>
        <h1 className='head1'>HAKUNA MATATA</h1>
        <h5 className='head5'>Vybz Kartel</h5>
      <p>Admin</p>
        </div>
      
      <ul>

      <li><Link to='/'>Dashboard </Link></li>
        <li><Link to='/sales'>Sales </Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/reports'>Reports</Link></li>
      </ul>
      <button className="btn1">LogOut</button>
    </div>
    </div>
  )
}

export default Sidebar
