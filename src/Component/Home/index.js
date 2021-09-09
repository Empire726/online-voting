import React,{useEffect} from 'react'
import Header from '../Header'
import Votoing from '../Voting'
import {auth} from '../Config/Config';
import { useHistory } from 'react-router';
import Border from '../Border';


export const Home = ({user}) => {

  const history = useHistory();

        useEffect (() => {
    // forcing user to signup
    auth.onAuthStateChanged (user => {
      if (!user) {
        history.push ('/login');
      }
    })
  })
    return (
        <div>
            <Header user={user}/>
            <Border/>
            <Votoing/>
        </div>
    )
}

