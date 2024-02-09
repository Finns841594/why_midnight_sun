import { Slider } from '@nextui-org/react';

const daysMark = [
  {
    value: 20,
    label: '20%',
  },
  {
    value: 170,
    label: 'summer soltstice',
  },
  {
    value: 330,
    label: 'winter soltstice',
  },
];

const ControlPanel = () => {
  return (
    <div className="md:w-3/4 -mt-20 mx-auto flex md:flex-row gap-8 md:justify-between">
      <Slider
        label="Days"
        color="foreground"
        marks={daysMark}
        step={1}
        maxValue={365}
        minValue={0}
        defaultValue={0}
        className="max-w-md"
      />
      <Slider
        label="Latitude"
        color="foreground"
        step={0.1}
        maxValue={90}
        minValue={0}
        defaultValue={0}
        className="max-w-md"
      />
    </div>
  );
};

export default ControlPanel;
