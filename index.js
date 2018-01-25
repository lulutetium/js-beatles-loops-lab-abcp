function theBeatlesPlay(musicians,instruments){
  var newArr = [];
  
  for (var i=0;i<musicians.length;i++){
    newArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(arr){
  var newArr = [];
  var l = arr.length;
  
  while(l>0){
    console.log(l);
    newArr.unshift(arr[l-1]+"!!!");
    l--;
  }
  return newArr;
}

function iLoveTheBeatles(n){
  var newArr = [];
  
  do{
    newArr.push("I love the Beatles!");
    n++;
    console.log(n);
  }while(n<15);
  
  return newArr;
}