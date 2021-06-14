describe('Registration numbers', function(){
    it("Should be able to return different days", function(){
        let days = matchingDay()
        days.setDay("2021-06-14", "2020-06-13")
        
        assert.equal(false,days.matchingDays());


        days.setDay("2021-06-12", "2021-11-03")
        assert.equal("Saturday",days.getDay1());


        days.setDay("2021-02-13", "2021-07-05")
        assert.equal("Monday",days.getDay2());
    });

    it("Should be able to return matching days", function(){
        let days = matchingDay()
        days.setDay("2021-06-12", "2021-07-03")
        
        assert.equal(true,days.matchingDays());
    });

    it("Should be able to return selected day on the calender", function(){
        let days = matchingDay()
        days.setDay("2021-06-12", "2021-07-03")
        
        assert.equal("Saturday",days.getDay1());

        days.setDay("2021-06-12", "2021-07-05")
        
        assert.equal("Monday",days.getDay2());
    });
    
    it("Should display different colours on the days when selected days are different", function(){
        let days = matchingDay()
        days.setDay("2021-06-12", "2021-07-23")
        
        assert.equal("Orange",days.setDay1Colour());

        days.setDay("2021-06-12", "2021-07-05")
        
        assert.equal("Gold",days.setDay2Colour());
    });

    it("Should display same colour when the selected days match", function(){
        let days = matchingDay()
        days.setDay("2021-06-12", "2020-07-04")
        days.matchingDays()
        
        assert.equal("Green",days.matchingDaysColour());
    });
    
})