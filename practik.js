// function sumdigid(a) {
//   if(a == 0)
//     {
//         return 0
//     }    
//     return a % 10 + sumdigid(Math.floor(a/10))
// }
//  console.log(sumdigid(333));
 



// function mulitsum(a,i = 1) {
//     if(i == 10){
//         return 0
//     }

//     return a * i + mulitsum(a , i + 1)
    
// }
// console.log(mulitsum(1));







// function gsd(a,b) {
//  let sum = a+b
//   let n1 = Math.floor(sum / 10)
//   let n2 = sum % 10
//  let max = Math.max(n1,n2)   
//  return max
// }
//  console.log(gsd(32,8));
 





// function even(a) {
//     if(a < 0 ){
//         return even(a+2)
//     }
//     if(a == 0){
//         return true
    
//     }
//     if (a == 1)
//     {
//         return false
//     }
// return even(a-2)
        
// }
// console.log(even(-4));



// function add(a) {
//     return (b) =>{
//      a+=b
//     return a 
//     }
// }
// console.log(add("hopeless")("ly"));




// function add(a=0){
//     return (b=0) =>{
//     return (c=0) =>{
//     return (d=0) =>{
//     return (i=0) =>{
//     return (f=0) =>{ 
//      let sum = a + b + c + d + i + f 
//      return sum
//     }

//     }

//     }

//     }

//     }
// }
// console.log(add(2)(3)(4)()()(6));




// function add(a) {
//   let cnt = 5
//   return () => {
//     cnt += a
//     return cnt 
//   }

    
// }
// let func = add(10)
// console.log(func());
// console.log(func()); 



// function add(a) {
// if(a <= 1){
//     return 1
// }
// return a * add(a - 2)
// }
// console.log(add(8));






// function add(a) {
//     let cnt = 0
    
       
//     return  () => { 
//         cnt++
//         if (cnt > a){
//             return "out of limit"
       
//     }
//         return cnt 
//     } 

// }
// let con = add(5)
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());





//    function power(a,b) {
//             if(b == 0)
//             {
//                 return 1
//             }
//             return a * power(a,b-1) 
//         }
//         console.log(power(2,3));



let a = "hello" 
console.log(a.split(""));
