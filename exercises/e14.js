
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let accountsWithWrongBalance = [] 

  for (let i = 0; i < array.length; i++) {
    let accountDeposits = 0
    let accountWithdrawals = 0

    if (array[i].deposits) {
      let depositList = array[i].deposits
      for (let n = 0; n < depositList.length; n++) {
        accountDeposits += depositList[n]
      }
    }

    if (array[i].withdrawals) {
      let withdrawalList = array[i].withdrawals
      for (let n = 0; n < withdrawalList.length; n++) {
        accountWithdrawals += withdrawalList[n]
      }
    }

    let correctBalance = accountDeposits - accountWithdrawals
    
    if (correctBalance !== array[i].balance) {
      accountsWithWrongBalance.push(array[i])
    }
  }

  return accountsWithWrongBalance
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
