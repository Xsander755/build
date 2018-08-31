var dr;
var TotallTime = 150; //всего времени на игру
var TotallSteps = 150; //Шагов
var times_val;
var fiveMinutes, display, stat, pos_z = 0;
var way_topics;
var b_zadach;
var status_game = 'resaul';
var game_obj;
var ge_tim;


function iniGame() {
    game_obj = {
        id_tasc: '',
        status: '',
        answers: '',
        qest_time: '',
        answers_id: ''
    }
    var tt = $.ajax({
        url: 'https://api.msk-day.ru/puzzle/poi-task/8e08f29980d54010e345e7feec269216.json',
        success: function(data) {
            b_zadach = data;
            console.log(data);
            $.each(data, function(i) {
                $('.btn_box').append('<div class="nz urda' + [i] + ' nz' + data[i].taskNumber + '" id="' + data[i].taskNumber + '" ><div class="fon_zad blur" style="background-image:url(' + data[i].imageUrl + ')" ></div><div class="fi kz' + data[i].taskNumber + '"  style="background-image: url(img/fish/f' + data[i].taskNumber + '.svg)"></div><div class="plash_bler"><span>ПРИСТУПИТЬ К ЗАДАНИЮ</span><div id="icon"></div></div></div>');

            });
            console.log(data);

        }
    });
    var per_num;
    $(document).on('click', '.nz', function rc() {
        var im = Number.parseInt($(this).attr('id') - 1);
        per_num = im;
        vOiData(im);
        game_obj.id_tasc = b_zadach[im].taskNumber;
        game_obj.status = b_zadach[im].result.completed;
        game_obj.qest_time = b_zadach[im].maxAnswerSeconds;
        game_obj.answers = b_zadach[im].answers;

        $.each(game_obj.answers, function(i) {
            console.log(game_obj.answers[i].content);
            $(".game_quest_btn" + (i + 1)).html('<p>' + game_obj.answers[i].content + '</p>').attr('valid', game_obj.answers[i].valid).attr('awid', game_obj.answers[i].id);
            $('.game_timer').html('<p>' + game_obj.qest_time + '</p>');
        })
        console.log(game_obj);
        console.log(b_zadach[im].imageUrl);
        pages = 'geym';

    });

    $('.user_btn_back').click(function() {
        $("#image> div").remove();
        $(".game_quest_btn>p").remove();
        var im = Number.parseInt($(this).attr('id') - 1);
        vOiData(per_num);
        dr = 0;
        tems = 0;
        window.moves = 0;
        clearInterval(times_val);
        $("#image div").on("click");
        appGame();
    });

    function vOiData(n) {
        TweenMax.to("#images", 0.2, { autoAlpha: 1, delay: 0.5 });
        TweenMax.from("#image", 0.2, { autoAlpha: 0, delay: 2 });
        if (stat == 0) {
            $("#image").removeClass('fiasco');
        }
        appGame();
        way_topics = b_zadach[n].imageUrl;
        console.log(way_topics);
        $('#images').css('background-image', `url(${way_topics})`);
        $('#image div').css('background-image', `url(${way_topics})`);
        TweenMax.fromTo('.rex', 0.2, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            delay: 2,
            ease: Back.easeOut
        });
        TweenMax.to(".zadanie_block", 0.2, {
            autoAlpha: 0
        });
        TweenMax.to(".block_game", 0.2, {
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
        TweenMax.to('.rex', 0.2, { autoAlpha: 0 });
        fiveMinutes = 60 * 10;
        display = document.querySelector('#time');

        TweenMax.to("#images", 0.2, { autoAlpha: 0 });
        TweenMax.to("#image", 0.2, {
            autoAlpha: 1
        });
        TweenMax.to([".ars", '.strelka'], 0.2, {
            autoAlpha: 1,

            ease: Back.easeOut,
            delay: 0.2,
            onComplete: tec
        });
        dr = 0;
        tems = 0;
    });
    var arrs;
    var tems;

    function tec() {
        if (tems == 0) {
            arrs = setTimeout(function() {
                TweenMax.to([".ars", '.strelka'], 0.4, {
                    autoAlpha: 0,

                    ease: Back.easeOut
                });
                startTimer(fiveMinutes, display);
            }, 2000);
            tems = 1;
        }
    }

    function appGame() {
        //Start game

        startGame();


        function startGame() {
            moves = 0;
            window.moves = 0;
            $("#hod").html(window.moves);

            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            }

            // massiv
            //var arr = new Array(14, 2, 10, 6, 12, 13, 9, 7, 15, 8, 5, 11, 4, 1, 3, 16);
            var mm = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);


            var arr = shuffleArray(mm);
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
                        TweenMax.to(".btn_box", 0.2, { autoAlpha: 1 });
                        TweenMax.to(".game_quest_block", 0.2, {
                            autoAlpha: 1,
                            delay: 1,
                            onComplete: initGame_timer
                        });
                    }
                }
            }
        }
    }
}

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
    st_game[game_obj.id_tasc - 1] = false;
    stZaDach();
    clearInterval(times_val);
    $("#image div").off("click");
    $("#image").addClass('fiasco');
    TweenMax.to(".btn_box", 0.2, {
        autoAlpha: 1,
        onComplete: baCGame,
        onCompleteParams: [8]
    });

    $(".game").addClass('fiasco');
    $(".game_quest_block").addClass('fiasco');
    baCGame(4);
}

function initGame_timer() {
    var cc = game_obj.qest_time;
    console.log(cc);
    ge_tim = setInterval(function() {
        if (cc > 0) {
            cc--;
            $('.game_timer>p').html(cc)
            console.log(cc);
        } else {
            clearInterval(ge_tim);
            console.log(ge_tim);
            $(".game").addClass('fiasco');
            $(".game_quest_block").addClass('fiasco');
            baCGame(3);
        }
    }, 1000);
}

function baCGame(tm_in) {
    setTimeout(function() {
        TweenMax.to(".zadanie_block", 0.5, {
            autoAlpha: 1,
            delay: 0.6
        });

        TweenMax.to([".block_game", ".game_quest_block"], 0.2, {
            autoAlpha: 0
        });
        clearInterval(times_val);
        $("#image> div").remove();
        $(".game_quest_btn>p").remove();

        console.log('Заново ИГРУ');
        $('*').siblings().removeClass('fiasco');
    }, tm_in * 1000);
}