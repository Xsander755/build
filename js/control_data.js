$(function() {
    var date = moment("2018-09-10")
    var now = moment();

    if (now < date) {

        TweenMax.to(".zastavka", 1, {
            delay: 1,
            onComplete: iniGame
        });
        TweenMax.to(".global_window", 1, {
            autoAlpha: 1,
            onComplete: inactivityTime
        });
        //console.log("розыгрыш продолжается");
        pages = 'gs';
    } else {


        TweenMax.to(".block_window", 1, {
            autoAlpha: 1
        });
        //console.log("розыгрыш закончился");
    }
    allReload();
});