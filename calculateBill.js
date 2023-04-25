function calculateBill (){
    //string input
    var stringInput;
    //waring level
    var warning = 20
    //danger level
    var danger = 30
    //split the string
    var splitSting;

    // get the text from the textarea in the DOM
    function setStringInput(string){
        stringInput = string;
    }

    function getStringInput(){
        return stringInput
    }

    return {
        setStringInput,
        getStringInput
    }
}