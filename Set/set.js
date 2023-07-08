let data= new Set(['anil','peter','ronak']);
console.log(data)
data.add('saksham')
console.log(data)
data.delete('anil')
console.log(data)
// data.clear()

for(i of data){
    console.log(i)
}

data.forEach(val => {
    console.log(val)
});

console.log(data.values())
console.log(data.keys())
console.log(data.entries())
