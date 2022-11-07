let x = 0;

$('#bt').click(doClick);
$('#bt1').click(doClick);
$('#bt2').click(doClick);
$('#bt3').click(doClick);
$('#bt4').click(doClick);
$('#bt5').click(doClick);
$('#bt6').click(doClick);
$('#bt7').click(doClick);
$('#bt8').click(doClick);

function doClick(e) { 
    if(x == 0 || x == 2 || x == 4 || x == 6 || x == 8) 
    {
        $(this).css({color: "red", border: "2px solid red"});
        $(this).parents("td").css({border: "2px solid red"});
        $(this).text("X");
        $(this).attr("disabled", true);
        $(this).fontsize = "30px";
        x++;
    }
    else if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9)
    {
        $(this).css({color: "blue", border: "2px solid blue"});
        $(this).parents("td").css({border: "2px solid blue"});
        $(this).text("O");
        $(this).attr("disabled", true);
        $(this).fontsize = "30px";
        x++;
    }
}
    
$(document).ready(function () {
    $("#reset").click(function () {
        x = 0;
        location.reload();
});
});


$(document).ready(function () {
    $("#btn").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
});
});

$(document).ready(function () {
    $("#btn1").click(function () {
        $("#p1").load("TXT/text.txt");
});
});