// Find Even Values from Array, Make Double of Every element and Find Array length manually

let data=[1,2,3,4,5,6,7,8,9,10];
let count=0;
let EvenArray=[];

function evenOp(data){
   for(let i=0;i<data.length;i++){
     if(data[i]%2==0){
        count++;
        EvenArray.push(data[i]*2)
     }
   }
}

function display(){
    console.log(count);
    console.log(EvenArray);
}

evenOp(data);
display();
