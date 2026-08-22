const account_Id = 123322
let account_Email = "abc@gmail.com"
var account_Password = "111111"
account_City = "Islamabad"

// account_Id = 2 // not allowed

account_Email = "aaa@gmail,com"
account_Password = "sssafaaf"
account_City = "Karachi"

console.log(account_Id);

/* 
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([account_Id, account_Email, account_Password, account_City])
