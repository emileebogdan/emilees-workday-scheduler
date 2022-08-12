var timeDisplayEl = $('#time-display');
var saveBtnEl = $('.saveBtn');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  };

saveBtnEl.on('click', function() {
 var textAreaValue = $(this).siblings("textarea").val();
 var lsKey = $(this).parent().attr("id");
 localStorage.setItem(lsKey, textAreaValue);
});

$("#08").children("textarea").val(localStorage.getItem("08"));
$("#09").children("textarea").val(localStorage.getItem("09"));
$("#10").children("textarea").val(localStorage.getItem("10"));
$("#11").children("textarea").val(localStorage.getItem("11"));
$("#12").children("textarea").val(localStorage.getItem("12"));
$("#13").children("textarea").val(localStorage.getItem("13"));
$("#14").children("textarea").val(localStorage.getItem("14"));
$("#15").children("textarea").val(localStorage.getItem("15"));
$("#16").children("textarea").val(localStorage.getItem("16"));
$("#17").children("textarea").val(localStorage.getItem("17"));
$("#18").children("textarea").val(localStorage.getItem("18"));

function timeTracker() {
  var currentTime = moment().format("HH");
  $("textarea").each(function (){
    var blockHour = $(this).parent().attr("id");
    if(blockHour < currentTime){
      $(this).addClass("past");
    }
    if(blockHour == currentTime){
      $(this).addClass('present');
    }
    if(blockHour > currentTime){
      $(this).addClass('future');
    }
  })
};

timeTracker();

setInterval(displayTime, 1000);
