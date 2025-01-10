// Get elements
const totalDepositEl = document.getElementById('total-deposit');
const totalWithdrawEl = document.getElementById('total-withdraw');
const totalBalanceEl = document.getElementById('total-balance');
const amountInput = document.getElementById('amount-input');
const depositButton = document.getElementById('deposit-button');
const withdrawButton = document.getElementById('withdraw-button');

// Initialize values
let totalDeposit = 0; // Total deposit amount
let totalWithdraw = 0; // Total withdraw amount
let totalBalance = 0; // Total balance

// Function to handle deposit
function handleDeposit() {
    const amount = parseFloat(amountInput.value);

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // Update values
    totalDeposit += amount; // Add to total deposit
    totalBalance += amount; // Add to total balance

    // Update the UI
    updateUI();
    clearInput();
}

// Function to handle withdraw
function handleWithdraw() {
    const amount = parseFloat(amountInput.value);

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // Check for sufficient balance
    if (amount > totalBalance) {
        alert('Insufficient balance.');
        return;
    }

    // Update values
    totalWithdraw += amount; // Add to total withdraw
    totalBalance -= amount; // Subtract from total balance

    // Update the UI
    updateUI();
    clearInput();
}

// Function to update the UI
function updateUI() {
    totalDepositEl.textContent = totalDeposit.toFixed(2);
    totalWithdrawEl.textContent = totalWithdraw.toFixed(2);
    totalBalanceEl.textContent = totalBalance.toFixed(2);
}

// Function to clear the input field
function clearInput() {
    amountInput.value = '';
}

// Attach event listeners to buttons
depositButton.addEventListener('click', handleDeposit);
withdrawButton.addEventListener('click', handleWithdraw);
