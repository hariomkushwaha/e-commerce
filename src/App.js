import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header-component';
import Login from './pages/login-component/login-component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component {
  

  unsubcribeFromAuth =null;


  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef =await createUserProfileDocument(userAuth);


        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
      }

      setCurrentUser(userAuth);


    });
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }





  render(){
    return (
      <div>
      <Header/>
        <Switch>
            <Route exact path='/' component={ HomePage }/>
            <Route exact path='/shop' component={ ShopPage }/>
            <Route exact path='/signin' component={Login}/>
        </Switch>
      
      </div>
    );

  }
  
}

const mapDispatchToProp = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProp)(App);
