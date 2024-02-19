'use client';
import { NextUIProvider } from '@nextui-org/react';
import { AppContext } from './AppContext';
import { useState } from 'react';
import { Vector3 } from 'three';

export function Providers({ children }: { children: React.ReactNode }) {
  const [sunPositions, setSunPositions] = useState<Vector3>(
    new Vector3(0, 0, 0)
  );
  const [isSettingSunPosition, setIsSettingSunPosition] = useState(false);
  return (
    <NextUIProvider>
      <AppContext.Provider
        value={{
          sunPositions,
          setSunPositions,
          isSettingSunPosition,
          setIsSettingSunPosition,
        }}
      >
        {children}
      </AppContext.Provider>
    </NextUIProvider>
  );
}
