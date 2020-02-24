let arrProblem = (arr) => {
    
  for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
          if (arr[j] > arr[i]) {
              let swap = arr[i];
              arr[i] = arr[j];
              arr[j] = swap;
          }
      }
  }

  return arr;
}

exports.min = function min (array) {
  if (array) {
    if (array.length === 0) {
      return 0;        
    }

    if (array === []) {
      return 0;        
    }
    arrProblem(array);
    return array[0];
  }

  return 0;
}

exports.max = function max (array) {
  if (array) {
    if (array.length === 0) {
      return 0;        
    }
    if (array === []) {
      return 0;        
    }
    arrProblem(array);
    return array[array.length - 1];
  }

  return 0;
}

exports.avg = function avg (array) {
  if (array) {
    let sum = 0;
  if (array.length === 0) {
    return sum;        
  }
  for (let i = 0; i < array.length;  i +=1) {
    sum += array[i];
  }
  return sum / array.length;
  }
  return 0;
}
