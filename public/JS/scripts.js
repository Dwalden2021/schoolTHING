$(document).ready(function () {
    $("#btn").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
});
});

$(document).ready(function () {
    $("#btn1").click(function () {
        $("#p1").load("text.txt");
});
});

$(document).ready(function () {
    $("#bt").click(function () {
        $("#bt").parents("td").css({color: "red", border: "2px solid yellow"});
});
});