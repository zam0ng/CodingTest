var n,k;

if(n>=10){

    var a = parseInt (n /10 );
    k=k-a;

    if(k<0)
        k=0;

    var totalPrice = n*12000 + k*2000 ;

    return totalPrice;
}
    
else{
    var totalPrice = n*12000 + k*2000 ;

    return totalPrice;
}