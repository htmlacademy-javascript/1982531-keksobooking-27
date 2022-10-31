const MIN_RANDOM_NUMBER = 6;
const MAX_RANDOM_NUMBER = 9;
const COMMA_RANDOM_NUMBER = 3;
function getRandomInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max <= min || typeof max !== 'number' || typeof min !== 'number') {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInclusive(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

function getRandomFloat(min, max, comma = 2) {
  const random = Math.random().toFixed(comma) * (max - min) + min;
  if (min >= 0 && max >= min) {
    return random;
  }
  return NaN;
}
getRandomFloat(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, COMMA_RANDOM_NUMBER);

