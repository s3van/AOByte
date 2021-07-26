import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [navlinks] = useState([
        // { to: "/", exact: true, title: "Login" },
        { to: "/home", exact: true, title: "Home" },
        { to: "/books", exact: true, title: "Books" },
    ])

    const navlinksJSX = navlinks.map((link, index) => {
        return (
            <NavLink
                to={link.to}
                activeClassName={styles.active}
                exact={link.exact}
                key={index}
            >
                {link.title}
            </NavLink>
        );
    });

    return (

        <div className={styles.wrapper}>
            <div className={styles.logo}><h1><span>Gid</span><span>Lib</span></h1></div>
            <div className={styles.nav}>
                <div className={styles.item}>{navlinksJSX}</div>
            </div>
        </div>
    );
}


export default Navbar;