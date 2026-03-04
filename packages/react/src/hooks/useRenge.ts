import { useContext } from 'react';
import { RengeContext } from '../context';
import type { RengeContextValue } from '../context';

export function useRenge(): RengeContextValue {
  const context = useContext(RengeContext);
  if (!context) {
    throw new Error('useRenge must be used within a RengeProvider');
  }
  return context;
}
