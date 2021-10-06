// Your code goes here
// Your code goes here

let i;
const minAmount = 1000;
const maxPercentage = 100;
const hundredYears = 100;
const numberAfterComa = 2;
while (i !== 1) {


let initialAmount = prompt('Initial amount', '');
initialAmount = Number(initialAmount);

if (initialAmount < minAmount || isNaN(initialAmount)){ 
    i=0; 
    if (initialAmount !== false) {
    alert('Invalid input data'); 
}
} else {
i=1;
let numberOfYears = prompt('Number of years', '');
numberOfYears = Number.parseInt(numberOfYears);

if (numberOfYears < 1 || isNaN(numberOfYears)) {
    i=0;
    alert('Invalid input data');
} else {
i=1;
let percentageOfYear = prompt('Percentage of a year', '');
percentageOfYear = Number(percentageOfYear);

if (percentageOfYear > maxPercentage || isNaN(percentageOfYear)) {
    i=0;
    alert('Invalid input data');
} else { 
    i=1;
    let powValue = Math.pow(1+percentageOfYear/hundredYears,numberOfYears);
    let totalAmount = initialAmount*powValue;
totalAmount = totalAmount.toFixed(numberAfterComa);
totalAmount = parseFloat(totalAmount);
let totalProfit = totalAmount-initialAmount;
totalProfit = totalProfit.toFixed(numberAfterComa);
totalProfit = parseFloat(totalProfit);

let newLine = '\r\n';
let message = `Initial amount: ${initialAmount}`;
message += newLine;
message += `Number of years: ${numberOfYears}`;
message += newLine;
message += `Percentage of a year: ${percentageOfYear}`;
message += newLine;
message += newLine;
message += `Total amount: ${totalAmount}`;
message += newLine;
message += `Total Profit: ${totalProfit}`;
alert(message);
} 
} 
}
}








