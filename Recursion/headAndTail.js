function test(x){
    if(x==0){
       return 0;
    }
    test(x-1);
    console.log(x);
    test(x-1)
}


test(4)