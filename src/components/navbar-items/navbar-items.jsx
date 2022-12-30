import { NavLink } from "react-router-dom"
import '../navbar-items/navbar-items.css'

const NavbarItems = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 ">
      <NavLink to={'/smartfonlar'}><li className="nav-item"><a className="nav-link" href="#">Smartfonlar</a></li></NavLink>
      <NavLink to={'/noutbuklar'}><li className="nav-item"><a className="nav-link" href="#">Noutbuklar</a></li></NavLink>
      <NavLink to={'/planshetlar'}><li className="nav-item"><a className="nav-link" href="#">Planshetlar</a></li></NavLink>
      <NavLink to={'/airpodslar'}><li className="nav-item"><a className="nav-link" href="#">AirPodslar</a></li></NavLink>
      <NavLink to={'/smartwatchlar'}><li className="nav-item"><a className="nav-link" href="#">SmartWatchlar</a></li></NavLink>
  </ul>
  )
}

export default NavbarItems