// var clickEvent = ((document.ontouchstart !== null) ? 'click' : 'touchstart');
var awid;

$('.guest_games_btn').on('touchstart click', function(event) {
    status_game = 'guest';
    TweenMax.to(".zadanie_block", 0.2, {
        autoAlpha: 1,
        delay: 0.5,
        onComplete: anZadachI
    });
    // console.log(event.target);

    TweenMax.to(".global_window", 0.2, {
        autoAlpha: 0
    });
    usErHod();
    st_game[0] = null;

    autor = 0;

    console.log(st_game);

    stZaDach();
});

function anZadachI() {

    var dm_zadach = $('.btn_box').children().length;
    if (dm_zadach !== 0) {

        TweenMax.staggerFromTo([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, 0.1);

    }
}
$('.resaul_game_btn').click(function() {
    TweenMax.to(".block_info", 0.2, {
        autoAlpha: 1
    });
    tImEruSer();

    /*todo*/
});
$('.hi_works_btn').click(function() {
    TweenMax.to(".wtf", 0.2, {
        autoAlpha: 1,
        delay: 0.2
    });
    TweenMax.to(".global_window", 0.1, {
        autoAlpha: 0
    });
});
$('.user_btn_wtf').click(function() {
    TweenMax.to(".wtf", 0.2, {
        autoAlpha: 1,
        delay: 0.2
    });
    TweenMax.to(".block_game", 0.1, {
        autoAlpha: 0
    });
});
var pages = '';
$('.wtf_bac').click(function() {
    if (pages == 'gs') {
        TweenMax.to(".wtf", 0.2, {
            autoAlpha: 0
        });
        TweenMax.to(".global_window", 0.1, {
            autoAlpha: 1,
            delay: 0.2
        });
    } else if (pages == 'geym') {
        TweenMax.to(".wtf", 0.2, {
            autoAlpha: 0
        });
        TweenMax.to(".block_game", 0.1, {
            autoAlpha: 1,
            delay: 0.2
        });
    }

});

$('.user_btn_bac_zadach').click(function() {
    TweenMax.to(".zadanie_block", 0.2, {
        autoAlpha: 1,
        delay: 0.5
    });
    TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.1, {
        autoAlpha: 0,
        delay: 0.5
    }, 0.1);
    TweenMax.to(".block_game", 0.2, {
        autoAlpha: 0
    });
    TweenMax.to([".splash_game ", '.game_quest_block', '.rex'], 0.2, {
        autoAlpha: 0
    });
    clearInterval(times_val);
    $("#image> div").remove();
    $(".game_quest_btn>p").remove();

    console.log('Заново ИГРУ');
    $('*').siblings().removeClass('fiasco');

});
$('.user_btn_back').click(function() {

    TweenMax.to(".zadanie_block", 0.2, {
        autoAlpha: 1,
        delay: 0.5
    });
    TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.2, {
        autoAlpha: 0,
        delay: 0.5
    }, 0.25);
    TweenMax.to(".block_game", 0.2, {
        autoAlpha: 0
    });
    TweenMax.to([".splash_game ", '.game_quest_block', '.rex'], 0.2, {
        autoAlpha: 0
    });
    clearInterval(times_val);
    $("#image> div").remove();
    $(".game_quest_btn>p").remove();


    $('*').siblings().removeClass('fiasco');

});
var cos = 0;
$('.btn_bac').click(function() {
    TweenMax.to(".block_info", 0.2, {
        autoAlpha: 0
    });
    clearInterval(user_get);

    if (cos == 1) {
        TweenMax.to(".bloc_user_id", 0.2, {
            autoAlpha: 0
        });
        TweenMax.to(".global_window", 0.2, {
            autoAlpha: 1
        });

        $(".user_bloc_zad_user_id> div").remove();
        cos = 0;
    }
});
$('.btn_bac_s').click(function() {

    if (autor !== 0) {
        TweenMax.to(".block_exit_wrapp", 0.2, {
            autoAlpha: 1
        });
        TweenMax.from(".user_bloc_exit", 0.2, {
            autoAlpha: 0,
            scale: 1.2,
            ease: Back.easeOut
        });
    }

});
$('.btn_push_y').click(function() {

    TweenMax.to(".bloc_user_id", 0.2, {
        autoAlpha: 0,
        onComplete: oUtLOg
    });
    TweenMax.to(".global_window", 0.2, {
        autoAlpha: 1,
        delay: 0.2
    });
    $(".user_bloc_zad_user_id> div").remove();
    TweenMax.to(".wrapp_push", 0.2, {
        autoAlpha: 0
    });
    TweenMax.to(".zadanie_block", 0.2, {
        autoAlpha: 0
    });

});
$('.btn_push_n').click(function() {
    TweenMax.to(".wrapp_push", 0.2, {
        autoAlpha: 0
    });
});
$('.user_to_game').click(function() {
    userApruv();
    status_game = 'approved';
    TweenMax.to(".bloc_user_id", 0.5, {
        autoAlpha: 0
    });
    TweenMax.set(".global_window", {
        autoAlpha: 0
    });
    TweenMax.to(".zadanie_block", 0.2, {
        autoAlpha: 1,
        delay: 1,
        onComplete: anZadachI
    });


    usErHod();

});
$('.user_btn_y').click(function() {

    TweenMax.to(".bloc_user_id", 0.2, {
        autoAlpha: 0
    });
    TweenMax.to(".global_window", 0.2, {
        autoAlpha: 1
    });
    TweenMax.to(".block_exit_wrapp", 0.2, {
        autoAlpha: 0
    });


    $(".user_bloc_zad_user_id> div").remove();
    oUtLOg();
});
$('.btn_toResult_game').click(function() {
    TweenMax.to(".block_info", 0.2, {
        autoAlpha: 1
    });
    TweenMax.to(".zadanie_block", 0.2, {
        autoAlpha: 0
    });
    tImEruSer();
    cos = 1;
});

