import React, {useState} from 'react';
import {auth} from '../../Config/Config';
import {Link} from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const[addhar, setAddhar] = useState('');
  const[voter, setVoter_id_no] = useState('');
  const [error, setError] = useState ('');

  const login = e => {
    e.preventDefault ();
    auth
      .signInWithEmailAndPassword (email, password)
      .then (() => {
        setEmail ('');
        setPassword ('');
        setVoter_id_no('');
        setAddhar('');
        setError ('');
        props.history.push ('/');
      })
      .catch (err => setError (err.message));
  };

  return (
    <div className="container">
      <br />
      <h2>Login</h2>
      <br />
      <form autoComplete="off" className="form-group" onSubmit={login}>
      <i class="zmdi zmdi-card zmdi-hc-1x" /> <label htmlFor="email">Voter ID No.</label>
        <input
          type="number"
          className="form-control"
          placeholder = 'Enter your ID'
          required
          onChange={e => setVoter_id_no (e.target.value)}
          value={voter}
        />
        <br />
      <i class="zmdi zmdi-card zmdi-hc-1x" /> <label htmlFor="email">ADDHAR_NO</label>
        <input
          type="number"
          className="form-control"
          placeholder = '0000-0000-0000-0000'
          required
          onChange={e => setAddhar (e.target.value)}
          value={addhar}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={e => setEmail (e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={e => setPassword (e.target.value)}
          value={password}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">
          LOGIN
        </button>
      </form>
      {error && <span className="error-msg">{error}</span>}
      <br />
      <span>
        Don't have an account? Register
        <Link to="signup"> Here</Link>
      </span>
    </div>
  );
};
export default Login;
