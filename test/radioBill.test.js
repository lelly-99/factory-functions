describe ("Radio Bill widget", function (){
    describe ("get the selected value", function (){
        it('should  be able to set the selected value "call"', function(){
            let billOne = radioBill();
            billOne.setSelectedValue("call");
            assert.equal("call", billOne.getSelectedValue())
        })

        it('should  be able to set the selected value "sms"', function(){
            let billOne = radioBill();
            billOne.setSelectedValue("sms");
            assert.equal("sms", billOne.getSelectedValue())
        })
    })

    describe ("get total from added values", function (){
        it('should  be able to get total for the selected value "call"', function(){
            let billOne = radioBill();

            billOne.setSelectedValue("call");

            billOne.useCall();

            assert.equal(2.75, billOne.getTotalCallCost())
        })

        it('should  be able to get total for the selected value "sms"', function(){
            let billOne = radioBill();

            billOne.setSelectedValue("sms");

            billOne.useSms();

            assert.equal("0.75", billOne.getTotalSmsCost())
        })

        it('should  be able to get total for both "sms" and "call"', function(){
            let billOne = radioBill();

            billOne.setSelectedValue("call");
            billOne.setSelectedValue("sms");

            billOne.useSms();
            billOne.useCall();

            assert.equal("3.50", billOne.getTotalCost())
        })
    })

    describe ("add warning and critical classes", function (){
        it('should able able to add the class name "danger" when total is from 30 and above', function(){
            let billOne = textBill();

            billOne.useCall();
            billOne.useCall();
            billOne.useCall();
            billOne.useCall();
            billOne.useCall();
            billOne.useSms();
            billOne.useSms();
            billOne.useSms();
            billOne.useSms();
            billOne.useCall();
            billOne.useCall();
            billOne.useCall();
            billOne.useSms();
            billOne.useSms();
            billOne.useCall();
            billOne.useSms();
            billOne.useSms();
            billOne.useSms();
            billOne.useCall();
            billOne.useCall();

            assert.equal("warning", billOne.addWarningClass())
        })

        it('should able able to add the class name "danger" when total is from 50 and above', function(){
            let billOne = textBill();

            billOne.useCall();
            billOne.useCall();
            billOne.useCall();
            billOne.useCall();
            billOne.useCall();
            billOne.useSms();
            billOne.useSms();
            billOne.useSms();
            billOne.useSms();
            billOne.useCall();
            billOne.useCall();
            billOne.useCall();
            billOne.useSms();
            billOne.useSms();
            billOne.useSms();
            billOne.useCall();
            billOne.useCall();
            billOne.useSms();
            billOne.useSms();
            billOne.useSms();
            billOne.useCall();
            billOne.useCall();
            billOne.useCall();
            billOne.useSms();
            billOne.useSms();
            billOne.useSms();
            billOne.useCall();
            billOne.useCall();

            assert.equal("danger", billOne.addCriticalClass())
        })
    })
})