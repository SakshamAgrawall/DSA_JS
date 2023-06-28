let data = [1,2,3,4,2,6,4,9,5]
let temp;
function ReverseArray(data,start,end)
{
    console.log(data)
  if(start<=end){
    temp = data[start];
       data[start]=data[end]
       data[end]=temp;
       ReverseArray(data,start+1,end-1)
  }
}


ReverseArray(data,0,data.length-1)