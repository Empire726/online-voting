import React, {Component} from 'react';
import {ProductsContextProvider} from './Component/Global/ProductsContext';
import {Home} from './Component/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signup from './Component/Authantication/Signup';
import Login from './Component/Authantication/Login';
// import {NotFound} from './Components/NotFound';
import {auth, db} from './Component/Config/Config';
import {CartContextProvider} from './Component/Global/CartContext';
import Votoing from  "./Component/Voting"
import AddProducts from './Component/Authantication/Addproduct/AddProducts';
import Response from './Component/Response'; 
import Header from './Component/Header';


export class App extends Component {
  state = {
    user: null,
  }

  componentDidMount () {
    // getting user info for navigation bar
    auth.onAuthStateChanged (user => {
      if (user) {
        db
          .collection ('signupNewUser')
          .doc (user.uid)
          .get ()
          .then (snapshot => {
            this.setState ({
              user: snapshot.data().Name
            })
          })
      } else {
        this.setState ({
          user: null
        })
      }
    })
  }    

  render () {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
               <Header/>
               {/* <Frontpage/> */}
               
            <Switch>
              {/* home */}
              <Route exact path="/" component={() => <Home user={this.state.user} />} />

              <Route exact path="/voting" component={() => <Votoing user={this.state.user} />} />
            
              {/* signup */}
              <Route path="/signup" component={Signup} />
              {/* login */}
              <Route path="/login" component={Login} />             
              
              <Route path="/addproducts" component={AddProducts} />
              
              <Route path="/response" component={() => <Response user={this.state.user} />}
              />
              {/* <Route component={} /> */}
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    )
  }
}

export default App;

