var matchingDayInstance = matchingDay();
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];
var buton = document.querySelector(".day_check")
function myFunction() {
    var day1 = document.getElementById("date1").value;
    var day2 = document.getElementById("date2").value;
    matchingDayInstance.setDay(day1, day2)

    if (matchingDayInstance.getDay1() == matchingDayInstance.getDay2()) {
        var table = document.querySelectorAll(".w_day");
        for (var i = 0, row; row = table.rows[i]; i++) {
            //iterate through rows
            alert(row)
            //rows would be accessed using the "row" variable assigned in the for loop
        }
        alert(true)
        return;
    } else {
        alert(false)
    }
}

buton.addEventListener("click", myFunction)

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = dd + '/' + mm + '/' + yyyy;