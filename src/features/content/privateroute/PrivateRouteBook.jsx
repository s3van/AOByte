import { Route, Redirect } from "react-router-dom";

const PrivateRouteBook = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !!localStorage.getItem("token") ? (
          <>
            <Component {...props} />
            <Redirect to="/books" />
          </>
        ) : (
          <>
            <Redirect to="/login" />
          </>
        );
      }}
    />
  );
};

export default PrivateRouteBook;
