// ReturnNumbersArray
ex: var newArray= numbersOnly([1, "apple", -3, "orange", 0.5]); //return 1, -3, 0.5
--------------------

function returnnumbers(arr){
  var secondary = [];
  for(var i=0; i < arr.length; i++){
    if(typeof(arr[i]) === number){
  secondary.push(arr[i]);
}
}
console.log(secondary);
return secondary;
}
function returnnumbers([10, "stew", 11, "broccoli"]);
