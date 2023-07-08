//merg two sorted array in sorted array

function merg(arr1,arr2){
    let arr3=[];
    let k=0;
    let i=0;
    let j=0;
    while(i!=arr1.length&&j!=arr2.length){
        if(arr1[i]>arr2[j]){
            arr3[k++]=arr2[j++]
        }else{
            arr3[k++]=arr1[i++]
        }
    }
    while(i!=arr1.length){
        arr3[k++]=arr1[i++]
    }
    while(j!=arr2.length){
        arr3[k++]=arr2[j++]
    }
    console.log(arr3);
}


merg([2,3,4,5,6],[-1,1,2,3]);