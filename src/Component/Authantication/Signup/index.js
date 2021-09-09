import React, {useState} from 'react';
import {auth, db} from '../../Config/Config';
import {Link} from 'react-router-dom';

const Signup = props => {
  // defining state
  const [name, setName] = useState ('');
  const [addhar, setAddhar] = useState ('');
  const [voter, setVoter_id_no] = useState ('');
  const [place, setPlace] = useState('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState ('');

  // signup
  const signup = e => {
    e.preventDefault ();
    auth
      .createUserWithEmailAndPassword (email, password)
      .then (cred => {
        db
          .collection ('signupNewUser')
          .doc (cred.user.uid)
          .set ({
            Name: name,
            Email: email,
            Password: password,
            ADDHAR_No: addhar,
            Voter_id:voter,
            Place: place,

          })
          .then (() => {
            setName ('');
            setEmail ('');
            setPassword ('');
            setPlace ('');
            setVoter_id_no ('');
            setAddhar ('');
            setError ('');
            props.history.push ('/login');
          })
          .catch (err => setError (err.message));
      })
      .catch (err => setError (err.message));
  };

  return (
    <div className="container">
      <br />
      <h2>Sign up</h2>
      <br />
      <form autoComplete="off" className="form-group" onSubmit={signup}>
        <i className=" zmdi zmdi-account material-icons-name zmdi-hc-2x" /> <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="FUll Name"
          required
          onChange={e => setName (e.target.value)}
          value={name}
        />
        <br />
        {/* ---------------------------------------------------------- */}
        <i class="zmdi zmdi-card zmdi-hc-1x" />
        <label htmlFor="name">ADDHAR_No</label>
        <input
          type="number"
          className="form-control"
          placeholder="0000-0000-0000-0000"
          required
          onChange={e => setAddhar (e.target.value)}
          value={addhar}
        />
        <br />
        <i class="zmdi zmdi-picture-in-picture zmdi-hc-1x" />
        <label htmlFor="name">Voter_id_no</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter your ID"
          required
          onChange={e => setVoter_id_no (e.target.value)}
          value={voter}
        />
        {/* <br /><i class="zmdi zmdi-gps-dot zmdi-hc-1x" /> <label htmlFor="name">Place</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={e => setPlace (e.target.value)}
          value={place}
        /> */}
        <br />
      


        {/* -------------------------------------------------------------------------------- */}
        <i className=" zmdi zmdi-email material-icons-email zmdi-hc-1x" />  <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder='eg. ahhdgueh@gmail.com'
          required
          onChange={e => setEmail (e.target.value)}
          value={email}
        />
        <br />
        <i className=" zmdi zmdi-lock material-icons-name" />
        <label htmlFor="passowrd">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Your Password"
          required
          onChange={e => setPassword (e.target.value)}
          value={password}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">
          SUBMIT
        </button>
      </form>
      {error && <span className="error-msg">{error}</span>}
      <br />
      <span>
        Already have an account? Login
        <Link to="login"> Here</Link>
      </span>
    </div>
  );
};

export default Signup;
