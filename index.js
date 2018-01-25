function theBeatlesPlay(musicians,instruments){
  var newArr = [];
  
  for (var i=0;i<musicians.length;i++){
    newArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArr;
}

function iLoveTheBeatles(n){
  var newArr = [];
  var counter = false;
  
  do{
    newArr.push("I love the Beatles!");
  }while(!!counter && n<15){
    for(var i = n; i > 1; i--){
      n--;
      newArr.push("I love the Beatles!");
    }
  }
  return newArr;
}