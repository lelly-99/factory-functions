// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText")
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill
var smsTotalOne = document.querySelector(".smsTotalOne")
var callTotalOne =document.querySelector(".callTotalOne")
var totalOne = document.querySelector(".totalOne")

var smsTotal = 0
var callTotal = 0
var totalCost = 0
//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function calculateTextBill() {
    let stringBills = billTypeText.value.toLowerCase()
    if (stringBills === "call") {
        callTotal += 2.75;
    }
    else if (stringBills === "sms") {
            smsTotal += 0.75;
    }
    else {
        totalCost += 0
    }

    callTotalOne.innerHTML = callTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    var totalCost = callTotal + smsTotal;
    totalOne.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 30) {
        totalOne.classList.add("warning");
    }
    if (totalCost >= 50) {
        totalOne.classList.add("danger");
    }
}
addToBillBtn.addEventListener("click", function(){
    calculateTextBill();
});