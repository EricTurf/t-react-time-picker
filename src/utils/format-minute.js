export default minute => {
  const roundedMinute = Math.ceil(minute / 5) * 5;
  if (roundedMinute < 10) return `0${roundedMinute}`;

  if (roundedMinute === 60) return '59';

  return `${roundedMinute}`;
};
