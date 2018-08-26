var dr;
var TotallTime = 15; //всего времени на игру
var TotallSteps = 15; //Шагов
var times_val;
var fiveMinutes, display, stat, pos_z = 0;
var way_topics;
var b_zadach;
var status_game = 'resaul';
$(function() {

    var tt = $.ajax({
        url: 'https://api.msk-day.ru/puzzle/poi-task/8e08f29980d54010e345e7feec269216.json',
        success: function(data) {
            b_zadach = data;
            for (var i = 0; i < data.length; i++) {
                $('.btn_box').append('<div class="nz nz' + data[i].taskNumber + '" id="' + data[i].taskNumber + '" ><div class="fon_zad blur" style="background-image:url(' + data[i].imageUrl + ')" ></div><div class="fi kz' + data[i].taskNumber + '"  style="background-image: url(../img/fish/f' + data[i].taskNumber + '.svg)"></div><div class="plash_bler"><span>ПРИСТУПИТЬ К ЗАДАНИЮ</span><div id="icon"></div></div></div>');
            }
        }
    });

    $(document).on('click', '.nz', function() {
        var im = Number.parseInt($(this).attr('id') - 1);
        vOiData(im);
        console.log(im);
        console.log(status_game);

    });

    function vOiData(n) {
        TweenMax.to("#images", 0.5, { autoAlpha: 1, delay: 0.5 });
        TweenMax.from("#image", 0.5, { autoAlpha: 0, delay: 2 });
        if (stat == 0) {
            $("#image").removeClass('fiasco');
        }
        appGame();
        way_topics = b_zadach[n].imageUrl;
        $('#images').css('background-image', `url(${way_topics})`);
        $('#image div').css('background-image', `url(${way_topics})`);
        TweenMax.fromTo('.rex', 0.6, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            delay: 2,
            ease: Back.easeOut
        });
        TweenMax.to(".zadanie_block", 0.5, {
            autoAlpha: 0
        });
        TweenMax.to(".block_game", 0.5, {
            autoAlpha: 1
        });
        if (pos_z == 0) {

        } else {
            $("#time").html("10:00");
        }
        pos_z = 1;
    }

    // конец получения данных
    $(".rex").on("click", function() {
        TweenMax.to('.rex', 0.6, { autoAlpha: 0 });
        fiveMinutes = 60 * 10;
        display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
        TweenMax.to("#images", 0.5, { autoAlpha: 0 });

        dr = 0;
    });

    function appGame() {
        //Start game

        startGame();


        function startGame() {
            moves = 0;
            window.moves = 0;
            $("#hod").html(window.moves);

            // massiv
            //var arr = new Array(14, 2, 10, 6, 12, 13, 9, 7, 15, 8, 5, 11, 4, 1, 3, 16);
            var arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
            var strClass = "";
            for (i = 0; i < arr.length; i++) {
                if (i == (arr.length - 1))
                    strClass = " pointer";

                $("#image").append('<div id="pos' + (i + 1) + '" class=" sq' + arr[i] + strClass + '"></div>');
            }
            // $("#counter span").html("0");
            // $("#clock span").html("10:00");

            window.index = 0;
            movePiece();
        }

        // Move square
        function movePiece() {
            $("#image div").on("click", function() {
                if (!$(this).hasClass("pointer")) {
                    var $moveTo = $(this).attr("id").replace("pos", "");
                    var $pointer = $(".pointer").attr("id").replace("pos", "");
                    //console.log($(this).attr("id").replace("pos", ""));
                    if (validMove($pointer, $moveTo)) {
                        // Swap classes
                        var a = $(this);
                        var b = $(".pointer");
                        var aClass = a.attr("class");
                        var bClass = b.attr("class");
                        a.removeClass(aClass).addClass(bClass);
                        b.removeClass(bClass).addClass(aClass);

                        window.moves++;
                        $("#hod").html(window.moves);
                        if (window.moves > TotallSteps)
                            isGameStop();
                        // Check if the puzzle is complete
                        if (parseInt($moveTo) == 16)
                            isGameOver();
                    }
                }
            });
        }

        // Validate user's move
        function validMove(id, move) {
            if (id == 1)
                var arr = new Array(2, 5);
            else if (id == 2)
                var arr = new Array(1, 3, 6);
            else if (id == 3)
                var arr = new Array(2, 4, 7);
            else if (id == 4)
                var arr = new Array(3, 8);
            else if (id == 5)
                var arr = new Array(1, 6, 9);
            else if (id == 6)
                var arr = new Array(2, 5, 7, 10);
            else if (id == 7)
                var arr = new Array(3, 6, 8, 11);
            else if (id == 8)
                var arr = new Array(4, 7, 12);
            else if (id == 9)
                var arr = new Array(5, 10, 13);
            else if (id == 10)
                var arr = new Array(6, 9, 11, 14);
            else if (id == 11)
                var arr = new Array(7, 10, 12, 15);
            else if (id == 12)
                var arr = new Array(8, 11, 16);
            else if (id == 13)
                var arr = new Array(9, 14);
            else if (id == 14)
                var arr = new Array(10, 13, 15);
            else if (id == 15)
                var arr = new Array(11, 14, 16);
            else if (id == 16)
                var arr = new Array(12, 15);

            if ($.inArray(parseInt(move), arr) > -1)
                return true;
        }

        // Work out if game is over
        function isGameOver() {

            for (i = 1; i <= 16; i++) {
                if (!$("#image #pos" + i).hasClass("sq" + i)) {

                    break;
                } else {
                    if (i == 16) {
                        clearInterval(times_val);
                        stat = 1;
                        $("#pos16").removeClass("pointer");
                        $("#image div").off("click");
                        TweenMax.to(".btn_box", 0.5, { autoAlpha: 1 });
                        console.log('победа');
                        console.log("Потрченно времени:" + dr);
                        console.log("Количество шагов:" + moves);
                    }
                }
            }
        }
    }
});

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    times_val = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if (dr < TotallTime) {
            dr++;
        } else {
            clearInterval(times_val);
            isGameStop();
        }
    }, 1000);
}

function isGameStop() {
    stat = 0;
    clearInterval(times_val);
    $("#image div").off("click");
    console.log("Не победа");
    console.log("Потрченно времени:" + dr);
    console.log("Количество шагов:" + moves);
    $("#image").addClass('fiasco');
    TweenMax.to(".btn_box", 0.5, { autoAlpha: 1 });
}