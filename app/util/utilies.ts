export const caculateMovingRadiusByOffset = (
  movingRadius: number,
  offsetFromEquater: number
) => {
  return Math.sqrt(movingRadius ** 2 - offsetFromEquater ** 2);
};

export const fromDegreeToRadian = (degree: number) => {
  return (degree * Math.PI) / 180;
};
