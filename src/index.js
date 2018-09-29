module.exports = function check(str, bracketsConfig) {
 
  let stack=[];
  let lengthStr=str.length;
  let lengthBrConfig=bracketsConfig.length;
 
  for (let i=0; i<lengthStr; i++){
    for (let j = 0; j < lengthBrConfig; j++){ 
      if (bracketsConfig[j][0]!=bracketsConfig[j][1]){ 
        if (str[i]===bracketsConfig[j][0]){
        stack.push(str[i]);
        } else  if ((str[i]===bracketsConfig[j][1]) && (stack.length!=0) && (bracketsConfig[j][0]===stack[stack.length-1])){
        stack.pop();
          }
        }
        else {
       //if (bracketsConfig[j][0]==bracketsConfig[j][1]){  
          if ((str[i]===bracketsConfig[j][0]) &&(bracketsConfig[j][0]!=stack[stack.length-1])){
          stack.push(str[i]);
        } else  if ((str[i]===bracketsConfig[j][1]) && (stack.length!=0) && (bracketsConfig[j][0]===stack[stack.length-1])){
          stack.pop();
      }
    }
  }
}   
     return (stack.length===0);
} 
