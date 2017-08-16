var total = 0;
var lastNum = 0;
var fib = 0;
var currentNum = 1;

while(currentNum <= 4000000){
  currentNum = lastNum + currentNum;
  fib = currentNum;
  if(currentNum % 2 === 0){
    total += currentNum;
  }
  lastNum = currentNum;
  console.log(currentNum);
}

console.log(total);
