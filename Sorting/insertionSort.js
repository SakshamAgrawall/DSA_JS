let data=[21,32,43,23,54,2,31];

function insertionSort(data){
  let i,current,j;
  for(i=1;i<data.length;i++){
    current=data[i];
    j=i-1;
    while(j>=0&&data[j]>current){
        data[j+1]=data[j]
        j--
    }
    data[j+1]=current;
  }
  return data;
}
// insertionSort(data)

console.log(insertionSort(data))