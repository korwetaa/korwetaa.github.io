$(document).ready(function(){
    $("#go").click(function(){
        $("#out").removeClass("d-none");
        start();
    });
    $("#shutdown").click(function(){
        $("#out").addClass("d-none");
        shutdown();
    });

    $("#back").click(function(){
        window.location.replace("../modules.php")
    });
});

function start(){
    $("#go").prop('disabled', true);
    jQuery.ajax({
        url: "../../includes/pid.php",
        type: "POST",
        dataType: "json",
        data: {
            method: "busting"
        }
    });
}

function shutdown(){
    $("#shutdownMsg").html("Cleaning up...");
    jQuery.ajax({
        url: "http://"+IP+":5556/shutdown",
        type: "POST",
        dataType: "json",
    });
    window.setTimeout(function(){
        $("#go").removeAttr("disabled");
        $("#shutdownMsg").html("");
    }, 2500);
}
