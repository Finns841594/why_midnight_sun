import { Dispatch, SetStateAction, createContext } from 'react';

interface DateInfoContextProp {
  dateInNumber: number;
  setDateInNumber: Dispatch<SetStateAction<number>>;
}

export const AppContext = createContext<DateInfoContextProp>({
  dateInNumber: 0,
  setDateInNumber: () => {},
});
