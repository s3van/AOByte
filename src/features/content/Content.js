import { useState } from "react";
import styles from "./Content.module.css";
//Pages
import Home from "./home/Home";
import Login from "./login/Login"
import NotFound from "./notfound/Notfound"
import Books from "./books/Books"
//Routing
import { Route, Redirect, Switch } from "react-router-dom";


const Content = () => {

  const [pages] = useState([
    { path: "/", component: Login, exact: true },
    { path: "/home", component: Home, exact: true },
    { path: "/books", component: Books, exact: true },
    { path: "/notfound", component: NotFound, exact: true },
  ])

  const pagesJSX = pages.map((page, index) => {
    return (
      <Route
        path={page.path}
        component={page.component}
        exact={page.exact}
        key={index}
      />
    );
  });
  return (
    <div className={styles.content}>
      <Switch>
        {pagesJSX}
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
}

export default Content;
