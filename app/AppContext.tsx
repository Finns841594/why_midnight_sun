import { Dispatch, SetStateAction, createContext } from 'react';
import { Vector3 } from 'three';

interface AppContextProp {
  sunPositions: Vector3;
  setSunPositions: Dispatch<SetStateAction<Vector3>>;
  isSettingSunPosition: boolean;
  setIsSettingSunPosition: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProp>({
  sunPositions: new Vector3(0, 0, 0),
  setSunPositions: () => {},
  isSettingSunPosition: false,
  setIsSettingSunPosition: () => {},
});
