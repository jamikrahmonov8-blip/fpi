// function add(a) {
//     if(a == 1){
//         return 1
//     }
//     if(a%2!==0){
        
//         return a + add(a-2)
//     }

// }
// console.log(add(5));






// function add(a) {
//     return (b) => {
//     let sum = a + b
//     return sum
//     }
    
// }
// let ad = add(5)
// console.log(ad(3));




// function add(a) {
//     return (b) => {
//      let sum = (a+b)/2
//      return sum 
//     }

// }
// console.log(add(10)(15));




// function add() {
//     let max = -999
//     return (a) => {
//         if(a > max)
//       {
//            max = a   
//       }
//       return max
//     }
// }
// let find = add()
// console.log(find(20));
// console.log(find(10));
// console.log(find(5));




// function add(a, i = 0) {
//     if (a == 0){
//         return 0
//     }
//     return a % 10 * 2 ** i + add(Math.floor(a / 10 ) , i + 1) 
// }
// console.log(add(1101));



// function add(a = 0 ) {
//         let t = a
//         return (b = 0 ) =>
//             {       
//                 t +=b
//               return t 
//             }      
// }
// let addp = add()
// console.log(addp(3));
// console.log(addp(5));




// function add(a) {
//     if(a == 0){
//         return 0
//     }
//     return fib(a) + add(a - 1)
// }
// console.log(add(6));



// function fib(a) {
//     if(a <= 2 ){
//         return 1
//     }
//     return fib(a -1) + fib(a - 2)
// }



// function add(b) {
//     let t=b
//    return (a=0) => {
//        t+=a
//        return t
//    }

// }
// let com = add(2)
// console.log(com());
// console.log(com());





//  function add(a,n = a, sum = 0 ) {
//     if(a == 0 )
//     {
//         return sum == n
//     }
//     return add(Math.floor(a/10),n,sum + Math.pow(a % 10 , n.toString().length))
//  }
//  console.log(add(153));
 




