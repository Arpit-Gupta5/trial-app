import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('counter');
  const [color, setColor] = useState('#667eea');

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoInput, done: false }]);
      setTodoInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`} style={{ '--primary-color': color }}>
      <header className="App-header">
        <div className="header-top">
          <h1>🚀 React Interactive App</h1>
          <div className="header-controls">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="theme-btn"
              title="Toggle dark mode"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <input 
              type="color" 
              value={color} 
              onChange={(e) => setColor(e.target.value)}
              className="color-picker"
              title="Choose theme color"
            />
          </div>
        </div>

        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'counter' ? 'active' : ''}`}
            onClick={() => setActiveTab('counter')}
          >
            📊 Counter
          </button>
          <button 
            className={`tab-btn ${activeTab === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            ✅ Todo List
          </button>
          <button 
            className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            ℹ️ About
          </button>
        </div>

        {activeTab === 'counter' && (
          <div className="card">
            <h2>📈 Interactive Counter</h2>
            <p>Current Count: <strong className="counter-display">{count}</strong></p>
            <div className="button-group">
              <button onClick={() => setCount(count + 1)} className="btn btn-primary">
                ➕ Increment
              </button>
              <button onClick={() => setCount(count - 1)} className="btn btn-secondary">
                ➖ Decrement
              </button>
              <button onClick={() => setCount(count + 10)} className="btn btn-primary">
                ➕ +10
              </button>
              <button onClick={() => setCount(0)} className="btn btn-danger">
                🔄 Reset
              </button>
            </div>
          </div>
        )}

        {activeTab === 'todos' && (
          <div className="card">
            <h2>✅ Todo List</h2>
            <div className="todo-input-group">
              <input 
                type="text"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                placeholder="Add a new todo..."
                className="todo-input"
              />
              <button onClick={addTodo} className="btn btn-primary">
                Add Todo
              </button>
            </div>
            <div className="todo-list">
              {todos.length === 0 ? (
                <p className="empty-message">No todos yet! Add one to get started.</p>
              ) : (
                todos.map(todo => (
                  <div key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
                    <input 
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => toggleTodo(todo.id)}
                      className="todo-checkbox"
                    />
                    <span className="todo-text">{todo.text}</span>
                    <button 
                      onClick={() => deleteTodo(todo.id)}
                      className="todo-delete"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>
            <p className="todo-stats">Total: {todos.length} | Done: {todos.filter(t => t.done).length}</p>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="card">
            <h2>About This App</h2>
            <p>This is an interactive React application with multiple features:</p>
            <div className="features-grid">
              <div className="feature">
                <span className="feature-icon">📊</span>
                <h3>Counter</h3>
                <p>Track numbers with increment and decrement</p>
              </div>
              <div className="feature">
                <span className="feature-icon">✅</span>
                <h3>Todo List</h3>
                <p>Manage your tasks with ease</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <h3>Themes</h3>
                <p>Customize colors and dark/light mode</p>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <h3>Real-time</h3>
                <p>All changes happen instantly</p>
              </div>
            </div>
            <p className="tech-stack">
              <strong>Built with:</strong> React 18 • JavaScript • CSS3 • Deployed on Netlify
            </p>
          </div>
        )}

        <footer>
          <p>© 2026 Interactive React App • Made with ❤️</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
