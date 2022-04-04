// Display for the current day

let m = moment();
var currentDay = $("#currentDay");
var displayCurrentDay = moment().format('dddd, MMMM Do YYYY');
currentDay.text(displayCurrentDay);

$("#currentDay").text(moment().format("YYYY MMMM Do"));

var currentTime = moment();
var currentHour = moment().hour();
var currentMinute = moment().minutes();

var hourBlock = parseInt($(this).attr("id"))

//for time/hours for the time blocks

if (currentHour > hourBlock) {
    $(".description").addClass("past"); 
  } 
  else if (currentHour == hourBlock) {
    $(".description").addClass("present");
  } 
  else {
    $(".description").addClass("future");
  }


