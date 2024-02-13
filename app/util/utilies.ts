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
