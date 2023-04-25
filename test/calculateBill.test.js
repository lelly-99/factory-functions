describe ("calculateBill", function(){
    it("should  be able to set the string input", function(){
        let billOne = calculateBill();
        billOne.setStringInput("call");
        assert.equal("call", billOne.getStringInput())
    })
});