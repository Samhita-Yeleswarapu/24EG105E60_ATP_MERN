//ASSIGNMENT 2:
//Student Performance Dashboard
//You are working on a college result analysis system.
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

   // 1. filter() students who passed (marks ≥ 40)
const r1=students.filter((stud)=>stud.marks>=40)
console.log(r1)

    //2. map() to add a grade field    ≥90 → A ≥75 → B ≥60 → C else → D
const r2=students.map((stud)=>{
    if(stud.marks>=90){
        return 'A'
    }
    if(stud.marks>=75){
        return 'B'
    }
    if(stud.marks>=60){
        return 'C'
    }
    return 'D'
})
console.log(r2)
   //3. reduce() to calculate average marks
const r3=students.reduce((acc,stud)=>(acc+stud.marks)/2,0) 
console.log(r3)

   //4. find() the student who scored 92
const r4=students.find((stud)=>stud.marks===92)
console.log(r4)

   //5. findIndex() of student "Kiran"
   const r5=students.findIndex((stud)=>stud.name==='Kiran')
   console.log(r5)