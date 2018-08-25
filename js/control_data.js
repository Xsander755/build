$(function() {
    var date = moment("2018-09-10")
    var now = moment();

    if (now < date) {
        /*TweenMax.to(".zastavka", 1, {
            autoAlpha: 1
        });*/
        console.log("розыгрыш продолжается");
    } else {


        TweenMax.to(".block_window", 1, {
            autoAlpha: 1
        });
        console.log("розыгрыш закончился");
    }

});