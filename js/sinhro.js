   var user_get;
   var сount_aut = 0;

   function aUtoRization() {
       $.ajax({
           type: 'get',
           url: "https://api.msk-day.ru/puzzle/poi-poi/8e08f29980d54010e345e7feec269216/check-activation.json",
           contentTaype: ' application/json',
           success: function(data) {
               console.log(data);
               clearInterval(user_get);
               console.log('т отключен');
               toGameResault();
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

   function toGameResault() {
       TweenMax.to(".block_info", 0.5, {
           autoAlpha: 0
       });
       TweenMax.to(".zadanie_block", 0.5, {
           autoAlpha: 1
       });
       TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.5, {
           autoAlpha: 0,
           delay: 0.5
       }, 0.25);
       TweenMax.to(".global_window", 0.5, {
           autoAlpha: 0,
           delay: 0.2
       });
   }