// Use moment to get today's date
// format should be [DAY OF WEEK], [Full Month] [DAYOFMONTH ex 3rd]
var currentDay = $("#currentDay").text(moment().format("dddd MMMM Do")); 
//console.log(currentDay);
var currentTime = moment().format("HH");//military time, use in time function to compare times.
//console.log(currentTime);
var dayOf = localStorage.setItem("currentDay", currentDay);
// var text9val = localStorage.getItem('09')-->testing, need more work 
// console.log(text9val); --->testing things out, need more work 
// Use moment to get current time (hours) and compare to 9AM-5PM hardcoded
function time(){
    for (var i = 9; i <= 17; i++) {
        var rowTime = (moment().hour(i).minute(0)).format("HH");
        var showTime = (moment().hour(i).minute(0)).format("h a");// regular time, use to display the time tabs
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
                    } if (currentTime == rowTime){
                        $(textbox).addClass("present");
                       // console.log("here");
                    } if (currentTime < rowTime){
                        $(textbox).addClass("future");
                       // console.log("next");
                    }
                }       
                
            }
            time();
            
    //store things in local storage 
    $(".saveBtn").on("click", function(e){
        e.preventDefault();
        //console.log("something");
        var textValue = $(this).siblings(".text").val()
        // console.log(textValue);
        var timeValue = $(this).siblings(".hour").attr("id")
        //console.log(timeValue)
        localStorage.setItem(timeValue, textValue);
    })
    //need to write code for getting things out of local storage and append it to the right text slot. 
    //then somehow code it so local storage reset and clear things out the next day or maybe by 7pm. 
   
    
    // on initial load, get today's date, compare with what's in local storage, and save that in localstorage
    // when to wipe the events (when the date in localstorage is different from today's date)