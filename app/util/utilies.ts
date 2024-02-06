export const caculateMovingRadius = (
  movingRadius: number,
  offsetFromEquater: number
) => {
  return Math.sqrt(movingRadius ** 2 - offsetFromEquater ** 2);
};
