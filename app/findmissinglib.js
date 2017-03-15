function iterator(array1, array2){
  var odd = -1;
  for(var i = 0; i < array2.length; i++){
    var index = array2.indexOf(array1[i]);
    if(index == -1 || index == 'undefined')
        odd = array1[i];
    else if(odd === -1 || i === array1.length - 1)
      odd = array1[array1.length - 1];
  }
  return odd;
}

function findMissing(arr1, arr2){
  return arr1.length === arr2.length ?
    0 : (arr1.length > arr2.length) ? iterator(arr1, arr2)
    : iterator(arr2, arr1);
}

module.exports = findMissing;