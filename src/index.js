
exports.min = function min (array) {
    if(array == 0 || array == undefined){
        return 0;
    }
    let newArr = array.sort(function(a,b){ 
        return a - b;
      });
    return newArr[0];
}

exports.max = function max (array) {
    if(array == 0 || array == undefined){
        return 0;
    }
    let newArr = array.sort(function(a,b){ 
        return b - a;
      });
    return newArr[0];
}

exports.avg = function avg (array) {
    if(array == 0 || array == undefined){
        return 0;
    }
    let sumNumber = array.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    });
    return sumNumber / array.length;
}
