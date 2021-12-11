import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isModal,toggleModal,...restOfProps }:any) => {
  const isAuthenticated = localStorage.getItem("api_token");
  console.log("this", isAuthenticated);
  return (<Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component isModal={isModal} toggleModal={toggleModal} {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
export default ProtectedRoute