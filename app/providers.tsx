'use client';

import { NextUIProvider } from '@nextui-org/react';
import { AppContext } from './AppContext';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [dateInNumber, setDateInNumber] = useState<number>(0);
  return (
    <NextUIProvider>
      <AppContext.Provider value={{ dateInNumber, setDateInNumber }}>
        {children}
      </AppContext.Provider>
    </NextUIProvider>
  );
}
