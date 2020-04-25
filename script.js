// Use moment to get today's date
// format should be [DAY OF WEEK], [Full Month] [DAYOFMONTH ex 3rd]
var currentDay = $("#currentDay").text(moment().format("dddd MMMM Do"));
var currentTime = moment().format("HH");
var storedDate = localStorage.getItem('currentDay');
// console.log(storedDate);
// console.log(currentDay);

function setTimeColor() {
    for (var i = 9; i <= 17; i++) {
        var rowTime = (moment().hour(i).minute(0)).format("HH");
        var showTime = (moment().hour(i).minute(0)).format("h a");
        var row = `
        <div class="row">
        <p id = "${rowTime}" class = "hour col-sm-2">${showTime}</p>
        <textarea id= "text${i}" type="text" class= "text col-sm-8"></textarea>
        <button class = "saveBtn col-sm-1">SAVE</button>
        </div>
        `
        $(".container").append(row);

        var textbox = "#text" + i
        // console.log(currentTime);
        // console.log(rowTime);

        if (currentTime > rowTime) {
            $(textbox).addClass("past");
            //console.log("work!")
        } if (currentTime == rowTime) {
            $(textbox).addClass("present");
            // console.log("here");
        } if (currentTime < rowTime) {
            $(textbox).addClass("future");
            // console.log("next");
        }
    }

}
setTimeColor();

// store things in local storage 

$(".saveBtn").on("click", function (e) {
    e.preventDefault();
    // console.log("something");
    var textValue = $(this).siblings(".text").val();
    // console.log(textValue);
    var timeValue = $(this).siblings(".hour").attr("id");
    // console.log(timeValue);
    localStorage.setItem(timeValue, textValue);

});
//compare the date with the data being saved. If the date is current day, then retrieve and display data
if (storedDate == currentDay) {
    $('#text9').val(localStorage.getItem('09') || "");
    $('#text10').val(localStorage.getItem('10') || "");
    $('#text11').val(localStorage.getItem('11') || "");
    $('#text12').val(localStorage.getItem('12') || "");
    $('#text13').val(localStorage.getItem('13') || "");
    $('#text14').val(localStorage.getItem('14') || "");
    $('#text15').val(localStorage.getItem('15') || "");
    $('#text16').val(localStorage.getItem('16') || "");
    $('#text17').val(localStorage.getItem('17') || "");
} else {
    localStorage.clear();
    var dateInLocalStorage = localStorage.setItem('currentDay', currentDay);
}
