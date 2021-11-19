import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { connect } from "react-redux";
import { LoginAuthAction } from "../actions";
import { useHistory } from "react-router-dom";
import {useState} from 'react'

const mapStateToProps = (state) => ({
	user: state,
});

const mapDispatchToProps = (dispatch) => {
	  return {
	login: (loginState, history, setErrorHandler) => {
	  dispatch(LoginAuthAction(loginState, history, setErrorHandler));
	},
  };
}

const Login = (props) => {

	const [errorHandler, setErrorHandler] = useState({
		HashError: false,
	     message: "",
	});
	const history = useHistory();
	const [loginState, setLoginState] = useState({})


  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={(e)=>{
		    e.preventDefault()
			props.login(loginState, history, setErrorHandler)
			alert("login successfull")}}>
		
          <h3>Login</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={loginState.email}
              onChange={ (e) => setLoginState({...loginState, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={loginState.password}
              onChange={ (e) => setLoginState({...loginState, password: e.target.value})}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <Link to="/resetpassword">password?</Link>
          </p>
          <p className="forgot-password text-right">
            Don't have a account <Link to="/register">Register?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
