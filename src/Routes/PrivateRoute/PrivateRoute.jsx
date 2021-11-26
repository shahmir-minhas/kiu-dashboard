import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogin } = useUserContext();
  console.log("in is login");
  return (
    <>
      {isLogin() ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
