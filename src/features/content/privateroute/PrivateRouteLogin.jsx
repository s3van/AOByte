import { Route, Redirect } from "react-router-dom";

const PrivateRouteLogin = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !localStorage.getItem("token") ? (
          <>
            <Component {...props} />
            <Redirect to="/login" />
          </>
        ) : (
          <>
            <Redirect to="/books" />
          </>
        );
      }}
    />
  );
};

export default PrivateRouteLogin;
