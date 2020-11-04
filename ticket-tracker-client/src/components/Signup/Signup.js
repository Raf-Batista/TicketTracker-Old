import React, { useEffect } from "react";
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Redirect } from 'react-router-dom';
import signup from '../../async/signup';
import currentUser from '../../async/currentUser';
import './Signup.css';

const Signup = (props) => {
  let loggedInUser;

  useEffect(async () => {
    loggedInUser = await currentUser();
  }, []);

  const { history } = props
  const initialUserState = { username: '', email: '', password: '' };

  const submit = () => {
    const result = signup(user);
    if(result) history.push('/projects')
  }

  const { values, reset, handleChange, handleSubmit } = useForm(initialUserState, submit);
  const user = values;

  return (
    <div className="container text-center mt-5 signup">
      <h2 data-test="heading">Signup</h2>

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
        <button className="btn text-center">
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            size="lg"
            className="mr-2"
          />
          <span className="mr-4">Twitter</span>
        </button>
      </div>
      <div className="mb-3">
        <button className=" btn text-center">
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control  mt-2"
              name="username"
              type="text"
              placeholder="username"
              value={user.username}
              onChange={handleChange}
              required
            />
            <input
              className="form-control  mt-2"
              name="email"
              type="email"
              placeholder="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <input
              className="form-control  mt-2"
              name="password"
              type="password"
              placeholder="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <button className="btn mt-2" type="submit">
              Signup
            </button>

            <small className="d-block mt-1">
              Already have an account?{" "}
              <NavLink to="/login" data-test="link" className="d-block">
                Login
              </NavLink>
            </small>
          </div>
        </form>
      </div>
    </div>


  );
};

export default Signup;