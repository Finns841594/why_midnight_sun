import { Leva } from 'leva';
import DatePicker from './DatePicker';
import LatitudePicker from './LatitudePicker';
import { Divider } from '@nextui-org/react';
import TimePicker from './TimePicker';

// some smooth animation when the values changed by clicking buttons

const ControlPanel = () => {
  return (
    <div className="w-[350px] flex flex-col gap-4 pr-2">
      <p className="text-lg font-bold -mb-2">Select a latitude</p>
      <LatitudePicker />
      <Divider className="mt-2 -mb-2" />
      <p className="text-lg font-bold -mb-2">Select a date</p>
      <DatePicker />
      <Divider className="mt-2 -mb-2" />
      <p className="text-lg font-bold -mb-2">Select a time</p>
      <TimePicker />
      <Leva
        fill // default = false,  true makes the pane fill the parent dom node it's rendered in
        hidden // default = false, when true the GUI is hidden, leave it here for easy debugging in the furture development
        collapsed
      />
    </div>
  );
};

export default ControlPanel;
