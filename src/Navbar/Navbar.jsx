import NavbarStyles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={NavbarStyles.nav}>
      <div className={NavbarStyles.item}>
      <NavLink to="/" activeClassName={NavbarStyles.active}>1</NavLink>
      </div>
      <div className={NavbarStyles.item}>
      <NavLink to="/pool2" activeClassName={NavbarStyles.active}>2</NavLink>
      </div>
      <div className={NavbarStyles.item}>
      <NavLink to="/pool3" activeClassName={NavbarStyles.active}>3</NavLink>
      </div>
      <div className={NavbarStyles.item}>
      <NavLink to="/pool4" activeClassName={NavbarStyles.active}>4</NavLink>
      </div>
      <div className={NavbarStyles.item}>
      <NavLink to="/pool5" activeClassName={NavbarStyles.active}>5</NavLink>
      </div>
    </nav>
    
  );
};

export default Navbar;
