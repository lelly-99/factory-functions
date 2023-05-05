// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemType")
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
var smsTotalTwo = document.querySelector(".smsTotalTwo")
var callTotalTwo =document.querySelector(".callTotalTwo")
var totalTwo = document.querySelector(".totalTwo")

var totalSms = 0
var totalCall = 0
var costTotal = 0
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function calculateRadioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }
    if (billItemType === "call") {
        totalCall += 2.75;
    }
    else if (billItemType === "sms") {
            totalSms += 0.75;
    }
    else {
        costTotal += 0
    }

    costTotal = totalCall + totalSms;
    callTotalTwo.innerHTML = totalCall.toFixed(2);
    smsTotalTwo.innerHTML = totalSms.toFixed(2);
    totalTwo.innerHTML = costTotal.toFixed(2);

    if (costTotal >= 30) {
        totalTwo.classList.add("warning");
    }
    if (costTotal >= 50) {
        totalTwo.classList.add("danger");
    }
}
radioBillAddBtn.addEventListener("click", function(){
    calculateRadioBill();
});