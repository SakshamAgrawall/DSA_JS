let data=[20,30,40,50,60];
let start=0;
let find=60;
let end=data.length-1;
let position=undefined;
function RecursiveBinarySearch(data,start,end){
    let mid=Math.floor((start+end)/2);
    if(data[mid]===find){
        position=mid;
        return true;
    }
    else if(data[mid]>find){
        RecursiveBinarySearch(data,start,mid-1)
    }else{
        RecursiveBinarySearch(data,mid+1,end);
    }
}



RecursiveBinarySearch(data,start,end);
console.log(position);