//Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
const findSum=(...nums)=>{
return nums.reduce((sum,ele)=>sum+ele)
}
let result=findSum(10,20,30,40,50)
console.log(result)