import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('stranger');
  const [error, setError] = useState('');
  const handleChange = value => {
    !/[^a-zA-Z]/.test(value) ? setName(value) : setError('You cannot be named like this!');
  }
  return (
    <main>
      <h1>Hello {name}!</h1>
      {error && <p role="alert"></p>}
      <form>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" onChange={e => handleChange(e.target.value)} />
      </form>
    </main>
  );
}

export default App;
