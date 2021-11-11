// 两数平方合
var judgeSquareSum = function(c) {
  if(c<=2){return true}
  let a = 0
  let b = c-1;
  let flag = false
  while(a<=b){
      let sum = a*a + b*b 
      console.log(sum)
      if(sum === c){
        flag = true
      }else if(sum < c ){
          a++;
      }else{
          b--;
      }
  }
  return flag
};
console.log(judgeSquareSum(1)
)