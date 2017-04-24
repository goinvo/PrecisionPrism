$(document).ready(function() {
  if (window.location.href.indexOf("strategy") > -1){
    var nav_strategy = document.getElementById("nav_strategy");
    $(nav_strategy).css("background-color", "#ececec");
  } else if (window.location.href.indexOf("about") > -1){
    var nav_about = document.getElementById("nav_about");
    $(nav_about).css("background-color", "#ececec");
  } else if (window.location.href.indexOf("designs") > -1){
    var nav_designs = document.getElementById("nav_designs");
    $(nav_designs).css("background-color", "#ececec");
  } else if (window.location.href.indexOf("join") > -1){
    var nav_join = document.getElementById("nav_join");
    $(nav_join).css("background-color", "#ececec");
  }
})
