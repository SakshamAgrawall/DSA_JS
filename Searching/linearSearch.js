let data=[21,32,3,43,3,50,21,67,85,32,45];

function linearSearch(value){
    for(let i=0;i<=data.length-1;i++){
        if(data[i]==value){
         return i;
    }
    }
    return false;
}


console.log(linearSearch(50))