// Display for the current day

let m = moment();
var currentDay = $("#currentDay");
var displayCurrentDay = moment().format('dddd, MMMM Do YYYY');
currentDay.text(displayCurrentDay);

$("#currentDay").text(moment().format("YYYY MMMM Do"));

var currentTime = moment();
var currentMinute = moment().minutes();


// color changing according to time
function changeColor(){

    var currentHour=moment().hours() 
    $(".time-block").each(function(){

var calendarHour=parseInt($(this).attr("id"))
if (calendarHour < currentHour){
$(this).addClass("past")
}
  else if (calendarHour === currentHour) {
    $(this).removeClass ("past")
    $(".description").addClass("present");
  } 
  else {
    $(this).removeClass("present");  
    $(".description").addClass("future");
  }

});
  

// button functionality to save entered text

$(".saveBtn").on("click", function(){
    var time=$(this).parent().attr("id")
    console.log (time)
    var value =$(this).siblings(".description").val()
    
    localStorage.setItem(time, value)
  })
  
$(".btn").each(function() { 
    for (var i = 0; i < save.length; i++) {
        if($(this).attr("saveBtn") === save[i].location) {
            $(this).parent().prev().val(save[i].input);
        }
    }
});
}
