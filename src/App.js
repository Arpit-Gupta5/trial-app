import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>
          This is a simple React application ready to be hosted on the internet.
        </p>

        <div className="card">
          <h2>Interactive Counter</h2>
          <p>Current Count: <strong>{count}</strong></p>
          <div className="button-group">
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">
              Increment
            </button>
            <button onClick={() => setCount(count - 1)} className="btn btn-secondary">
              Decrement
            </button>
            <button onClick={() => setCount(0)} className="btn btn-danger">
              Reset
            </button>
          </div>
        </div>

        <div className="card">
          <h3>Features</h3>
          <ul>
            <li>Built with React 18</li>
            <li>Ready for deployment</li>
            <li>Interactive components</li>
            <li>Easy to customize</li>
          </ul>
        </div>

        <footer>
          <p>© 2026 My React App. All rights reserved.</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
