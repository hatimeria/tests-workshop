import { useState } from 'react';
import axios from 'axios';

const Nameday = ({ name }) => {
  const [nameDays, setNameDays] = useState([]);
  const [error, setError] = useState(false);
  const getNameday = async () => {
    try {
      const response = await axios.get(`https://nameday.abalin.net/api/V1/getname`, {
        params: {
          name,
          country: 'pl'
        }
      });
      setNameDays(response.data[0])
      setError(false);
    } catch(e) {
      console.error(e);
      setError(true);
    }
  }

  return (
    <div>
      {name && <button onClick={() => getNameday()}>See your namedays</button>}
      {error && <p>Sth went wrong, try again</p>}
      {(nameDays && nameDays.length) ? (
        <div>
          <h2>Your namedays are:</h2>
          <ul>
            {nameDays.map(el => (
              <li key={`${el.day}-${el.month}`}>
                Day: {el.day}, Month: {el.month}
              </li>
            ))}
          </ul>
        </div>
      ) : ''}
    </div>
  )
}

export default Nameday;