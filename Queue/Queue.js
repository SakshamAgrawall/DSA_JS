let queue=[];
let currentSize=queue.length;
let maxSize=5;

function enqueue(newValue){
    if(currentSize>=maxSize){
        console.log('queue reached at max')
    }else{
        queue[currentSize]=newValue;
        currentSize++;
        
    }
}

function dequeue(){
    if(currentSize>0){

        for(let i=0;i<queue.length;i++){
            queue[i]=queue[i+1]
        }
        currentSize--;
      queue.length=currentSize;
    }else{
        console.log('queue is empaty')
    }
}
function display(){
    console.log(queue)
}


enqueue(20)
enqueue(21)
enqueue(22)
enqueue(23)
enqueue(24)
// enqueue(23)
dequeue()
dequeue()

dequeue()
dequeue()
dequeue()
dequeue()
display()