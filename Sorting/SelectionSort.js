let data=[21,11,13,54,32,65,97,76]

function slectionSort(data){
   for(let i=0;i<data.length;i++){
   let minId=i
   for(let j=i+1;j<data.length;j++){
      if(data[j]<data[minId]){
        minId =j;
      }
   }
   let temp=data[i];
     data[i]=data[minId];
     data[minId]=temp;
}

return data;
}

console.log(slectionSort(data))

// desending order sort

// let data = [21, 11, 13, 54, 32, 65, 97, 76];

// function slectionSort(data) {
//   for (let i = 0; i < data.length; i++) {
//     let maxId = i;
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] > data[maxId]) {
//         maxId = j;
//       }
//     }
//     let temp = data[i];
//     data[i] = data[maxId];
//     data[maxId] = temp;
//   }

//   return data;
// }

// console.log(slectionSort(data));
