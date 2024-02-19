import { Slider } from '@nextui-org/react';
import React, { useContext, useEffect, useState } from 'react';
import {
  calculateTimeFromPosition,
  formatTimeFromNumber,
  getPositionFromTime,
} from '../util/utilies';
import { AppContext } from '../AppContext';
import { Vector3 } from 'three';

const totalMins = 24 * 60;

const TimePicker = () => {
  const [timeInNumber, setTimeInNumber] = useState(0);
  const { sunPositions, setSunPositions, setIsSettingSunPosition } =
    useContext(AppContext);

  useEffect(() => {
    setTimeInNumber(calculateTimeFromPosition(sunPositions.x, sunPositions.y));
  }, [sunPositions]);

  const handleChangeTime = (value: number | number[]) => {
    setIsSettingSunPosition(true);
    let newValue = Array.isArray(value) ? value[0] : value;
    setTimeInNumber(newValue);
    const { x, y } = getPositionFromTime(newValue);
    setSunPositions(new Vector3(x, y, 0));
  };

  const handleChangeTimeEnd = () => {
    setIsSettingSunPosition(false);
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <Slider
        label="Time"
        color="foreground"
        step={1}
        maxValue={totalMins - 0.01}
        minValue={0.001}
        value={timeInNumber}
        onChange={handleChangeTime}
        onChangeEnd={handleChangeTimeEnd}
        className="max-w-md"
        renderValue={() => <p>{formatTimeFromNumber(timeInNumber)}</p>}
      />
    </div>
  );
};

export default TimePicker;
