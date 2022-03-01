import { useState } from 'react';
import { validateText } from './helpers/validation';
import Nameday from './components/Nameday';

function App() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const handleChange = value => {
    const isValid = validateText(value);
    setName(isValid ? value : '');
    setError(isValid ? '' : 'You cannot be named like this!');
  }
  return (
    <main>
      <h1>Hello {name || 'stranger'}!</h1>
      {error && <p role="alert">{error}</p>}
      <form>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" onChange={e => handleChange(e.target.value)} />
      </form>
      <Nameday name={name} />
    </main>
  );
}

export default App;
