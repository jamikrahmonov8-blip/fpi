//task3
// function add(a,b) {
//        let sum = a+b
//        let res = sum.split(" ").reverse()
//        return res 
// }
// console.log(add("sol "," stol"));


// function add(a) {
//     a = a.split(",").join("")
//     a = +a
//     let res=1
//     for(let i=a;i>0;i=Math.floor(i/10))
//         res *= i % 10
//     return res
// }
// console.log(add("2,3"));



// function add(a) {
//    a = a.split("-")
//   a = a.length
//   return a
// }
// console.log(add("but-fun"));



// function add(a) {
//    a = a.split(",").length
//    a = a!==1 ? true : false
//    return a
// }
// console.log(add("hello"));
// console.log(add("hello, world"));


// function add(a) {
//     return a
    
// }
//  console.log("Hello".concat(add(" Gerald")));
 


// function add(a) {
//     if(a.length == 1){
//         return a
//     }
//     //////////////////////////////////
//     if(a.length % 2 == 0 ){
//         let sum = 0 
//          let res =0
//       for(let i = 1; i<=a.length-1;i++)
//       {
//         sum = (sum + i)
//     }
//     sum =Math.round(sum / a.length-1)
//     res = a.substring(sum,sum+2)
//     return res
//     }
//     //////////////////////////////////
//     if(a.length%2 !==0){
//         let sum = 0 
//          let res =0
//       for(let i = 1; i<=a.length-1;i++)
//       {
//         sum = (sum + i)
//     }
//     sum =Math.round(sum / a.length-1)
//     res = a.charAt(sum+1)  
//     return res      
//     }
// }
// console.log(add("a"));

// function add(a) {
//     a = a.length % 2 == 0 ? a.at(a.length / 2 - 1).concat(a.at(a.length / 2)) : a.at(a.length / 2)
//     return a
// }
// console.log(add("Saeeom"));

// function add(a) {
//     a = a.split(" ").indexOf("Nedo") + 1
//     return a 
// }

// console.log(add("I am fine Nedo"));



// function add(a) { 
//       let res= ""
//       for(  let i of a.split(" ")){
//         if(i.length>=5){
//             let rev = ""
//             for(let j = i.length-1 ;j>=0; j--){
//              rev +=i[j]
//             }
//             res+=rev+" "
//         }
//         else{
//             res +=i+" "
//         }
//     }
//     return res
//     }
//  console.log(add("This is a lacipyt sentence."));


// function add(a) {
//     let res = a.toString().split("").reverse("").join("")
//     res=res.concat(a)
//     return res
        
//     }
//     console.log(add(123));
    



// function add(a) {
//     if(a==0){
//         return 10
//     } 
//     return 2*add(a-1)
// }
// console.log(add(3));



// function add(a=0 ) {
//     if(typeof a =="number"){
//         return a.toString()
//     }
//     return ( b) =>{
//         return parseInt(b)
//     }
// }
// let res = add("")
// console.log(add(12)+" is strign");
// console.log(res("200")+" is number ");


//  function add(a){
//     if(a<=2)
//     {
//         return 1
//     }
//     return add(a-1)+add(a-2)
//  }

//  console.log(add(5));
 


// function multiplir(a) {
//     return (b) => {
//             b *= a
//             return b
//     }
// }               
// let double = multiplir(2)
// console.log(double(10));


// function fires(a) {
//     return (b=0) =>{
//         b*=a
//         return b
//     }
// }
// let scond = fires(10)
// console.log(scond(20));
// console.log(scond());
// console.log(scond(100));



// function add(b) {
//     let res = 1
//     if(b==0){
//         return 0
//     }
//     return add(b-1)
// }
// console.log(add("ad",3));



// function add(a,b) {
//     return(c,d)=>{
//     return (i,f) =>{
//         let res = a*c*i+b*d*f
//         return res
//     }
//     }
    
// }
// console.log(add(10,2)(5,0)(2,3));




// function add(a,rev=0){
// if(a==0){
//     return rev
// }
// return add(Math.floor(a/10),rev*10+(a%10))
// }
// console.log(add(1234));



