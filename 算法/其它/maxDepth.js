// 1614. 括号的最大嵌套深度
var maxDepth = function(s) {
    let cnt = 0,max = 0

   for(let i = 0; i < s.length; i++){
       if(s[i] === '('){
           cnt++;
           max = cnt > max ? cnt : max
       }else if(s[i] === ')'){
           cnt--;
       }
   }
   return max
};