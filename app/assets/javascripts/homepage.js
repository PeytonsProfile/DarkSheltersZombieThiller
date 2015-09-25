$( document ).ready(function(){$(".button-collapse").sideNav();})
$(document).ready(function(){
    
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal('#modal1');
  });
$(function() {
    $("#radio").buttonset();
});



// change function from gamble
function gamble() {
    var randomChoice = Math.random();
    var threeChoice = Math.floor(randomChoice * 3);
    var fate = document.getElementsByName("fate");

    for (i = 0; i < fate.length; i++) {
        currentFate = fate[i];

        if (currentFate.checked) {
            var selectedFate = currentFate.value;
        } // end if
    } // end for
     // Array order Paper rock scissors
    var cpuChoice = new Array("Risky", "Unknown", "Safe")
    var reply = "xxx"
    if (threeChoice === 0) {
        if (selectedFate === "Risky") {
            reply = "I agree with you, I Suggest the Barnyard.";
        }
        else if (selectedFate === "Unknown") {
            reply = "I Shouldn't Answer this, it's your decision.";
        }
        else if (selectedFate === "Safe") {
            reply = "I Suggest the Church, you'll find more people and less zombies, Unless the Church is already Over run with the living dead!";
        }
        else {
            reply = "what1";
        }
    } else if (threeChoice === 1) {
        if (selectedFate === "Risky") {
            reply = "Are you sure you acknowledged rick and cindy's full plan?";
        }
        else if (selectedFate === "Unknown") {
            reply = "With foresight, I depict the Church as the safest route and cindy's plan to utilize her family farm as the second part";
        }
        else if (selectedFate === "Safe") {
            reply = "Are you sure you acknowledged Ted, Vic and Shan's full plan?";
        }
        else {
            reply = "what2";
        }
    } else if (threeChoice === 2) {
        if (selectedFate === "Risky") {
            reply = "I wouldn't goto the Bloody Barnyard if you want your family to live over all others.";
        }
        else if (selectedFate === "Unknown") {
            reply = "I Shouldn't Answer this, you should review their plans and not take my advice.";
        }
        else if (selectedFate === "Safe") {
            reply = "I suggest you assert going to the church first, it's too dark to goto a barnyard alone.";
        }
        else {
            reply = "what3";
        }
    } else {
        reply = "hay now?";
    }
    var output = document.getElementById("output");
    var response = "<h2>You have chosen ";
    response += selectedFate + "<h2>The CPU has chosen ";
    "<\/h2> \n";
    response += cpuChoice[threeChoice] + "<\/h2> \n";
    response += reply + "<\/h2> \n";
    output.innerHTML = response;
}

