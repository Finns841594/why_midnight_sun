import { Leva } from 'leva';
import DatePicker from './DatePicker';
import LatitudePicker from './LatitudePicker';

// add world map to latitude slider
// add buttons to click four special days

const ControlPanel = () => {
  return (
    <div className="md:w-1/4 flex md:flex-col gap-8">
      <LatitudePicker />
      <DatePicker />
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
