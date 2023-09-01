//App.js
// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import UserPortfolio from './components/UserPortfolio';
import Button from './components/Button';




const App = () => {
  //login logic added
  const handleLoginClick = () => {
    console.log("Login button clicked");
  };

  const handleSigninClick = () => {
    //Signing Logic Added
    console.log("Signin button clicked");
  };

  return (
    <div>
      <Button label="Login" onClick={handleLoginClick} />
      <Button label="Signin" onClick={handleSigninClick} />
    </div>
  );
};

export default App;