//ASSIGNMENT 3:
//Employee Payroll Processor
//You are building a salary processing module in a company HR app.
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
    //1. filter() employees from IT department
const r1=employees.filter((emp)=>emp.department==='IT')
console.log(r1)

   // 2. map() to add:
            //netSalary = salary + 10% bonus
const netSalary=employees.map((stud)=>stud.salary+stud.salary*0.1)
console.log(netSalary)

    //3. reduce() to calculate total salary payout
    const totalSalary=employees.reduce((acc,sal)=>acc+sal.salary,0)
    console.log(totalSalary)

    //4. find() employee with salary 30000
    const r3=employees.find((stud)=>stud.salary==30000)
    console.log(r3)
    
    //5. findIndex() of employee "Neha"
    const r4=employees.findIndex((stud)=>stud.name==='Neha')
    console.log(r4)