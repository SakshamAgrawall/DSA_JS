function Sorting(data){
  for(let i=0;i<data.length-1;i++){
      for(let j=i+1;j<data.length;j++){
        if(data[i]>data[j]){
          let temp=data[i];
          data[i]=data[j];
          data[j]=temp;
        }
      }
  }
  return data;
}
console.log(Sorting([3,4,5,6,7,8,7,10,3,21,1,2,3]));