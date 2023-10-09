
var num_list;
var a = 0;
var b = 1;

if(num_list.length >=11){

    for(var i=0; i<num_list.length ; i++){
    
        a = a + num_list[i] ; 
    }

    console.log(a);
    // return a;
}

else{

    for(var i=0; i<num_list.length ; i++){
    
        b = b * num_list[i] ; 
    }

    console.log(b);
    // return b;

}