let data = [];
let currentSize=data.length;
let max=5;

function push(x){
    if(currentSize<max){

        data[currentSize]=x;
        ++currentSize;
    }else{
        console.log('max ecceed')
    }
}

function pop(){
    if(currentSize>0){
       --currentSize;
       data.length=currentSize;
    }else{
        console.log('max excceed')
    }
}
push(20);
push(21);
push(22);
push(23);
push(24);
push(24);

console.log(data)