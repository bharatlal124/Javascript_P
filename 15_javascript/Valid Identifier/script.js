//Create the isValidIdentifier function 

function isValidIdentifier(input) {
 
  if (typeof input !== 'string') {
    console.log(`${input} is not a valid identifier.`);
    return;
  }

  
  if (/^[0-9]/.test(input)) {
    console.log(`${input} is not a valid identifier.`);
    return;
  }

  
  if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(input)) {
    console.log(`${input} is not a valid identifier.`);
    return;
  }

  console.log(`${input} is a valid identifier.`);
}



isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.