// prifix sum of array

let data=[1,2,3,4,5,6];

// function prefixSum(data){
//     let prefixArray=[];
//     for(i in data){
//         console.log(i)
//         if(i==0){
//          prefixArray[i]=data[i];
         
//         }else{
//         prefixArray[i]=prefixArray[i-1]+data[i]
//     }
// }
//     return prefixArray;
// }
// console.log(prefixSum(data))


function prefixArray(data){
    let pre=[];
    // let pre=new Array(data.length);
    for(i in data){
        let sum=0
        for(j=0;j<=i;j++){
          sum=sum+data[j];
        }
        pre[i]=sum;
    }
    return pre;
}

console.log(prefixArray(data))
