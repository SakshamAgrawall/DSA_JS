// check given string is pallindrom



function isPallindrom(str){
       let start=0;
       let end=str.length-1;
       while(end>start){
        if(str[start]!=str[end]){
        return false;
        }
        start++;
        end--;
       }
       return true;
}

console.log(isPallindrom('miima'));
console.log(isPallindrom('miim'));
console.log(isPallindrom('amiima'));