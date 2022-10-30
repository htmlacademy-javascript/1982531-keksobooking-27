const MIN_RANDOM_NUMBER = 6;
const MAX_RANDOM_NUMBER = 9;
function getRandomInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max <= min || typeof max !== 'number' || typeof min !== 'number') {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInclusive(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

function getRandomFloat(min, max) {
  const random = Math.random() * (max - min) + min;
  if (min >= 0 && max >= min) {
    return random.toFixed(3);
  }
  return NaN;
}
getRandomFloat(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
