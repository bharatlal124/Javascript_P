function main(){
  
  const userAuth = (
    //Implement your IIFE here 
    //It should return the registerUser function
      
      function() {
      const users = [];

      function registerUser(username, password) {
      
        if (checkCredentials(username, password)) {
          return 'The user is already registered';
        } else {
         
          const user = { username, password };
          users.push(user);
          return 'The user have been added to the registeredUser array';
        }
      }

      function checkCredentials(username, password) {
       
        return users.some(user => user.username === username && user.password === password);
      }

     
      return {
        registerUser,
        checkCredentials
      };
    }
  )();
    

console.log(userAuth.registerUser("user1","password123"));
//Output: The user have been added to the registeredUser array
console.log(userAuth.registerUser("user1","password123"));
//Output : The user is already registered
return userAuth;
}
main();