$('.user_btn_n').click(function() {
    TweenMax.to(".block_exit_wrapp", 0.2, {
        autoAlpha: 0
    });
});

$('.user_to_exit').click(function() {
    TweenMax.to(".block_exit_wrapp", 0.2, {
        autoAlpha: 1
    });
    TweenMax.from(".user_bloc_exit", 0.2, {
        autoAlpha: 0,
        scale: 1.2,
        ease: Back.easeOut
    });
});
$('.btn_bac_n').click(function() {

    if (autor !== 0) {
        TweenMax.from(".push_block", 0.2, {
            autoAlpha: 0,
            scale: 1.2,
            ease: Back.easeOut
        });
        TweenMax.to(".wrapp_push", 0.2, {
            autoAlpha: 1
        });

    } else {
        TweenMax.to(".zadanie_block", 0.2, {
            autoAlpha: 0
        });
        TweenMax.to(".global_window", 0.2, {
            autoAlpha: 1,
            delay: 0.5
        });

        TweenMax.set(".nz", {
            autoAlpha: 0
        });

    }
    pages = 'gs';
});

function usErHod() {
    if (status_game == 'guest') {
        TweenMax.set('.user_block_autor', { autoAlpha: 0 });
        TweenMax.set('.urus', {
            autoAlpha: 0
        });
        TweenMax.set('.user_bloc_guest', {
            autoAlpha: 1
        });
        TweenMax.set('.guest', {
            autoAlpha: 1
        });
    }
    if (status_game == 'approved') {
        TweenMax.set('.user_block_autor', {
            autoAlpha: 1
        });
        TweenMax.set('.urus', {
            autoAlpha: 1
        });
        TweenMax.set('.user_bloc_guest', { autoAlpha: 0 });
        TweenMax.set('.guest', {
            autoAlpha: 0
        });
        stZaDach();
    }
};



function oUtLOg() {
    $(".user_block_autor> div").remove();
    st_game = {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null
    }
    console.log(st_game);
    console.log('Назад', user);
}

$('.btn_out_yes').on('click', function() {
    TweenMax.to(".wrapp_out", 0.1, {
        autoAlpha: 0
    });
    TweenMax.to(".btn_out", 0.2, {
        autoAlpha: 0,
        scale: 1,
        ease: Back.easeOut
    });
    sxh = 10;
    spTm = 0;
    $('#sec').html(sxh);
    clearInterval(it);
});
$('.btn_out_net').on('click', function() {
    window.location.reload(false);
});



$('.game_quest_block>').on('click', function() {
    clearInterval(ge_tim);
    var ns_valid = $(this).attr('valid');
    awid = $(this).attr('awid'); //id кнопки

    if (ns_valid == 1) {

        TweenMax.to(".splash_game", 0.3, {
            autoAlpha: 1
        });
        $("#image div").off("click");



        poStData();
        st_game[game_obj.id_tasc - 1] = true;
        stZaDach();
    } else {

        $(".game").addClass('fiasco');
        $(".game_quest_block").addClass('fiasco');
        baCGame(4);


        poStData();
        st_game[game_obj.id_tasc - 1] = false;
        stZaDach();
    }




});

function poStData() {
    $.ajax({
        type: 'POST',
        url: 'https://api.msk-day.ru/puzzle/poi-task/14391be72342662f13306081dd13c699.json',
        contentTaype: ' application/json',
        data: ({
            "device_id": user.did,
            "task_id": game_obj.id_tasc,
            "turns": window.moves,
            "seconds": dr,
            "answer_id": awid
        }),
        success: function(data) {
            console.log(data);
        }

    });
}
var sk = 0;
var inactivityTime = function() {
    var t;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {

        clearTimeout(t);
        TweenMax.to(".wrapp_out", 0.1, {
            autoAlpha: 1
        });
        TweenMax.to(".btn_out", 0.1, {
            autoAlpha: 1
        });
        TweenMax.from(".btn_out", 0.2, {
            scale: 1.2,
            ease: Back.easeOut
        });
        tp();
        console.log(sk++);
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(logout, 60000);
        console.log('timer stop');
    }
};

var it;
var sxh = 10;
var tp = function() {
    it = setInterval(function() {
        sxh--;
        $('#sec').html(sxh);
        if (sxh < 1) {
            window.location.reload(false);
        }
    }, 1000);
}