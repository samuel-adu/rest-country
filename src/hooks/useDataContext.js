import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export function useDataContext() {
  const context = useContext(DataContext);

  return context;
}
