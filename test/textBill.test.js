describe ("Text Bill widget", function (){
    describe ("get the string input", function (){
        it('should  be able to set the entered string "call"', function(){
            let billOne = textBill();
            billOne.setStringInput("call");
            assert.equal("call", billOne.getStringInput())
        })

        it('should  be able to set the entered string "sms"', function(){
            let billOne = textBill();
            billOne.setStringInput("sms");
            assert.equal("sms", billOne.getStringInput())
        })
    })

    describe ("get total from string input", function (){
        it('should  be able to get total for the entered string "call"', function(){
            let billOne = textBill();

            billOne.setStringInput("call");

            billOne.useCall();

            assert.equal(2.75, billOne.getTotalCalls())
        })

        it('should  be able to get total for the entered string "sms"', function(){
            let billOne = textBill();

            billOne.setStringInput("sms");
            billOne.getStringInput();

            billOne.useSms();

            assert.equal("0.75", billOne.getTotalSmses())
        })

        it('should  be able to get total for both "sms" and "call"', function(){
            let billOne = textBill();

            billOne.setStringInput("call");
            billOne.setStringInput("sms");

            billOne.useSms();
            billOne.useCall();

            assert.equal("3.50", billOne.getTotal())
        })
    })

    describe ("add warning and critical classes", function (){
        it('should able able to add the class name "warning" when total is from 20 and above', function(){
            let billOne = textBill();

            billOne.setStringInput("call");
            billOne.setStringInput("sms");

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

            assert.equal("warning", billOne.addWarningClass())
        })

        it('should able able to add the class name "danger" when total is from 30 and above', function(){
            let billOne = textBill();

            billOne.setStringInput("call");
            billOne.setStringInput("sms");

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

            assert.equal("danger", billOne.addCriticalClass())
        })
    })
})