function matchingDay() {
    var dayOneDay;
    var dayTwoDay; 

    function setDay(dayOne, dayTwo) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'];
        var day1 = new Date(dayOne);
        var day2 = new Date(dayTwo)
        dayOneDay = days[day1.getDay()];
        dayTwoDay = days[day2.getDay()];
    }

    function matchingDays(){
        if(dayOneDay === dayTwoDay){
            return true;
        } else {
            return false;
        }
    }

    function getDay1(){
        return dayOneDay;
    }

    function getDay2(){
        return dayTwoDay
    }

    function setDay1Colour(){
        if(dayOneDay !== dayTwoDay){
            return "Orange"
        }
    }
    function setDay2Colour(){
        if(dayTwoDay !== dayOneDay){
            return "Gold"
        }
    }

    function matchingDaysColour(){
        if(dayOneDay === dayTwoDay){
            return "Green";
        }
    }

    return{
        setDay,
        matchingDays,
        getDay1,
        getDay2,
        setDay1Colour,
        setDay2Colour,
        matchingDaysColour,
    }
}