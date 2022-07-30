
//   ts function
function add1(): number{
    return 0;
} 
//  ts parameterized function
function add2(a: number, b: number ){

    return a+b;

}

console.log (add2(1,2)); 

//  ts parameterized function with defult values
function divide(a: number = 0, b: number ): number{

    return a / b;

}

console.log (divide()); 