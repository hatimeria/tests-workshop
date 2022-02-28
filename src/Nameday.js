import { useState } from 'react';

const Nameday = ({ name }) => {
  const [nameDay, setNameDay] = useState(null);
  const [error, setError] = useState(false);
  const getNameday = async () => {
    try {
      const data = await fetch(`https://nameday.abalin.net/api/V1/getname?name=${name}&country=pl`);
      const nameday = await data.json();
      if (nameday.error) {
        setError(true);
      } else {
        setNameDay(nameday[0])
        setError(false);
      }
    } catch(e) {
      console.error(e);
      setError(true);
    }
  }

  return (
    <div>
      <button onClick={() => getNameday()}>See your namedays</button>
      {error && <p>Sth went wrong, try again</p>}
      {nameDay && (
        <div>
          <h2>Your namedays are:</h2>
          <ul>
            {nameDay.map(el => (
              <li>Day: {el.day}, Month: {el.month}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Nameday;