document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositText = depositField.value;
    const newDepositAmount = parseFloat(depositText);

    const prevDeposit = document.getElementById('deposit-total');
    const prevDepositText = prevDeposit.innerText;
    const prevDepositAmount = parseFloat(prevDepositText);

    const prevBalance = document.getElementById('balance-total');
    const prevBalanceText = prevBalance.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceText);
    
    const depositTotal = prevDepositAmount + newDepositAmount;
    prevDeposit.innerText = depositTotal;
    depositField.value = '';

    const balanceTotal = prevBalanceTotal + newDepositAmount;
    prevBalance.innerText = balanceTotal;
})