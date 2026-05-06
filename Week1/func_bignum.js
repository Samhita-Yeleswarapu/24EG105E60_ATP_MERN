//write a function that receives 3 number args and return the big number
//using function expression
let greatestnum=function (a,b,c) {
    if(a>b && a>c)
    return a;
else if(b>a && b>c)
   return b;
else
     return c;
}
let greatest=greatestnum(10,20,30)
console.log(greatest)