// function add(a){
//     if(a.length ==0) {
//         return ""
//   }
//  return a.at(-1)+ add(a.slice(0, -1))
// }
// console.log(add("hello"));




// function minretun(a) {
//     let min = 999
//     if( a == 0)
//     {
//         return 0
//     }
//     for(let i=a; i>0;i=Math.floor(i/10))
//         if(i%10<min){
//             min = i%10
//         }

//  return min
      
// }
// console.log(minretun(123456789));




// function add(a,min=999){
// if(a==0){
//     return min
// }
// return add(Math.floor(a/10), min = a % 10 <= min ? a%10 : min)
// }
// console.log(add(1234));





// function add(a,max=-999){
// if(a==0){
//     return max
// }
// return add(Math.floor(a/10), max = a % 10 > max ? a%10 : max)
// }
// console.log(add(1234));




// function add(a,b, c = a) {
//    if(c > b){
//     return ""
//    }
//    return c + ", " + add(a,b, c + 1)

// }
// console.log(add(1,3));


// function closer(a,b) {
//     let cnt =0
//     return ( )=>{
//         cnt++
//         if(cnt == 1){
//             return a-b
//         }
//         else if(cnt == 2){
//             return a*b
//         }
//         else if(cnt == 3){
//             return a/b
//         }
//         else if(cnt == 4){
//             return a%b
//         }
//     }
// }
// let res =closer(1,2)
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());




// function add(a=0) {
//     let b = a
//     return (c)=>{
//         b+=c    
//         return b
//     }
// }
// let res=add(10)
// console.log(res(5));
// console.log(res(10));
// console.log(res(20));




// function add() {
//     let cnt = 0
//     return () => {
//         cnt++
//         return cnt
//     }
// }
// let res=add()
// console.log(res());
// console.log(res());
// console.log(res());



// function add(a) {
//     let res=0
//     return()=>{
//     a=Math.floor(a/10)
//         return a
//     }
// }
// let res = add(121212)
// console.log(res());
// console.log(res());
// console.log(res());


// function fib(a) {
//   if(a<=2)
//   {
//     return 1
//   }
//   return fib(a-1) + fib(a-2)
// }
// console.log(fib(4));



// function add(a,min=999) {
//     if(a==0){
//         return min
//     }
//     return add(Math.floor(a/10),min=a%10<min? a%10 : min )
// }
// console.log(add(56798));




// function add(a,max=-999) {
//     if(a==0)  {
//         return max
//     }
//     return add(Math.floor(a/10),max=a%10>max?a%10:max)
// }
// console.log(add(123));




// function add(a,b,c=a) {
//     if(c>b){
//         return ""
//     }
//     return c +", "+ add(a,b,c+1)
// }

// console.log(add(1,3));



// function fib(a) {
//     if(a<=2){
//         return 1
//     }
//     return fib(a-1) + fib(a-2)
// }
// console.log(fib(4));





// function add(a) {
//     let b= a.toString()
//     let c=b.length


// function recurtin(index) {
//    if(index==Math.floor(c/2)){
//     return parseInt(b[index])
//    }
//    return recurtin(index+1)
// }
// return  recurtin(0)
// }
// console.log(add(123));





// function add(a) {
//     let b=a.toString()
//     let c=b.length
//     function recurtin(ind) {
//         if(ind==Math.floor(c/2)){
//             return parseInt(b[ind])
//         }
//         return recurtin(ind+1)
//     }
//     return recurtin(0)
// }
// console.log(add(123456789));



// function add(a) {
//     let t=a
//     return (b)=>{
//         t+=b
//         return t
//     }
// }
// let res = add(10)
// console.log(res(5));
// console.log(res(10));
// console.log(res(20));



// function add(a) {
//     return () =>{
//         a=Math.floor(a/10)
//         return a
//     }
// }
// let res=add(121212)
// console.log(res());
// console.log(res());
// console.log(res());



// function one(a) {
//     let c=a.toString()
//     return ()=> {
//         let b=+c
//         c=c.slice(1)
//     return  b
//     }
// }
// let res=one(12345)
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
