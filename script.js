// Use moment to get today's date
    // format should be [DAY OF WEEK], [Full Month] [DAYOFMONTH ex 3rd]
  var currentDay = $("#currentDay").text(moment().format("dddd MMMM Do"));
  console.log(currentDay);
// Use moment to get current time (hours) and compare to 9AM-5PM hardcoded
function time(){
    for (var i = 9; i <= 17; i++) {
        var startTime = (moment().hour(i).minute(0)).format("h a");
        var row = `
            <div class = container time-block">
                <div class="row">
                    <div class="col-sm-2">
                        <p class = "hour">${startTime }</p>
                    </div>
                    <div class="col-sm-8">
                        <textarea type="text" class= "description"></textarea>
                    </div>
                    <div class="col-sm-1">
                        <button class = "saveBtn">SAVE</button>
                    </div>
                </div>
            </div>
            `
            $(".container").append(row);
        }
}
time();

    // Compare the time you get to the 9AM-5PM
    // var currentTime = moment().format("h a");
    // function compareTime(){

    // }
    // highlight those before the hour grey
    // highlight current hour red
    // highlight after hour green
    // add or remove classes with jQuery
    // possibly generate the blocks, everything before current hour, give a grey class
    // current hour gets red class
    // after current hour gets green
// Saving stuff
    // correlate what you save to the date it was saved
    // on initial load, get today's date, compare with what's in local storage, and save that in localstorage
    // when to wipe the events (when the date in localstorage is different from today's date)