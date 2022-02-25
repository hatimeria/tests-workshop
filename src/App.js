import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('stranger');
  return (
    <main>
      <h1>Hello {name}!</h1>
      <form>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" onChange={e => setName(e.target.value)} />
      </form>
    </main>
  );
}

export default App;
