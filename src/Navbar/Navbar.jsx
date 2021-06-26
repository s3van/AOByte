import NavbarStyles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={NavbarStyles.nav}>
      <div className={NavbarStyles.item}>
      <NavLink to="/pool" activeClassName={NavbarStyles.active}>1</NavLink>
      </div>
      <div className={NavbarStyles.item}>
      <NavLink to="/pool" activeClassName={NavbarStyles.active}>2</NavLink>
      </div>
      <div className={NavbarStyles.item}>
      <NavLink to="/pool" activeClassName={NavbarStyles.active}>3</NavLink>
      </div>
      <div className={NavbarStyles.item}>
      <NavLink to="/pool" activeClassName={NavbarStyles.active}>4</NavLink>
      </div>
      <div className={NavbarStyles.item}>
      <NavLink to="/pool" activeClassName={NavbarStyles.active}>5</NavLink>
      </div>
    </nav>
    
  );
};

export default Navbar;
