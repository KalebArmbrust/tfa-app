import './App.css';

function App() {
  return (
    <div className="App">
      <header class="header">
        <p class="header-title">TFAwesome</p>
      </header>
      <div class="form-container">
        <h2 class="form-title">Guild-Info</h2>
        <form class="form">
          <div class="form-dividers">
            <label class="form-label">Name</label>
            <input class="form-input"></input>
          </div>
          <div class="form-dividers">
            <label class="form-label">Code</label>
            <input class="form-input"></input>
          </div>
          <button class="form-button">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default App;
