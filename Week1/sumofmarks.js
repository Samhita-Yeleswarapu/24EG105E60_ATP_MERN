//find the sum of marks in [90,78,65,98]
const marks=[90,78,65,98] 
const sum=marks.reduce((total,mark)=>total+mark,0);
console.log("Sum of marks:", sum);