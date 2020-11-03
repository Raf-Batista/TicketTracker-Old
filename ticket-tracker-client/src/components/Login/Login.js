
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useSelector, useDispatch } from "react-redux";
// import fetchLogin from "../../async/fetchLogin";
import { NavLink } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
import './Login.css';

const Login = (props) => {

//   const initialUserState = { username: "", email: "", password: "" }
//   const currentUser = useSelector(state => state.user);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if(JSON.stringify(currentUser) !== '{}') props.history.push('/account');
//   });

//   const handleClick = (e) => {
//     e.preventDefault();
//     // send e.target.innerText to server for OAuth
//   };

//   const submit = () => {
//     dispatch(fetchLogin(values));
//     reset();
//     props.history.push('/account')
//   };

//   const { values, reset, handleChange, handleSubmit } = useForm(initialUserState, submit); 
//   const user = values;

  return (
    <div className="container text-center mt-5 login">
        <h2 data-test="heading">Login</h2>

        <div className="mt-4">
          <button
            className=" btn text-center"
            name="facebook"
            data-test="button-oauth"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="lg"
              className="mr-2"
            />
            <span className="mr-2">Facebook</span>
          </button>
        </div>
        <div className="my-2">
          <button className="btn text-center" data-test="button-oauth">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              size="lg"
              className="mr-2"
            />
            <span className="mr-4">Twitter</span>
          </button>
        </div>
        <div className="mb-3">
          <button className=" btn text-center" data-test="button-oauth">
            <FontAwesomeIcon
              icon={["fab", "google"]}
              size="lg"
              className="mr-2"
            />
            <span className="mr-4">Google</span>
          </button>
        </div>
        <small>Login account using your email</small>
        <div className="d-flex justify-content-center mt-2">
          <form  data-test="form-signup">
            <div className="form-group">
              <input
                className="form-control  mt-2"
                name="email"
                type="email"
                placeholder="email"
                
            
                required
              />
              <input
                className="form-control  mt-2"
                name="password"
                type="password"
                placeholder="password"
               
                
                required
              />
              <button className="btn mt-2" type="submit">
                Login
              </button>

              <small className="d-block mt-1">
                Don't have an account?{" "}
                <NavLink to="/signup" data-test="link" className="d-block">
                  Create an account
                </NavLink>
              </small>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Login;