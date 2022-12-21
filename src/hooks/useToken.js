import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../assets/api/api';

const useToken = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { url, body } = api.token;

      try {
        const res = await axios.post(url, body, {
          headers: {
            'X-API-KEY': process.env.REACT_APP_X_API_KEY,
          },
        });

        if (res.status === 200 && !token) {
          localStorage.setItem('token', res.data.access_token);
          setToken(res.data.access_token);
        }
      } catch (e) {
        console.log(e);
        setToken(null);
        setError(e);
      }
    };
    !token && fetchData();
  }, [token]);

  return { token, error };
};

export default useToken;
