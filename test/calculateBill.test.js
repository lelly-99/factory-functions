describe ("Calculate Bill", function(){
    //test for string input
    describe ("getStringInput", function (){
        it('should  be able to set the entered string "call, sms, call, sms"', function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, sms, call, sms");
            assert.equal("call, sms, call, sms", billOne.getStringInput())
        })

        it('should  be able to set the entered string "call, sms, call, sms, sms, sms"', function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, sms, call, sms, sms, sms");
            assert.equal("call, sms, call, sms, sms, sms", billOne.getStringInput())
        })

        it('should  be able to set the entered string "call, sms"', function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, sms");
            assert.equal("call, sms", billOne.getStringInput())
        })
    })
    //test for split string 
   describe ("getSplitString", function(){
        it("should  be able to divide string entered into 4 substrings", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, sms");
            assert.deepEqual("call", "call", "call", "sms", billOne.getSplitString())
        })

        it("should  be able to divide string entered into 8 substrings", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, sms, sms, sms, sms, sms");
            assert.deepEqual("call", "call", "call", "sms", "sms", "sms", "sms", "sms", billOne.getSplitString())
        })

        it("should  be able to divide string entered into 3 substrings", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, sms");
            assert.deepEqual("call", "call", "sms", billOne.getSplitString())
        })
    })
    //test for total
    describe ("getTotal", function(){
        it("should be able to should get a total of 8.25 for the entered string", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call");
            billOne.getSplitString();
            assert.equal(8.25, billOne.getTotal())
        })

        it("should be able to should get a total of 16.50 for the entered string", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, sms, call, call, call, call");
            billOne.getSplitString();
            assert.equal(16.50, billOne.getTotal())
        })

        it("should be able to should get a total of 11.00 for the entered string", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, sms, sms, call, caal");
            billOne.getSplitString();
            assert.equal(11.00, billOne.getTotal())
        })
    })
    //test for adding classes
    describe ("addClasses", function(){
        it("should add warning for total starting from 20 and above", function(){
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
        it("should add warning for total starting from 15 and above", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, sms, call, call, sms, sms");
            billOne.getSplitString();
            billOne.getTotal()
            assert.equal("warning", billOne.addWarning())
        })
        it("should add  danger for total starting from 25 and above", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, call, call, call, sms, sms, call, call, call");
            billOne.getSplitString();
            billOne.getTotal()
            assert.equal("danger", billOne.addDanger())
        })
    })
    //test for removing classes
    describe ("removeClasses", function(){
        it("should remove warning for total below 20", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, sms, sms");
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

        it("should remove warning for total below 15", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, call, sms, sms");
            billOne.getSplitString();
            billOne.getTotal()
            assert.equal("warning", billOne.removeWarning())
        })

        it("should remove danger for total below 40", function(){
            let billOne = calculateBill();
            billOne.setStringInput("call, call, sms, sms, call, sms, sms, call, call");
            billOne.getSplitString();
            billOne.getTotal()
            assert.equal("danger", billOne.removeDanger())
        })
    })
});