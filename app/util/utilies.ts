export const caculateMovingRadiusByOffset = (
  movingRadius: number,
  offsetFromEquater: number
) => {
  return Math.sqrt(movingRadius ** 2 - offsetFromEquater ** 2);
};

export const fromDegreeToRadian = (degree: number) => {
  return (degree * Math.PI) / 180;
};

export const distanceOffsetFromEquaterByDegree = (
  degree: number,
  radius = 10
) => {
  const radiance = fromDegreeToRadian(degree);
  return radius * Math.sin(radiance);
};

export const distanceOffsetFromEquaterByDay = (
  day: number,
  radius = 10,
  equinoxDay = 79,
  tropicLatitud = 23.5
) => {
  const distance =
    Math.sin(((day - equinoxDay) * 2 * Math.PI) / 365) *
    Math.sin(fromDegreeToRadian(tropicLatitud)) *
    radius;
  return distance;
};

export const dayOfYearToDate = (dayOfYear: number): string => {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  if (dayOfYear < 1 || dayOfYear > 365) {
    throw new Error('Day of year must be between 1 and 365.');
  }

  let monthIndex = 0;
  let daysPassed = daysInMonth[monthIndex];

  // Find the month index
  while (dayOfYear > daysPassed) {
    monthIndex++;
    daysPassed += daysInMonth[monthIndex];
  }

  // Calculate the day of the month
  const dayOfMonth = dayOfYear - (daysPassed - daysInMonth[monthIndex]);

  // Format the date
  const formattedDate = `${monthNames[monthIndex]} ${dayOfMonth
    .toString()
    .padStart(2, '0')}`;

  return formattedDate;
};

export const formatTimeFromNumber = (input: number) => {
  // Ensure the input is within the expected range
  if (input < 0 || input >= 24 * 60) {
    throw new Error('Input must be between 0 and 1440 (exclusive).');
  }

  // Calculate hours and minutes
  const hours = Math.floor(input / 60);
  const minutes = input % 60;

  // Format hours and minutes to be two digits and concatenate them
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = Math.floor(minutes).toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
};

export const calculateTimeFromPosition = (x: number, y: number, r = 10) => {
  // Step 1: Calculate the angle in radians
  const theta = Math.atan2(y, x);

  // Step 2: Convert radians to hours, then to minutes
  const hoursFromRadians = theta * (12 / Math.PI);

  // Step 3: Adjust the time by adding 6 hours (360 minutes) to align with the default position
  let timeInMinutes = hoursFromRadians * 60 + 360;

  // Step 4: Adjust time to be within a 24-hour range
  if (timeInMinutes >= 1440) {
    timeInMinutes -= 1440; // Subtract 24 hours in minutes if the time is >= 24 hours
  } else if (timeInMinutes < 0) {
    timeInMinutes += 1440; // Add 24 hours in minutes if the time is negative
  }

  return timeInMinutes;
};

export const getPositionFromTime = (minutes: number, r = 10) => {
  // Step 1: Adjust the time to align with the starting point at 6:00 AM
  let adjustedMinutes = minutes - 360;

  // Ensure the time is within a 24-hour range
  if (adjustedMinutes >= 1440) {
    adjustedMinutes -= 1440;
  } else if (adjustedMinutes < 0) {
    adjustedMinutes += 1440;
  }

  // Step 2: Convert the adjusted time to radians
  const hours = adjustedMinutes / 60;
  const theta = hours * (Math.PI / 12);

  // Step 3: Calculate the coordinates using the sine and cosine functions
  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);

  return { x, y };
};
