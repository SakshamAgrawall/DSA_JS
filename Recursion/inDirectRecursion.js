let totalApple=0;
function buyApple(x){
    if(x>=0){
        console.log('you have',x,'rs','And total apple is',totalApple);
        buyMore(x);
    }
    else{
        console.log('you Dont have more money to buy apple your money is',x+10, 'and total apple is',totalApple-1)
    }
}

function buyMore(x){
    totalApple++;
    buyApple(x-10);
}

buyApple(100)