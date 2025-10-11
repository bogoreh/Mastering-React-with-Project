import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'dml58n60v8YH9sSUpcHoKef3LOZfQmiG'; // Get from https://developers.giphy.com/
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const useGiphy = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchGifs = async (query = 'trending') => {
    setLoading(true);
    setError(null);
    
    try {
      const endpoint = query === 'trending' ? 'trending' : 'search';
      const response = await axios.get(`${BASE_URL}/${endpoint}`, {
        params: {
          api_key: API_KEY,
          q: query === 'trending' ? undefined : query,
          limit: 25,
          rating: 'g'
        }
      });
      
      setGifs(response.data.data);
    } catch (err) {
      setError('Failed to fetch GIFs. Please try again.');
      console.error('Error fetching GIFs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGifs('trending');
  }, []);

  return {
    gifs,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    fetchGifs
  };
};