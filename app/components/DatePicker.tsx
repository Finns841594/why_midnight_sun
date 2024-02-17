import { Button, Slider } from '@nextui-org/react';
import { useControls } from 'leva';
import { useState } from 'react';
import {
  dayOfYearToDate,
  distanceOffsetFromEquaterByDay,
} from '../util/utilies';

const daysMark = [
  {
    value: 79, // 20 March
    label: 'Spring Equinox',
  },
  {
    value: 171, // 20 June
    label: 'Summer Solstice',
  },
  {
    value: 265, // 22 Sep
    label: 'Autumnal Equinox',
  },
  {
    value: 355, // 21 Dec
    label: 'Winter Solstice',
  },
];

const DatePicker = () => {
  const [dateInNumber, setDateInNumber] = useState<number>(79); // Start from spring equinox
  const [{ offsetFromEquater, movingRadius }, set] = useControls(() => ({
    offsetFromEquater: 0,
    movingRadius: 10,
  }));

  const handleChangeDate = (value: number | number[]) => {
    let newValue = Array.isArray(value) ? value[0] : value;
    setDateInNumber(newValue);
    const caculatedNewValue = distanceOffsetFromEquaterByDay(
      newValue,
      movingRadius
    );
    set({ offsetFromEquater: caculatedNewValue });
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <Slider
        label="Date"
        color="foreground"
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
        renderValue={() => <p>{dayOfYearToDate(dateInNumber)}</p>}
      />
      <div className="grid grid-cols-2 gap-2">
        {daysMark.map(item => (
          <Button
            key={item.label}
            className="sm w-[150px]"
            variant="bordered"
            onClick={e => handleChangeDate(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
