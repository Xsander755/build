var user_get;
var сount_aut = 0;
var user;
var st_game = new Object();
user = {
    id: '',
    name: '',
    picture: '',
    source: '',
    step: '',
    time: '',
    oneEighth: '',
    resault: '',
    did: ''

}
st_game = {

}
var urls = 'https://api.msk-day.ru/puzzle/poi-poi/' + token + '/check-activation.json'

function aUtoRization() {
    console.log(urls);
    $.ajax({
        type: 'get',
        url: urls,
        contentTaype: ' application/json',
        success: function(data) {
            user.id = data.user.id;
            user.name = data.user.name;
            user.picture = data.user.picture;
            user.source = data.user.source;
            user.step = data.userRating.turns;
            user.time = data.userRating.seconds;
            user.oneEighth = data.userRating.tasks;
            user.resault = data.tasks;
            user.did = data.deviceId;
            autor = 1;
            console.log(data.deviceId);
            $.each(data.tasks, function(i) {

                var lams = data.tasks[i].result;

                if (lams == null) {
                    st_game[i] = lams;
                } else {

                    st_game[i] = lams.completed;
                }
                stGame();
            });
            console.log(data);
            clearInterval(user_get);
            iNfIll();

        }
    });

}

function stGame() {

}

function tImEruSer() {
    сount_aut = 0;
    user_get = setInterval(function() {
        if (сount_aut < 13) {
            aUtoRization();
            сount_aut++;
        } else {
            clearInterval(user_get);
            TweenMax.to(".block_info", 0.2, {
                autoAlpha: 0
            });
        }
    }, 2000);
}



function iNfIll() {
    $('.user_bloc_zad_user_id').append('<div class="us_phptp" style="background-image: url(' + user.picture +
        '");></div><div class="use_name"><p>' + user.name + '</p></div><div class="times">Время<br/><span>' + user.time +
        '</span></div><div class="stepss">Шаги<br/><span>' + user.step +
        '</span></div><div class="oneEighth">Задания:<br/><span>' + user.oneEighth + ' из 8</span></div>');

    $('.urus').append('<div class="us_phptp" style="background-image: url(' + user.picture +
        '");></div><div class="use_name ur"><p>' + user.name + '</p></div>');

    if (user.source == 1) {
        $('.user_to_exit').append('<div class="icon fb"></div>');
    }
    if (user.source == 2) {
        $('.user_to_exit').append('<div class="icon vk"></div>');
    }
    if (user.source == "google") {
        $('.user_to_exit').append('<div class="icon gog"></div > ');
    }

    TweenMax.to(".block_info", 0.2, {
        autoAlpha: 0
    });
    TweenMax.set(".global_window", {
        autoAlpha: 0
    });
    TweenMax.to(".bloc_user_id", 0.2, {
        autoAlpha: 1,
        delay: 0.8
    });

}

function userApruv() {
    $('.user_block_autor').append('<div class="ph_user_apr" style="background-image: url(' + user.picture +
        '");></div><div class="name_user_apr"><p>' + user.name + '</p></div><div class="times_user_apr">Время<br/><span>' + user.time +
        '</span></div><div class="step_user_apr">Шаги<br/><span>' + user.step +
        '</span></div>');
}

