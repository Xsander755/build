var user_get;
var сount_aut = 0;
var user;


function aUtoRization() {
    user = {
        id: '',
        name: '',
        picture: '',
        source: '',
        step: '',
        time: '',
        oneEighth: ''
    }
    $.ajax({
        type: 'get',
        url: "https://api.msk-day.ru/puzzle/poi-poi/14391be72342662f13306081dd13c699/check-activation.json",
        contentTaype: ' application/json',
        success: function(data) {
            user.id = data.user.id;
            user.name = data.user.name;
            user.picture = data.user.picture;
            user.source = data.user.source;
            user.step = data.userRating.turns;
            user.time = data.userRating.seconds;
            user.oneEighth = data.userRating.tasks;

            console.log(user);
            ///console.log(data);
            console.log('т отключен');
            clearInterval(user_get);
            iNfIll();
        }
    });
    console.log("Запрос");
}


function tImEruSer() {
    user_get = setInterval(function() {
        if (сount_aut < 13) {
            aUtoRization();
            сount_aut++;
        } else {
            clearInterval(user_get);
            console.log('т отключен');
        }
    }, 2000);
}

function iNfIll() {
    $('.user_bloc_zad_user_id').append('<div class="us_phptp" style="background-image: url(' + user.picture +
        '");></div><div class="use_name"><p>' + user.name + '</p></div><div class="times">Время<br/><span>' + user.time +
        '</span></div><div class="stepss">Шаги<br/><span>' + user.step +
        '</span></div><div class="oneEighth">Задания:<br/><span>' + user.oneEighth + ' из 8</span></div>');
    TweenMax.to(".block_info", 0.5, {
        autoAlpha: 0
    });
    TweenMax.set(".global_window", {
        autoAlpha: 0
    });
    TweenMax.to(".bloc_user_id", 0.5, {
        autoAlpha: 1,
        delay: 0.8
    });
}