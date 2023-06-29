let data = [];
let currentSize=data.length;

function push(x){
    data[currentSize]=x;
    ++currentSize;
}
function pop(){
    let removedItem = data[currentSize-1];
    --currentSize;
    data.length=currentSize;
    return removedItem;
}

function reverseStr(s){
        s=s.split('');
        for(i=0;i<s.length;i++){
            push(s[i])
        }
        for(i=0;i<s.length;i++){
              s[i]=pop();
        }
        return s.join('')
}
console.log(reverseStr('sakshsm'))