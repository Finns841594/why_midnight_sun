import { Button, Slider } from '@nextui-org/react';
import { useControls } from 'leva';
import { useState } from 'react';
import { distanceOffsetFromEquaterByDay } from '../util/utilies';

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

const DatePicker = () => {
  const [dateInNumber, setDateInNumber] = useState<number>(79);
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
    <div className="w-full flex-row">
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
      <div>
        {daysMark.map(item => (
          <Button
            key={item.label}
            size="sm"
            onClick={e => handleChangeDate(79)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
