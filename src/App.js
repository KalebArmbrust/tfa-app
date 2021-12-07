import './App.css';
import React, { useState } from 'react';

function App() {
  const [res, setRes] = useState('');

  const admit = () => {
    const code = document.getElementById('tfa-input').value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"token":code});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://mock-2fa-api.azure-api.net/validation", requestOptions)
      .then(response => response.text())
      .then(result => (console.log(result), setRes(result)))
      .catch(error => console.log('error', error));

      document.getElementById('body').style.display = "none";
  }
  
  const tryAgain = () => {
    document.getElementById('body').style.display = "flex";
    document.getElementById('body').style.flexDirection = "column";
    document.getElementById('accessDenied').style.display = "none";
    document.getElementById('tfa-input').value = "";
  }

  const reset = () => {
    document.getElementById('body').style.display = "flex";
    document.getElementById('body').style.flexDirection = "column";
    document.getElementById('accessGranted').style.display = "none";
    document.getElementById('tfa-input').value = "";
  }

  if (res === "true") {
    document.getElementById('accessGranted').style.display = "flex";
    document.getElementById('accessDenied').style.display = "none";
  } else if (res === "false") {
    document.getElementById('accessDenied').style.display = "flex";
    document.getElementById('accessGranted').style.display = "none";
  };

  return (
    <div className="App">
      <div className="body" id="body">
        <h1 className="body-title">ENTER YOUR CODE...</h1>
        <div className="tfa" id="tfa">
          <input type="text" placeholder="__ __ __ __ __ __" className="tfa-input" id="tfa-input"></input>
          <button className="tfa-button" onClick={admit}>ENTER</button>
        </div>
      </div>
      <div className="admit">
          <div className="accessGranted" id="accessGranted">
            <h2>YOU MAY ENTER</h2>
            <button className="tfa-button" onClick={reset}>RESET</button>
          </div>
          <div className="accessDenied" id="accessDenied">
            <h2>INCORRECT</h2>
            <button className="tfa-button" onClick={tryAgain}>TRY AGAIN</button>
          </div>
        </div>
    </div>
  );
}

export default App;
