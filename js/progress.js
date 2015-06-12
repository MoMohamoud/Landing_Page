$("#payment-form input").keyup(function() {
  
 var numValid = 0;
$("#payment-form input[required]").each(function() {
    if (this.validity.valid) {
        numValid++;
    }
});

// "Cached" somewhere once
var progress = $("#progress"),
    progressMessage = $("#progressMessage");

// Logic that runs after counting every time
if (numValid == 0) {
    progress.attr("value", "0");
    progressMessage.text("The form, it wants you.");
}
if (numValid == 1) {
    progress.attr("value", "20");
    progressMessage.text("There you go, great start!");
}
if (numValid == 2) {
    progress.attr("value", "50");
    progressMessage.text("There you go, great start!");
}
if (numValid == 3) {
    progress.attr("value", "100");
    progressMessage.text("There you go, great start!");
}

});

