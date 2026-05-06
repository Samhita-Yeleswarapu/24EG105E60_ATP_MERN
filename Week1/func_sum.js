//write a function that receives an array as arg and returns their sum
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++) {
        sum+=arr[i];
    }
    return sum;
}
const marks=[90, 78, 65, 98];
console.log("Sum:",sumArray(marks));