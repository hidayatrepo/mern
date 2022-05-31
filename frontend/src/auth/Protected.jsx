import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps => {
      const item = localStorage.getItem("token");
      
      // console.log(item);
      // if (item) {
      //   console.log("render component");
      // } else {
      //   console.log('REDIRECT TO "/shops"!!!');
      // }

      return item !== null ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to="/login" />
      );
    }}
  />
);

export default Protected;
