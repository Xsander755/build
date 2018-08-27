$(function() {
    var date = moment("2018-09-10")
    var now = moment();

    if (now < date) {
        TweenMax.to(".zastavka", 1, {
            autoAlpha: 1,
            delay: 1
        });
        TweenMax.to(".zastavka", 1, {
            autoAlpha: 0,
            delay: 4
        });
        TweenMax.to(".global_window", 1, {
            autoAlpha: 1,
            delay: 5,
            onComplete: iniGame
        });
        //console.log("розыгрыш продолжается");
    } else {


        TweenMax.to(".block_window", 1, {
            autoAlpha: 1
        });
        //console.log("розыгрыш закончился");
    }

});