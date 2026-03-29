function add(a,b){
    return a+b;
}

function subtract(a,b){
    if(!(a>b)) throw new error("num a must be greater than b");
    return a-b;
}
function multiply(a,b){
    return a*b;
}

add(10,20);
add(30,40)
add(50,60)

subtract(10,20);

multiply(5,2);
multiply(10,2);
multiply(20,5);
multiply(50,1);
