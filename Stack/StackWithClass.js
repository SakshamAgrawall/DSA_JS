class Stack{
    item=[];
    currentSize;
    maxSize;
     constructor(size){
            this.maxSize=size;
            this.currentSize = this.item.length;
     }
     push(newVal){
        if(this.currentSize>this.maxSize-1){
            console.log('stack is full')
        }else{
            this.item[this.currentSize]=newVal;
            this.currentSize++;
        }
     }
     pop(){
        if(this.currentSize>0){
            this.currentSize--;
            this.item.length=this.currentSize;
        }else[
            console.log('already empaty')
        ]

     }
     display(){
      console.log(this.item)
     }
}

str1= new Stack(5);

str1.push(10);
str1.push(11);
str1.push(12);
str1.push(13);
str1.push(14);
// str1.push(15);
str1.pop()
str1.pop()
str1.pop()
str1.pop()
str1.pop()
// str1.pop()

str1.display()