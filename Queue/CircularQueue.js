class Queue{
    constructor(size){
        this.max=size;
        this.items=new Array(5);
        this.currentSize=this.items.length;
        this.front=-1;
        this.rare=-1;
    }
     enqueue(val){
     if(this.currentSize!=0){
        if(this.rare==this.max-1){
            this.rare=0;
        }else{
            this.rare++
        }
        this.items[this.rare]=val;
        this.currentSize++;
        if(this.front==-1){
            this.front=this.rare;
        }
     }
     }  
     dequeue(){
      if(this.currentSize!=0){
        this.items[this.front]=null;
        if(this.front==this.max-1){
            this.front=0;
        }else{
            this.front++;
            this.currentSize++;
        }
      }else{
        this.rare=-1;
        this.front=-1;
        console.log('items empaty')
      }
     }
     display(){
        console.log(this.items)
     }
}


let queu= new Queue(5);


queu.enqueue(50);
queu.enqueue(51);
queu.enqueue(52);
queu.enqueue(53);
queu.enqueue(54);
queu.dequeue();
queu.enqueue(20)
queu.display();