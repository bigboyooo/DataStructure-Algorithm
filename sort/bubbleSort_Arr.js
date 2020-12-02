function BubbleSort(arr){
  var i, j, temp;
  for(i = 0; i < arr.length - 1; i++){
    for(j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

var arr=[10,7,9,11,22,33,4,2,0,1000];
BubbleSort(arr);
console.log(arr);