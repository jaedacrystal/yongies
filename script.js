
$(document).ready(function(){
    $(".phts").hide();
    $(".letters").hide();
    $(".playlist").hide();
    $("#song h1").hide();
});

$(".folder1").click(function(){
    $(".phts").toggle("scale", 200);
})

$(".folder2").click(function(){
    $(".letters").toggle("scale", 200);
})

$(".folder3").click(function(){
    $(".playlist").toggle("scale", 200);
})

$(".record img").click(function(){
    $(this).toggleClass("spin");
    $("#song h1").fadeToggle("fast");
});

var audioFile = document.getElementById("audio");
var play = false;

function audioControls() {
    play ? audioFile.pause() : audioFile.play();
    };

    audioFile.onplaying = function() {
    play = true;
    };
    audioFile.onpause = function() {
    play = false;
    };