//write a function that receives an array & search element as args and returns the index of that search element in the array.It should return "not found" when search element not found.
function searchEle(arr,element) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]===element) {
            return i;
        }
    }
    return "not found";
}
const marks = [90, 78, 65, 98];
console.log(searchEle(marks,78));  
console.log(searchEle(marks,40));  