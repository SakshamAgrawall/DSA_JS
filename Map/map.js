let data = new Map([
    ['greet','hello'],
    ['name','saksham'],
    ['surname','Agrawal']
])
data.set('dance','classical');
console.log(data);
console.log('size of Map',data.size)
console.log(data.has('name'));
console.log(data.get('surname'));
// data.clear()
console.log(data)

//In map you can use only two loop for loop and for each

data.forEach((value,key)=>{
       console.log(key)
})
    
