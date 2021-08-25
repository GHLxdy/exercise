function remove(arr, item) {
  return arr.filter(ele=>ele!=item);
}

function remove(arr, item) {
  var arr1 = [];
  for (var i = 0;i < arr.length;i++) {
    if (arr[i] != item) {
      arr1[arr1.length] = arr[i];
    }
  }
  return arr1;
}

