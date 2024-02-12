import { Slider } from '@nextui-org/react';
import { useControls } from 'leva';
import { useState } from 'react';
import {
  distanceOffsetFromEquaterByDay,
  fromDegreeToRadian,
} from '../util/utilies';

const daysMark = [
  {
    value: 79, // 20 March
    label: 'spring equinox',
  },
  {
    value: 171, // 20 June
    label: 'summer soltstice',
  },
  {
    value: 242, // 20 June
    label: 'autumnal soltstice',
  },
  {
    value: 355, // 21 Dec
    label: 'winter soltstice',
  },
];

const ControlPanel = () => {
  const [dateInNumber, setDateInNumber] = useState<number>(79);
  const [{ rotateX, offsetFromEquater }, set] = useControls(() => ({
    rotateX: 0,
    offsetFromEquater: 0,
  }));
  3;
  const handleChangeDate = (value: number | number[]) => {
    let newValue = Array.isArray(value) ? value[0] : value;
    setDateInNumber(newValue);
    const caculatedNewValue = distanceOffsetFromEquaterByDay(newValue);
    set({ offsetFromEquater: caculatedNewValue });
  };
  const handleChangeLatitude = (value: number | number[]) => {
    let newValue = Array.isArray(value) ? value[0] : value;
    set({ rotateX: newValue });
  };
  return (
    <div className="md:w-3/4 -mt-20 mx-auto flex md:flex-row gap-8 md:justify-between">
      <Slider
        label="Days"
        color="foreground"
        marks={daysMark}
        step={1}
        maxValue={365}
        minValue={1}
        value={dateInNumber}
        onChange={handleChangeDate}
        className="max-w-md"
        showTooltip
        tooltipProps={{
          content:
            daysMark.find(item => item.value === dateInNumber)?.label ||
            dateInNumber,
        }}
      />
      <Slider
        label="Latitude"
        color="foreground"
        step={0.1}
        maxValue={90}
        minValue={0}
        value={rotateX}
        className="max-w-md"
        onChange={handleChangeLatitude}
      />
    </div>
  );
};

export default ControlPanel;
