import './App.css';

function App() {
  const getCode = (e) => {
    e.preventDefault();
    document.getElementById('tfa').style.display = "flex";
  }
  const admit = (e) => {
    e.preventDefault();
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
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    

    // if (res.PromiseState === "fulfilled") {
    //   document.getElementById('accessGranted').style.display = "flex";
    // } else {
    //   document.getElementById('accessDenied').style.display = "flex";
    // };
    
  }

  return (
    <div className="App">
      <header className="header">
        <p className="header-title">TFAwesome</p>
      </header>
      <div className="form-container">
        <h2 className="form-title">Guild-Info</h2>
        <form className="form">
          <div className="form-dividers">
            <label className="form-label">Name:</label>
            <input className="form-input"></input>
          </div>
          <div className="form-dividers">
            <label className="form-label">Code:</label>
            <input className="form-input"></input>
          </div>
          <button onClick={getCode} className="form-button">Enter</button>
        </form>
      </div>
      <div className="tfa" id="tfa">
        <input placeholder="What's the Password...?" className="tfa-input" id="tfa-input"></input>
        <button className="tfa-button" onClick={admit}>Enter</button>
      </div>
      <div className="accessGranted" id="accessGranted">
        <h2>You may Enter</h2>
      </div>
      <div className="accessDenied" id="accessDenied">
        <h2>Incorrect</h2>
      </div>
    </div>
  );
}

export default App;
