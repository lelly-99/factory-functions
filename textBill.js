function textBill(){

    var inputString
    var callTotal = 0;
    var smsTotal = 0;
    //get call input
    function setStringInput(string){
        inputString = string
    }

    function getStringInput(){
        return inputString
    }
    //use call
    function useCall(){
        callTotal += 2.75
    }
    //use sms
    function useSms(){
        smsTotal += 0.75
    }
    //get totals
    function getTotalCalls(){
        return callTotal;
    }
    
    function getTotalSmses(){
        return smsTotal;
    }

    function getTotal(){
        return callTotal + smsTotal;
    }
    //add classes
    function addWarningClass(){
        if(getTotal() >= 20){
            return "warning"
        }
    }

    function addCriticalClass(){
        if(getTotal() >= 30){
            return "danger"
        }
    }
    //return functions
    return {
        setStringInput,
        getStringInput,
        getTotal,
        useCall,
        useSms,
        getTotalCalls,
        getTotalSmses,
        addWarningClass,
        addCriticalClass,
    }
}