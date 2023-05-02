describe ("Calculate Bill", function(){
    //test for string input
    describe ("getStringInput", function (){
        it('should  be able to set the entered string "call, sms, call, sms"', function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, sms, call, sms");
            assert.equal("call, sms, call, sms", billOne.getStringInput())
        })
    })
    //test for split string 
   describe ("getSplitString", function(){
        it("should  be able to split the string entered by user", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, sms");
            assert.deepEqual("call", "call", "call", "sms", billOne.getSplitString())
        })
    })
    //test for total
    describe ("getTotal", function(){
        it("should be able to should calculate total for the string input", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call");
            billOne.getSplitString();
            assert.equal(8.25, billOne.getTotal())
        })
    })
    //test for adding classes
    describe ("addClasses", function(){
        it("should add danger for total starting from 20 and above", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, call, call, call, call, call, sms, sms");
            billOne.getSplitString();
            billOne.getTotal()
            assert.equal("warning", billOne.addWarning())
        })
        it("should add  danger for total starting from 30 and above", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, call, call, call, call, call, sms, sms, call, call, call");
            billOne.getSplitString();
            billOne.getTotal()
            assert.equal("danger", billOne.addDanger())
        })
    })
    //test for removing classes
    describe ("removeClasses", function(){
        it("should remove danger for total below 20", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, call, sms, sms");
            billOne.getSplitString();
            billOne.getTotal()
            assert.equal("warning", billOne.removeWarning())
        })
        it("should remove danger for total below 30", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, sms, sms, call, sms, call");
            billOne.getSplitString();
            billOne.getTotal()
            assert.equal("danger", billOne.removeDanger())
        })
    })
});