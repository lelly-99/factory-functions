function radioBill(){
    var inputValue
    var callTotal = 0;
    var smsTotal = 0;
    //get call input
    function setSelectedValue(value){
        inputValue = value
    }

    function getSelectedValue(){
        return inputValue
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
    function getTotalCallCost(){
        return callTotal;
    }
    
    function getTotalSmsCost(){
        return smsTotal;
    }

    function getTotalCost(){
        return callTotal + smsTotal;
    }
    //add classes
    function addWarningClass(){
        if(getTotal() >= 30){
            return "warning"
        }
    }

    function addCriticalClass(){
        if(getTotal() >= 50){
            return "danger"
        }
    }
    //return functions
    return {
        setSelectedValue,
        getSelectedValue,
        getTotalCost,
        useCall,
        useSms,
        getTotalCallCost,
        getTotalSmsCost,
        addWarningClass,
        addCriticalClass,
    }
}