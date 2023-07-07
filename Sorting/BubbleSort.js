let data=[32,43,42,21,32];

function BubbleSort(data){
   let i,j;
   for(i=0;i<data.length;i++){
    for(j=0;j<data.length-i-1;j++){
        if(data[j]>data[j+1]){
            let temp=data[j];
            data[j]=data[j+1];
            data[j+1]=temp;
        }
    }
   }
   return data;
}

console.log(BubbleSort(data));