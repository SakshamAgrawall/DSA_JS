//Check given strings are anagram or not

function CheckAnagram(str1,str2){
     let objStr1={}
  if(str1.length!==str2.length){
    return false;
  }
  for(ch of str1){
    objStr1[ch]=(objStr1[ch]||0)+1;
  }
  for(ch of str2){
    if(!objStr1[ch]){
        return false;
    }
    objStr1[ch]--;
  }
  return true;
    
}


console.log(CheckAnagram('hellobc','elloha'))
