import React, { useState,useEffect } from 'react';
import '../../StyleSheet/Header/Navbar.css';
import { MenuItems } from '../Header/MultiItems';
import omg from "../../images/image.png"
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { auth } from '../Config/Config';


function Header({ user }) {
  const history = useHistory();
  const logout = () => {
    auth.signOut().then(() => {
      history.push("./login");
    })
  }
      useEffect (() => {
    // forcing user to signup
    auth.onAuthStateChanged (user => {
      if (!user) {
        history.push ('/login');
      }
    })
  })

  const [clicked, setClicked] = useState(false);
  //false = bars, true = times
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="header">
       {!user && <nav className="Navbar">
        <img src={omg} alt="ooPs" className="navbar-logo" />
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
       
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink className={item.cName} to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
       
</nav> }
      {
  user &&
    <div className="rightside">
    {/* <img src={omg} alt="ooPs" className="navbar-logo" /> */}
    <NavLink to="/" className="navlinks">{user} </NavLink>

      <span>
        <button className="logout-btn" onClick={logout}>LOGOUT</button>
      </span>
    </div>
}


    </div>
  );
}
export default Header;
