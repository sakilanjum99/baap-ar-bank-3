function doubleIt (num) {
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const severDouble = doubleIt(7);

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value
    const AmountValue = parseFloat(inputAmountText);
      // clear input field
      inputField.value = '';
    return AmountValue;   
}

function updateTotalField (totalFieldId, amount) {
// debugger;
const totalElement = document.getElementById(totalFieldId);
const TotalText = totalElement.innerText;
const previousTotal = parseFloat(TotalText)
totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance (){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount; 
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {

// update balance
  
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    
// get and update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
   
// update balance after withdraw
const balanceTotal = document.getElementById('balance-total');
const withdrawAmount = getInputValue('Withdraw-input');
const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
     }
     if (withdrawAmount > currentBalance) {
         console.log('You can not withdraw more than what you in your account')
     }
 
})