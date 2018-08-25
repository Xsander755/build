$(function() {
    /*Сравнение даты*/
    /* var date = moment("2018-09-10")
     var now = moment();
     var za = new TimelineMax({
         onComplete: stArtApp
     });
     var start = new TimelineMax({ onStart: pars });
     if (now < date) {
         TweenMax.to(".zastavka", 1, {
             autoAlpha: 1
         });

         za.add('st')
             .to('.fishka', 5, {
                 rotation: 7200,
                 ease: Elastic.easeOut
             }, 'st')
             .to('.fishka', 1.5, {
                 top: '1343px',
                 ease: Elastic.easeOut
             }, 'st+=3')
             .staggerTo(['.ar', '.stand', '.logo', '.msk'], 3, {
                 autoAlpha: 1,
                 ease: Elastic.easeOut
             }, 0.25, 'st+=3.5')
             .to('.zastavka', 0.8, {
                 autoAlpha: 0,
                 delay: 4
             });
     } else {
         TweenMax.to(".block_window", 1, {
             autoAlpha: 1
         });
     }*/
    /* Конец вступления * /
          /*возможный блюр эффект*/

    /*
        function stArtApp() {
            start.play();
        }
        start.add('st')
            .to('.glw', 1, {
                autoAlpha: 1,
                ease: Elastic.easeOut
            }, 'st')
            .staggerFrom(['.ar', '.logo-glw', '.search-glw'], 1, {
                autoAlpha: 0
            }, 0.2, 'st')
            .staggerFrom(['.lain1', '.lain2', '.lain3', '.lain4', '.lain5'], 1, {
                autoAlpha: 0,
                x: '+=330',
                ease: Power2.easeOut
            }, 0.25, 'st+=0.5')
            .staggerFrom(['.guest_games_btn', '.resaul_game_btn', '.geest_txt', '.resault_txt'], 1.5, {
                autoAlpha: 0
            }, 0.25, 'st+=0.9');
        start.pause();

        function pars() {
            console.log("load");
        }*/




    $('.guest_games_btn').click(function() { console.log('guest_game'); });
    $('.resaul_game_btn').click(function() { console.log("resaul_game"); });
    $('.hi_works_btn').click(function() { console.log('Как это работает?'); });
    $('.user_btn_wtf').click(function() { console.log('Как это работает?'); });
    $('.user_btn_bac_zadach').click(function() { console.log('К списку задач'); });
    $('.user_btn_back').click(function() { console.log('Заново ИГРУ'); });
    $('.btn_bac').click(function() { console.log('Назад'); });

    $('.user_to_game').click(function() {
        console.log('Начать игру на стенде');
    });
    $('.user_to_exit').click(function() {
        console.log('Отменить и выйти');
    });



});