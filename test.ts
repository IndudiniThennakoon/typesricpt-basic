// let indu: string = "Hello Indu";

// let induu: number = 5;

// console.log(indu);
// console.log(induu);


// super type 

// let isCheck: any = true // boolean 
// console.log(typeof isCheck)
// isCheck = 'True' // assign string 
// console.log(typeof isCheck)
// isCheck = 8 // assign string
// console.log(typeof isCheck)
// isCheck ={id : 1, name: 'Indu'};
// console.log(typeof isCheck)
// console.log(isCheck);


//  array 

// const list: number [] = [1,2,3,4];
// console.log(list);

// tuple
// let x: [number,string];
// x = [112, 'Hello'];

// console.log(x);

//  enum
enum ActionTypes{
    GET_PRODUCTS = '[GET PRODUCTS] LOADED',
    CREATE_PRODUCTS = '[CREATE PRODUCTS] CREATE'
}

const action = {
    payload = 1,
    type: ActionTypes.GET_PRODUCTS
}
console.log(action);