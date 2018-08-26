$('.guest_games_btn').click(function() {
    status_game = 'guest';
    cLozAllBlocs();
    toZa();
    console.log('guest_game');
    console.log(status_game);
});
/*Игра на  Результат*/
$('.resaul_game_btn').click(function() {

    tImEruSer();
    console.log(status_game);
    console.log('Запуск QR на результат');
});
$('.user_to_game').click(function() {
    toInf();
    tImEruSer();
    console.log(status_game);
    console.log('Запуск QR на результат');
});
/*Игра на  Результат конец*/
$('.hi_works_btn').click(function() {
    toInf();
    console.log('Как это работает?');
});
$('.user_btn_wtf').click(function() {
    toInf();
    console.log('Как это работает?');
});
$('.user_btn_bac_zadach').click(function() {
    cLozAllBlocs();
    toZa();
    clearInterval(times_val);
    $("#image> div").remove();
    console.log('К списку задач');
});
$('.user_btn_back').click(function() {
    cLozAllBlocs();
    toZa();
    clearInterval(times_val);
    $("#image> div").remove();
    console.log('Заново ИГРУ');

});
$('.btn_bac').click(function() {
    cLozAllBlocs();
    clearInterval(user_get);
    console.log('т отключен');
    console.log('Назад');
});
$('.btn_bac_s').click(function() {
    cLozAllBlocs();
    TweenMax.to(".global_window", 0.5, {
        autoAlpha: 1,
        delay: 0.8
    });
    console.log('Назад');
});
$('.user_to_game').click(function() {
    console.log('Начать игру на стенде');
});
$('.user_to_exit').click(function() {
    console.log('Отменить и выйти');
});
$('.btn_bac_n').click(function() {
    cLozAllBlocs();
    toGl();
    TweenMax.to(".btn_box", 0.5, {
        autoAlpha: 1,
        delay: 0.8
    });
    console.log('В начало');
});

function cLozAllBlocs() {
    TweenMax.set([".zadanie_block", '.zastavka', '.global_window', 'block_game', '.bloc_user_id', '.zadanie_block', '.block_info', '.block_window', '.push_block'], {
        autoAlpha: 0
    });
}

function toGl() {
    TweenMax.to(".global_window", 1, {
        autoAlpha: 1
    });
}

function toZa() {
    TweenMax.to(".zadanie_block", 0.5, {
        autoAlpha: 1,
        delay: 0.5
    });
    TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.5, {
        autoAlpha: 0,
        delay: 0.8
    }, 0.25);
}

function toInf() {
    TweenMax.to(".block_info", 0.5, {
        autoAlpha: 1,
        ddelay: 0.5
    });
}