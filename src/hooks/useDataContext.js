import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export function useDataContext() {
  const { data } = useContext(DataContext);

  return data;
}
