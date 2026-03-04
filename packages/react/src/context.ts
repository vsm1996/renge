import { createContext } from 'react';
import type { RengeTheme } from '@renge/tokens';

export interface RengeContextValue {
  theme: RengeTheme;
  profile: string;
}

export const RengeContext = createContext<RengeContextValue | null>(null);
