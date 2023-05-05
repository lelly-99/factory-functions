//get a reference to the calculate button
var billString = document.querySelector(".billString")
//get a reference to the billTotal element
var calculateBtn = document.querySelector(".calculateBtn")
//get a reference to the billString
var billTotal = document.querySelector(".billTotal")
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function calculatePhoneBill() {
    let bill = billString.value.toLowerCase();
    var phoneBill = bill.split(",");
    var total = 0;
    for (var i = 0; i < phoneBill.length; i++) {
        if (phoneBill[i].trim() === "call") {
            total += 2.75;
        }
        else if (phoneBill[i].trim() === "sms") {
            total += 0.75;
        }
        if (total >= 20) {
            billTotal.classList.add("warning");
        }else {
            billTotal.classList.remove("warning")
        }
        if (total >= 30) {
            billTotal.classList.add("danger");
        }else {
            billTotal.classList.remove("danger")
        }
    }
    billTotal.innerHTML = total.toFixed(2);;
}
calculateBtn.addEventListener("click", function(){
    calculatePhoneBill();
});