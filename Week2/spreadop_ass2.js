/*  Update User Object
                        
                        Goal: Learn object cloning & adding new property
                        
                        You are given:
                                
                                let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };
                        
                        
                        
                        Tasks
                        
                              -> Create a new object updatedUser
                              
                              -> Copy all properties from user
                              
                              -> Add a new property age: 25
                              
                              -> Print both objects    */


                                 let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };
                                let updatedUser={...user,age:25}
                                console.log(user)
                                console.log(updatedUser)