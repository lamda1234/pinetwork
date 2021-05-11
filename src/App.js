import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import SignUpScreen from './screens/SignUpScreen';

function App() {
  return (
    <BrowserRouter>
        <div className="grid-container">
            <main>
                <Route path="/" component={HomeScreen} exact></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>  
                <Route path="/contact" component={ContactScreen}></Route>
                <Route path="/signin" component={SigninScreen}></Route>
                <Route path="/signup" component={SignUpScreen}></Route>
            </main>
            <footer>
                ©All rights Reserved.XXX
            </footer>   
        </div>
    </BrowserRouter>
  );
}

export default App;
