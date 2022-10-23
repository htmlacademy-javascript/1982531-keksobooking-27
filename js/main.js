function getRndInteger(min, max) {
    const getRndInteger = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (min < 0 || max <= min || typeof max !== 'number') {
        return NaN
    }
    return Math.floor(Math.random() * (max - min + 1) ) + min; //html5css.ru
}
console.log(getRndInteger(6, 9));

function getRndFlt(min, max) {
    const getRndFlt = Math.random() * (max - min) + min;
    if (min < 0 || typeof max !== 'number' || typeof min !== 'number') {
        return NaN 
        if (max < min) {
            return min = min+max;
                   max = min-max;
                   min = min-max;
       }
    } 
    return Math.random() * (max - min) + min;
  }
  console.log(getRndFlt(-9, 6).toFixed(3));

  