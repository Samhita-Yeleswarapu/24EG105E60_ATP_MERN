//Assignment 1 Task Management Systems
 // 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
 if(!title){
    return "title required"
 }
 if(title.length<=3){
    return "Min 3 chars required"
 }
 return "Title is valid"
  }

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  if(title=='low'||title=='medium'||title=='high'){
    return 'Valid Priority'
  }
  return 'Invalid Priority'
 }
                      
 // 3. Validate due date (must be future date)
  function validateDueDate(date) {
    let dueDate=new Date('2024-10-31')
    let currentDate=new Date()
    if(dueDate>currentDate) {
        return 'Invalid dueDate'
    }
    return 'Valid Date'
  }
 export {validateTitle,validatePriority,validateDueDate};