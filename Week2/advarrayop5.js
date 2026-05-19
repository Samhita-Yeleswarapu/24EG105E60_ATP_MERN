//ASSIGNMENT 5: 
//Bank Transaction Analyzer
//You are building a bank statement summary.
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
   // 1. filter() all credit transactions
const r1=transactions.filter((trans)=>trans.type=='credit')
console.log(r1)

    //2. map() to extract only transaction amounts
    const r2=transactions.map((trans)=>trans.amount)
    console.log(r2)

   // 3. reduce() to calculate final account balance
   const finalAccBalance=transactions.reduce((acc,trans)=>{
    if(trans.type==="Credit") {
        return acc+trans.amount;
    }
        return acc-trans.amount;
},0);

console.log(finalAccBalance);

   // 4. find() the first debit transaction
   const r4=transactions.find((trans)=>trans.type=='debit')
   console.log(r4)

   // 5. findIndex() of transaction with amount 10000
   const r5=transactions.findIndex((trans)=>trans.amount==10000)
   console.log(r5)