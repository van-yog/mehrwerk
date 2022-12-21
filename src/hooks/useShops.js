import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../assets/api/api';

const useShops = () => {
  const [shops, setShops] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { url } = api.shops;

      try {
        const res = await axios.get(url, {
          headers: {
            'X-API-KEY': process.env.REACT_APP_X_API_KEY,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setShops(res.data.items);
        console.log('shops:', res.data.items);
      } catch (e) {
        console.log(e);
        setShops(null);
        setError(e);
      }
    };
    fetchData();
  }, []);
  return { shops, error };
};

export default useShops;