function stZaDach() {

    if (st_game[0] == false) {
        console.log("gruzim");
        TweenMax.set(".urda0 .plash_bler #icon", {
            background: 'url(img/los.svg)'
        });
        TweenMax.set(".urda0 .plash_bler", {
            backgroundColor: 'RGBA(237, 58, 95, 1)'
        });
        TweenMax.set(".urda0 .plash_bler span", {
            color: '#fff'
        });
        $('.urda0 .plash_bler span').text('ЗАДАНИЕ НЕ ВЫПОЛНЕНО');
        $('.urda0 .fon_zad').addClass('down');
    } else if (st_game[0] == true) {
        TweenMax.set(".urda0 .plash_bler #icon", {
            background: 'url(img/yes_icon.png)'
        });
        TweenMax.set(".urda0 .plash_bler", {
            backgroundColor: 'RGBA(37, 26, 93, 1)'
        });
        TweenMax.set(".urda0 .plash_bler span", {
            color: '#fff'
        });
        $('.urda0 .plash_bler span').text('ЗАДАНИЕ ВЫПОЛНЕНО!');
        $('.urda0 .fon_zad').removeClass('blur');
        $('.urda0 .fon_zad').removeClass('down');
    }


    if (st_game[1] == false) {

        TweenMax.set(".urda1 .plash_bler #icon", {
            background: 'url(img/los.svg)'
        });
        TweenMax.set(".urda1 .plash_bler", {
            backgroundColor: 'RGBA(237, 58, 95, 1)'
        });
        TweenMax.set(".urda1 .plash_bler span", {
            color: '#fff'
        });
        $('.urda1 .plash_bler span').text('ЗАДАНИЕ НЕ ВЫПОЛНЕНО');
        $('.urda1 .fon_zad').addClass('down');
    } else if (st_game[1] == true) {
        TweenMax.set(".urda1 .plash_bler #icon", {
            background: 'url(img/yes_icon.png)'
        });
        TweenMax.set(".urda1 .plash_bler", {
            backgroundColor: 'RGBA(37, 26, 93, 1)'
        });
        TweenMax.set(".urda1 .plash_bler span", {
            color: '#fff'
        });
        $('.urda1 .plash_bler span').text('ЗАДАНИЕ ВЫПОЛНЕНО!');
        $('.urda1 .fon_zad').removeClass('blur').removeClass('down');

    }
    if (st_game[2] == false) {

        TweenMax.set(".urda2 .plash_bler #icon", {
            background: 'url(img/los.svg)'
        });
        TweenMax.set(".urda2 .plash_bler ", {
            backgroundColor: 'RGBA(237, 58, 95, 1)'
        });
        TweenMax.set(".urda2 .plash_bler span", {
            color: '#fff'
        });
        $('.urda2 .plash_bler span').text('ЗАДАНИЕ НЕ ВЫПОЛНЕНО');
        $('.urda2 .fon_zad').addClass('down');
    } else if (st_game[2] == true) {
        TweenMax.set(".urda2 .plash_bler #icon", {
            background: 'url(img/yes_icon.png)'
        });
        TweenMax.set(".urda2 .plash_bler", {
            backgroundColor: 'RGBA(37, 26, 93, 1)'
        });
        TweenMax.set(".urda2 .plash_bler span", {
            color: '#fff'
        });
        $('.urda2 .plash_bler span').text('ЗАДАНИЕ ВЫПОЛНЕНО!');
        $('.urda2 .fon_zad').removeClass('blur').removeClass('down');
    }
    if (st_game[3] == false) {

        TweenMax.set(".urda3 .plash_bler #icon", {
            background: 'url(img/los.svg)'
        });
        TweenMax.set(".urda3 .plash_bler", {
            backgroundColor: 'RGBA(237, 58, 95, 1)'
        });
        TweenMax.set(".urda3 .plash_bler span", {
            color: '#fff'
        });
        $('.urda3 .plash_bler span').text('ЗАДАНИЕ НЕ ВЫПОЛНЕНО');
        $('.urda3 .fon_zad').addClass('down');
    } else if (st_game[3] == true) {
        TweenMax.set(".urda3 .plash_bler #icon", {
            background: 'url(img/yes_icon.png)'
        });
        TweenMax.set(".urda3 .plash_bler ", {
            backgroundColor: 'RGBA(37, 26, 93, 1)'
        });
        TweenMax.set(".urda3 .plash_bler span", {
            color: '#fff'
        });
        $('.urda3 .fon_zad').removeClass('blur').removeClass('down');
        $('.urda3 .plash_bler span').text('ЗАДАНИЕ ВЫПОЛНЕНО!');
    }

    if (st_game[4] == false) {

        TweenMax.set(".urda4 .plash_bler #icon", {
            background: 'url(img/los.svg)'
        });
        TweenMax.set(".urda4 .plash_bler", {
            backgroundColor: 'RGBA(237, 58, 95, 1)'
        });
        TweenMax.set(".urda4 .plash_bler span", {
            color: '#fff'
        });
        $('.urda4 .plash_bler span').text('ЗАДАНИЕ НЕ ВЫПОЛНЕНО');
        $('.urda4 .fon_zad').addClass('down');
    } else if (st_game[4] == true) {
        TweenMax.set(".urda4 .plash_bler #icon", {
            background: 'url(img/yes_icon.png)'
        });
        TweenMax.set(".urda4 .plash_bler", {
            backgroundColor: 'RGBA(37, 26, 93, 1)'
        });
        TweenMax.set(".urda4 .plash_bler span", {
            color: '#fff'
        });
        $('.urda4 .fon_zad').removeClass('blur').removeClass('down');
        $('.urda4 .plash_bler span').text('ЗАДАНИЕ ВЫПОЛНЕНО!');
    }
    if (st_game[5] == false) {

        TweenMax.set(".urda5 .plash_bler #icon", {
            background: 'url(img/los.svg)'
        });
        TweenMax.set(".urda5 .plash_bler ", {
            backgroundColor: 'RGBA(237, 58, 95, 1)'
        });
        TweenMax.set(".urda5 .plash_bler span", {
            color: '#fff'
        });
        $('.urda5 .plash_bler span').text('ЗАДАНИЕ НЕ ВЫПОЛНЕНО');
        $('.urda5 .fon_zad').addClass('down');
    } else if (st_game[5] == true) {
        TweenMax.set(".urda5 .plash_bler #icon", {
            background: 'url(img/yes_icon.png)'
        });
        TweenMax.set(".urda5 .plash_bler", {
            backgroundColor: 'RGBA(37, 26, 93, 1)'
        });
        TweenMax.set(".urda5 .plash_bler span", {
            color: '#fff'
        });
        $('.urda5 .fon_zad').removeClass('blur').removeClass('down');
        $('.urda5 .plash_bler span').text('ЗАДАНИЕ ВЫПОЛНЕНО!');
    }
    if (st_game[6] == false) {

        TweenMax.set(".urda6 .plash_bler #icon", {
            background: 'url(img/los.svg)'
        });
        TweenMax.set(".urda6 .plash_bler ", {
            backgroundColor: 'RGBA(237, 58, 95, 1)'
        });
        TweenMax.set(".urda6 .plash_bler span", {
            color: '#fff'
        });
        $('.urda6 .plash_bler span').text('ЗАДАНИЕ НЕ ВЫПОЛНЕНО');
        $('.urda6 .fon_zad').addClass('down');
    } else if (st_game[6] == true) {
        TweenMax.set(".urda6 .plash_bler #icon", {
            background: 'url(img/yes_icon.png)'
        });
        TweenMax.set(".urda6 .plash_bler ", {
            backgroundColor: 'RGBA(37, 26, 93, 1)'
        });
        TweenMax.set(".urda6 .plash_bler span", {
            color: '#fff'
        });
        $('.urda6 .fon_zad').removeClass('blur').removeClass('down');
        $('.urda6 .plash_bler span').text('ЗАДАНИЕ ВЫПОЛНЕНО!');
    }
    if (st_game[7] == false) {

        TweenMax.set(".urda7 .plash_bler #icon", {
            background: 'url(img/los.svg)'
        });
        TweenMax.set(".urda7 .plash_bler ", {
            backgroundColor: 'RGBA(237, 58, 95, 1)'
        });
        TweenMax.set(".urda7 .plash_bler span", {
            color: '#fff'
        });
        $('.urda7 .plash_bler span').text('ЗАДАНИЕ НЕ ВЫПОЛНЕНО');
        $('.urda7 .fon_zad').addClass('down');
    } else if (st_game[7] == true) {
        TweenMax.set(".urda7 .plash_bler #icon", {
            background: 'url(img/yes_icon.png)'
        });
        TweenMax.set(".urda7 .plash_bler", {
            backgroundColor: 'RGBA(37, 26, 93, 1)'
        });
        TweenMax.set(".urda7 .plash_bler span", {
            color: '#fff'
        });
        $('.urda7 .fon_zad').removeClass('blur').removeClass('down');
        $('.urda7 .plash_bler span').text('ЗАДАНИЕ ВЫПОЛНЕНО!');
    }

    for (var i = 0; i < 8; i++) {
        if (st_game[i] == null) {
            var text = '.urda' + [i] + ' .plash_bler span';
            var fon = '.urda' + [i] + ' .fon_zad';
            var icon = '.urda' + [i] + ' .plash_bler #icon';
            var text = '.urda' + [i] + ' .plash_bler span';
            $(text).text('ПРИСТУПИТЬ К ЗАДАНИЮ');
            $(fon).addClass('blur').removeClass('down');

            TweenMax.set(icon, {
                background: 'url(img/nplay.svg)'
            });
            TweenMax.set('.urda' + [i] + ' .plash_bler', {
                backgroundColor: 'RGBA(188, 213, 239, 1)'
            });
            TweenMax.set('.urda' + [i] + ' .plash_bler span', {
                color: '#271c5d'
            });
        }
    }


}