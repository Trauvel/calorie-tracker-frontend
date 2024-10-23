import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Запрос к API
    axios.get('http://localhost:8000/api/data')
      .then(response => {
        setMessage(response.data.message);
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Ошибка при запросе:', error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
