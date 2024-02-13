import { Leva } from 'leva';
import DatePicker from './DatePicker';
import LatitudePicker from './LatitudePicker';
import { Divider } from '@nextui-org/react';

// some smooth animation when the values changed by clicking buttons

const ControlPanel = () => {
  return (
    <div className="w-[350px] flex md:flex-col gap-4">
      <p className="text-lg font-bold">Select a latitude</p>
      <LatitudePicker />
      <Divider className="mt-4 -mb-2" />
      <p className="text-lg font-bold">Select a date</p>
      <DatePicker />
      <Divider className="mt-4 -mb-2" />
      <p className="text-lg font-bold">Select a time</p>
      <p>WIP</p>
      <Leva
        fill // default = false,  true makes the pane fill the parent dom node it's rendered in
        flat // default = false,  true removes border radius and shadow
        collapsed // default = false, when true the GUI is collpased
        hidden // default = false, when true the GUI is hidden
      />
    </div>
  );
};

export default ControlPanel;
