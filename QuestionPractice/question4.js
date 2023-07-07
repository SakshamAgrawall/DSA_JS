//FInd maxImum occurance of character in a string

function MaximumChOccure(str){
    let obj={};
    let max="";
  for(let ch of str){
     obj[ch]=(obj[ch]||0)+1; 

     if(max=="" || obj[ch]>obj[max]){
        max=ch;
     }
  }
  return  max;
}


console.log(MaximumChOcure('heleelo'))