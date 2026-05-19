//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
//🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

   // 1. Create a shallow copy of user
let shallowCopy={...user}
console.log(shallowCopy)

   // 2. Change:
         // i. name in the copied object
shallowCopy.name='Hari'
console.log(shallowCopy)

         // ii. preferences.theme in the copied object
         shallowCopy.preferences.theme="light"
         console.log(shallowCopy)

         // iii .Log both original and copied objects
         console.log(user)
         console.log(shallowCopy)

         // iv. Observe what changes and what doesn’t
         //only changes made in top priority properties change but nested properties are modified in both user and shallowCopy
