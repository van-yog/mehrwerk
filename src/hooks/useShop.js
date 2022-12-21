import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { api } from '../assets/api/api';

const useShop = () => {
  const [shop, setShop] = useState();
  const [error, setError] = useState();
  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    const fetchData = async () => {
      const { url } = api.shops;

      const shopId = location.pathname.slice(7);
      const shopUrl = `${url}/${shopId}`;
      console.log('shopId', shopId);
      try {
        const res = await axios.get(shopUrl, {
          headers: {
            'X-API-KEY': process.env.REACT_APP_X_API_KEY,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setShop(res.data);
        console.log('shops:', res.data);
      } catch (e) {
        console.log(e);
        setShop(null);
        setError(e);
      }
    };
    fetchData();
  }, [location.pathname]);
  return { shop, error };
};

export default useShop;
