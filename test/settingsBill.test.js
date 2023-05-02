describe ("Bill with settings", function(){
    //test for call cost
    describe ("getCallCost", function (){
        it("should  be able to set the call cost of '2.75' ", function(){
            let billOne = settingsBill();
            billOne.setCallCost(2.75);
            assert.equal(2.75, billOne.getCallCost())
        })

        it("should  be able to set the call cost of '1.75'", function(){
            let billTwo = settingsBill();
            billTwo.setCallCost(1.75);
            assert.equal(1.75, billTwo.getCallCost())
        })

        it("should  be able to set the call cost of '2.50'", function(){
            let billThree = settingsBill();
            billThree.setCallCost(2.50);
            assert.equal(2.50, billThree.getCallCost())
        })
    })
    //test for sms cost 
    describe ("getSmsCost", function (){
        it("should  be able to set the sms cost of '0.25'", function(){
            let billOne = settingsBill();
            billOne.setSmsCost(0.25);
            assert.equal(0.25, billOne.getSmsCost())
        })

        it("should  be able to set the sms cost of '0.75'", function(){
            let billTwo = settingsBill();
            billTwo.setSmsCost(0.75);
            assert.equal(0.75, billTwo.getSmsCost())
        })

        it("should  be able to set the sms cost of '0.50'", function(){
            let billThree = settingsBill();
            billThree.setSmsCost(0.50);
            assert.equal(0.50, billThree.getSmsCost())
        })
    })

    //test for warning level
    describe ("getWarningLevel", function (){
        it("should  be able to set the warning level of '10'", function(){
            let warningOne = settingsBill();
            warningOne.setWarningLevel(10);
            assert.equal(10, warningOne.getWarningLevel())
        })

        it("should  be able to set the warning level of '15'", function(){
            let warningTwo = settingsBill();
            warningTwo.setWarningLevel(15);
            assert.equal(15, warningTwo.getWarningLevel())
        })

        it("should  be able to set the warning level of '20'", function(){
            let warningThree = settingsBill();
            warningThree.setWarningLevel(20);
            assert.equal(20, warningThree.getWarningLevel())
        })
    })
    //test for critical level
    describe ("getCriticalLevel", function (){
        it("should  be able to set the critical level of '20'", function(){
            let criticalOne = settingsBill();
            criticalOne.setCriticalLevel(20);
            assert.equal(20, criticalOne.getCriticalLevel())
        })

        it("should  be able to set the critical level of '25'", function(){
            let criticalTwo = settingsBill();
            criticalTwo.setCriticalLevel(25);
            assert.equal(25, criticalTwo.getCriticalLevel())
        })

        it("should  be able to set the critical level of '30'", function(){
            let criticalThree = settingsBill();
            criticalThree.setCriticalLevel(30);
            assert.equal(30, criticalThree.getCriticalLevel())
        })
    })
    //test for call totals
    describe ("getTotalCallCost", function (){
        it("should  be able to use the call cost for 2 calls at 2.75 each", function(){
            let callCostOne = settingsBill();

            callCostOne.setCallCost(2.75)
           
            callCostOne.useCall();
            callCostOne.useCall();

            assert.equal(5.5, callCostOne.getTotalCallCost())
        })

        it("should  be able to use the call cost for 3 calls at 1.75 each", function(){
            let callCostTwo = settingsBill();

            callCostTwo.setCallCost(1.75)
           
            callCostTwo.useCall();
            callCostTwo.useCall();
            callCostTwo.useCall();

            assert.equal(5.25, callCostTwo.getTotalCallCost())
        })

        it("should  be able to use the call cost for 4 calls at 2.50 each", function(){
            let callCostThree = settingsBill();

            callCostThree.setCallCost(2.50)
           
            callCostThree.useCall();
            callCostThree.useCall();
            callCostThree.useCall();
            callCostThree.useCall();

            assert.equal(10, callCostThree.getTotalCallCost())
        })
    })
    //test for sms totals
    describe ("getTotalSmsCost", function (){
        it("should  be able to use the sms cost for 2 smses at 0.75 each", function(){
            let smsCostOne = settingsBill();

            smsCostOne.setSmsCost(0.75);
           
            smsCostOne.useSms();
            smsCostOne.useSms();

            assert.equal(1.50, smsCostOne.getTotalSmsCost())
        })

        it("should  be able to use the sms cost for 3 smses at 0.50 each", function(){
            let smsCostTwo = settingsBill();

            smsCostTwo.setSmsCost(0.50)
           
            smsCostTwo.useSms();
            smsCostTwo.useSms();
            smsCostTwo.useSms();

            assert.equal(1.50, smsCostTwo.getTotalSmsCost())
        })

        it("should  be able to use the sms cost for 4 smses at 0.25 each", function(){
            let smsCostThree = settingsBill();

            smsCostThree.setSmsCost(0.25)
           
            smsCostThree.useSms();
            smsCostThree.useSms();
            smsCostThree.useSms();
            smsCostThree.useSms();

            assert.equal(1, smsCostThree.getTotalSmsCost())
        }) 
    })
    //test for all totals
    describe ("getTotalCost", function (){
        it("should  be able to use the sms and call cost for 2 smses snd calls at 0.75 and 2.75 each respectively", function(){
            let totalCostOne = settingsBill();

            totalCostOne.setSmsCost(0.75);
            totalCostOne.setCallCost(2.75)
           
            totalCostOne.useSms();
            totalCostOne.useSms();
            totalCostOne.useCall();
            totalCostOne.useCall();

            assert.equal(7, totalCostOne.getTotalCost())
        })

        it("should  be able to use the sms and call cost for 3 smses snd calls at 0.75 and 2.75 each respectively", function(){
            let totalCostTwo = settingsBill();

            totalCostTwo.setSmsCost(0.75);
            totalCostTwo.setCallCost(2.75)
           
            totalCostTwo.useSms();
            totalCostTwo.useSms();
            totalCostTwo.useCall();
            totalCostTwo.useCall();
            totalCostTwo.useSms();
            totalCostTwo.useCall();

            assert.equal(10.50, totalCostTwo.getTotalCost())
        })

        it("should  be able to use the sms and call cost for 4 smses snd calls at 0.35 and 2.25 each respectively", function(){
            let totalCostThree = settingsBill();

            totalCostThree.setSmsCost(0.35);
            totalCostThree.setCallCost(2.25)
           
            totalCostThree.useSms();
            totalCostThree.useSms();
            totalCostThree.useCall();
            totalCostThree.useCall();
            totalCostThree.useSms();
            totalCostThree.useSms();
            totalCostThree.useCall();
            totalCostThree.useCall();

            assert.equal(10.40, totalCostThree.getTotalCost())
        })
    })

});