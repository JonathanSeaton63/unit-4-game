$(document).ready(function () {
    var targetNumber = "";
    var circleBtn;
    var xBtn;
    var squareBtn;
    var triangleBtn;
    var score = 0;
    var wins = 0;
    var losses = 0;

    function gameStart() {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        var icons = [$(".circle"), $(".x"), $(".square"), $(".triangle")];
        var button = [circleBtn, xBtn, squareBtn, triangleBtn];
        for (var i = 0; i < icons.length; i++) {
            button[i] = icons[i].attr("data-number", Math.floor(Math.random() * 12) + 1);
            console.log(score)
        };

        $("#targetNum").html(targetNumber);
        $("#wins").html(wins);
        $("#losses").html(losses);
        $("#score").html(score);
    }

    gameStart();

    $(".buttonImages img").on("click", function () {
        score += parseInt($(this).attr("data-number"));
        $("#score").html(score);
        if (score == targetNumber) {
            wins++;
            alert("Way To Mash Those Buttons!")
            score=0;
            gameStart();
        }
        else if (score > targetNumber) {
            losses++;
            alert("Game Over. Try Mashing Them Harder?")
            score=0;
            gameStart();

        }
    });
});

