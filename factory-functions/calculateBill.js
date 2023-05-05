function calculateBill (){
    //string input
    var stringInput;
    var splitString;
    var call = 0;
    var sms = 0;

    // get the text from the textarea in the DOM
    function setStringInput(string){
        stringInput = string;
    }

    function getStringInput(){
        return stringInput
    }
    //function to split the entered string
    function getSplitString(){
        splitString = stringInput.split(', ')
        return splitString
    }
    //get total based on string input
    function getTotal(){
        for(let i = 0; i < splitString.length; i++){
            if(splitString[i].trim() === "call"){
                call += 2.75
            }
            else if(splitString[i].trim === "sms"){
                call += 0.75
            }
        }
        let total = call + sms;
        return total.toFixed(2);
    }

    //add warning and danger classes
    function addWarning(){
        if(getTotal() >= 20){
            return "warning"
        }
    }
    function addDanger(){
        if(getTotal() >= 30){
            return "danger"
        }
    }

    //remove warning and danger classes

    function removeWarning(){
        if(getTotal() < 20){
            return "warning"
        }
    }
    function removeDanger(){
        if(getTotal() < 30){
            return "danger"
        }
    }

    return {
        setStringInput,
        getStringInput,
        getSplitString,
        getTotal,
        addWarning,
        addDanger,
        removeWarning,
        removeDanger,
    }
}