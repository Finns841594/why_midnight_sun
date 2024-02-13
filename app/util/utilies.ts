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
