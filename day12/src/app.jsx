import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Add a new todo item
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  // Toggle todo completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo List</h1>

      <form onSubmit={addTodo} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>
          Add
        </button>
      </form>

      <ul style={styles.list}>
        {todos.length === 0 ? (
          <p style={styles.emptyText}>No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
              <span
                onClick={() => toggleComplete(todo.id)}
                style={{
                  ...styles.todoText,
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888' : '#fff',
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

// Basic inline styles for a clean interface
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#1a1a2e',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #333',
    fontSize: '16px',
    outline: 'none',
  },
  addButton: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4e54c8',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#16213e',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  todoText: {
    cursor: 'pointer',
    textAlign: 'left',
    wordBreak: 'break-word',
  },
  deleteButton: {
    backgroundColor: '#e94560',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  emptyText: {
    color: '#888',
  },
};

export default App;