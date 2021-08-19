//CSS
import styles from "./Content.module.css";
//Pages
import NotFound from "./notfound/NotFound"
import Books from "./books/Books"
import SingleBook from "./singlebook/SingleBook"
import ChangePass from "./changepass/ChangePass"
import Login from "./login/Login";
//Routing
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRouteBook from "./privateroute/PrivateRouteBook"
import PrivateRouteLogin from "./privateroute/PrivateRouteLogin"

const Content = (props) => {
  return (
    <div className={styles.content}>
      <Switch>
        <PrivateRouteBook  path='/books' component={Books} exact={true}/>
        <PrivateRouteLogin path='/login' component={Login} exact={true}/>
        <Route path="/books:id" component={SingleBook} exact={true} />
        <Route path="/changepassword:link" component={ChangePass} exact={true} />
        <Route path="/notfound" component={NotFound} exact={true} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
}

export default Content;
