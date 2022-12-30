import { NavLink } from 'react-router-dom'
import '../navbar/navbar.css'
import { logo1 } from '../../constants/'
import {NavbarItems, Search} from '../'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-color bg-dark">
        <div className="container-fluid">
          <NavLink className={'navbar-brand mx-3'} to='/'><img alt='' src={logo1} className={'logo'}/></NavLink>
          <NavbarItems/>
          <Search/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar