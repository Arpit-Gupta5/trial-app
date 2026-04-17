import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('counter');
  const [color, setColor] = useState('#667eea');
  const [backendData, setBackendData] = useState(null);
  const [backendItems, setBackendItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Backend API URL
  const API_URL = process.env.REACT_APP_API_URL || 'https://trial-app-production.up.railway.app';

  // Log API URL on component load
  useEffect(() => {
    console.log('🔗 API URL:', API_URL);
    console.log('🔗 Environment REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
  }, [API_URL]);

  // Fetch backend data
  const fetchBackendData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/data`);
      if (!response.ok) throw new Error(`Failed to fetch data: ${response.status}`);
      const data = await response.json();
      console.log('Backend data response:', data);
      setBackendData(data);
    } catch (err) {
      setError(err.message);
      console.error('Backend error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch items from backend
  const fetchBackendItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/items`);
      if (!response.ok) throw new Error(`Failed to fetch items: ${response.status}`);
      const data = await response.json();
      console.log('Backend items response:', data);
      // Handle both wrapped and direct arrays
      const items = data.items || data || [];
      setBackendItems(Array.isArray(items) ? items : []);
    } catch (err) {
      setError(err.message);
      console.error('Backend error:', err);
    } finally {
      setLoading(false);
    }
  };

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
            className={`tab-btn ${activeTab === 'api' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('api');
              fetchBackendItems();
            }}
          >
            🔗 Backend API
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

        {activeTab === 'api' && (
          <div className="card">
            <h2>🔗 Backend API Integration</h2>
            
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.15)', 
              padding: '15px', 
              borderRadius: '8px',
              marginBottom: '20px',
              border: '2px solid rgba(255,255,255,0.3)'
            }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#ffeb3b' }}>⚙️ Configuration</h4>
              <p style={{ margin: '5px 0', textAlign: 'left' }}>
                <strong>API URL:</strong> <code style={{ color: '#90ee90' }}>{API_URL}</code>
              </p>
              <p style={{ margin: '5px 0', textAlign: 'left', fontSize: '0.9rem', opacity: 0.8 }}>
                <strong>env file value:</strong> <code>{process.env.REACT_APP_API_URL || '(not set)'}</code>
              </p>
            </div>
            
            {error && (
              <div className="error-message">
                ❌ Error: {error}
              </div>
            )}

            <div className="button-group">
              <button onClick={() => {
                console.log('📥 Fetching data from:', `${API_URL}/api/data`);
                fetchBackendData();
              }} className="btn btn-primary" disabled={loading}>
                {loading ? '⏳ Loading...' : '📥 Fetch Data'}
              </button>
              <button onClick={() => {
                console.log('📋 Fetching items from:', `${API_URL}/api/items`);
                fetchBackendItems();
              }} className="btn btn-primary" disabled={loading}>
                {loading ? '⏳ Loading...' : '📋 Fetch Items'}
              </button>
              <button onClick={() => {
                console.log('Testing /api/hello endpoint:', `${API_URL}/api/hello`);
                fetch(`${API_URL}/api/hello`)
                  .then(r => r.json())
                  .then(d => console.log('Hello response:', d))
                  .catch(e => console.error('Hello error:', e));
              }} className="btn btn-secondary">
                🧪 Test Connection
              </button>
            </div>

            {backendData && (
              <div className="api-response">
                <h3>📊 Backend Data Received</h3>
                <div className="response-box">
                  <p><strong>Title:</strong> {backendData.title}</p>
                  <p><strong>Description:</strong> {backendData.description}</p>
                  <p><strong>ID:</strong> {backendData.id}</p>
                  <p><strong>Timestamp:</strong> {new Date(backendData.timestamp).toLocaleString()}</p>
                </div>
                <details>
                  <summary>View Raw JSON</summary>
                  <pre>{JSON.stringify(backendData, null, 2)}</pre>
                </details>
              </div>
            )}

            {backendItems.length > 0 && (
              <div className="api-response">
                <h3>📋 Items List ({backendItems.length} items)</h3>
                <div className="items-list">
                  {backendItems.map((item) => (
                    <div key={item.id} className="item-card">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <small>ID: {item.id}</small>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {backendItems.length === 0 && !loading && (
              <div className="api-response">
                <p style={{ textAlign: 'center', color: '#667eea', marginTop: '20px' }}>
                  Click "📋 Fetch Items" to load items from the backend
                </p>
              </div>
            )}

            <div className="connection-status">
              <p className="info-box" style={{ backgroundColor: '#e8f4f8' }}>
                ✅ Frontend successfully connected to Backend at {API_URL}
              </p>
            </div>
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
