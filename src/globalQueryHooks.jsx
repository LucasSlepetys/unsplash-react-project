import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { getContext } from './CONTROL/context';

const URL = 'https://api.unsplash.com/search/photos?client_id=';
const API_KEY = import.meta.env.VITE_REACT_APP_API_ACCESS_KEY;

export const useFetchImgs = () => {
  const { search } = getContext();

  console.log(API_KEY);
  const response = useQuery({
    queryKey: ['imgs', search],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=1&query=${search}`
      );
      return data;
    },
  });
  return response;
};
