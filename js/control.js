$('.guest_games_btn').click(function() {
    status_game = 'guest';
    TweenMax.to(".zadanie_block", 0.5, {
        autoAlpha: 1,
        delay: 0.5
    });
    TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.5, {
        autoAlpha: 0,
        delay: 1
    }, 0.25);
    TweenMax.to(".global_window", 0.5, {
        autoAlpha: 0
    });
    usErHod();
});

$('.resaul_game_btn').click(function() {
    TweenMax.to(".block_info", 0.5, {
        autoAlpha: 1
    });
    tImEruSer();
    console.log(status_game);
    console.log('Запуск QR на результат');
    /*todo*/
});
$('.hi_works_btn').click(function() {
    TweenMax.to(".block_info", 0.5, {
        autoAlpha: 1
    });
    console.log('Как это работает?');
});
$('.user_btn_wtf').click(function() {
    TweenMax.to(".block_info", 0.5, {
        autoAlpha: 1
    });
    console.log('Как это работает?');
});
$('.user_btn_bac_zadach').click(function() {
    TweenMax.to(".zadanie_block", 0.5, {
        autoAlpha: 1
    });
    TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.5, {
        autoAlpha: 0,
        delay: 0.8
    }, 0.25);
    TweenMax.to(".block_game", 0.5, {
        autoAlpha: 0
    });
    clearInterval(times_val);
    $("#image> div").remove();
    console.log('К списку задач');
});
$('.user_btn_back').click(function() {
    TweenMax.to(".zadanie_block", 0.5, {
        autoAlpha: 1
    });
    TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.5, {
        autoAlpha: 0,
        delay: 0.5
    }, 0.25);
    TweenMax.to(".block_game", 0.5, {
        autoAlpha: 0
    });
    clearInterval(times_val);
    $("#image> div").remove();
    $(".game_quest_btn>p").remove();

    console.log('Заново ИГРУ');

});
$('.btn_bac').click(function() {
    TweenMax.to(".block_info", 0.5, {
        autoAlpha: 0
    });
    TweenMax.to(".bloc_user_id", 0.5, {
        autoAlpha: 0
    });
    TweenMax.to(".global_window", 0.5, {
        autoAlpha: 1
    });
    clearInterval(user_get);
    $(".user_bloc_zad_user_id> div").remove();
    console.log('т отключен');
    console.log('Назад');
});
$('.btn_bac_s').click(function() {
    oUtLOg();
    TweenMax.to(".bloc_user_id", 0.5, {
        autoAlpha: 0,
        onComplete: oUtLOg
    });
    TweenMax.to(".global_window", 0.5, {
        autoAlpha: 1,
        delay: 0.2
    });
    $(".user_bloc_zad_user_id> div").remove();

    console.log('Назад', user);
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
    TweenMax.to(".zadanie_block", 0.5, {
        autoAlpha: 1,
        delay: 1
    });

    TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.5, {
        autoAlpha: 0,
        delay: 1
    }, 0.25);
    console.log('Начать игру на стенде');
    usErHod();
});
$('.user_btn_y').click(function() {

    TweenMax.to(".bloc_user_id", 0.5, {
        autoAlpha: 0
    });
    TweenMax.to(".global_window", 0.5, {
        autoAlpha: 1
    });
    TweenMax.to(".block_exit_wrapp", 0.5, {
        autoAlpha: 0
    });

    console.log('Отменить и выйти');
    $(".user_bloc_zad_user_id> div").remove();
    oUtLOg();
});
$('.btn_toResult_game').click(function() {
    TweenMax.to(".block_info", 0.5, {
        autoAlpha: 1
    });
    TweenMax.to(".zadanie_block", 0.5, {
        autoAlpha: 0
    });
    tImEruSer();
});

$('.user_btn_n').click(function() {
    TweenMax.to(".block_exit_wrapp", 0.5, {
        autoAlpha: 0
    });
});

$('.user_to_exit').click(function() {
    TweenMax.to(".block_exit_wrapp", 0.5, {
        autoAlpha: 1
    });
    TweenMax.from(".user_bloc_exit", 0.4, {
        autoAlpha: 0,
        scale: 1.2,
        ease: Back.easeOut
    });
});
$('.btn_bac_n').click(function() {
    TweenMax.to(".zadanie_block", 0.5, {
        autoAlpha: 0,
        onComplete: oUtLOg
    });
    TweenMax.to(".global_window", 0.5, {
        autoAlpha: 1,
        delay: 0.2
    });
    TweenMax.to(".btn_box", 0.5, {
        autoAlpha: 1,
        delay: 0.2
    });
    $(".user_bloc_zad_user_id> div").remove();

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
    }
};

function stZaGame() {

}

function oUtLOg() {
    $(".user_block_autor> div").remove();
    user = null;
    data = null;
    console.log('Назад', user);
}

$('.game_quest_block>').on('click', function() {
    var ns_valid = $(this).attr('valid');

    if (ns_valid == 1) {
        console.log("victori");
        console.log(ns_valid);
    } else {
        console.log("fiasko");
        console.log(ns_valid);
    }
});