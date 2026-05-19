//assignment-1 Daily Temperature analyser
const temperatures=[32,35,28,40,38,30,42];
//temp above 35
const r1=temperatures.filter((temp)=>temp>35)
console.log(r1)
//convert all temps from celsius to fahrenheit
const r2=temperatures.map((temp)=>temp*1.8+32)
console.log(r2)
//calculate avg temp
const r3=temperatures.reduce((acc,temp)=>(acc+temp)/2)
console.log(r3)
//first temp above 40
const r4=temperatures.find((temp)=>temp>40)
console.log(r4)
//findIndex of temp 28
const r5=temperatures.findIndex((temp)=>temp===28)
console.log(r5)   
