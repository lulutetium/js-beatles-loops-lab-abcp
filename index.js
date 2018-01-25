function theBeatlesPlay(musicians,instruments){
  var newArr = [];
  
  for (var i=0;i<musicians.length;i++){
    newArr.push(musicians[i] + ' plays ' + instruments[i]);
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