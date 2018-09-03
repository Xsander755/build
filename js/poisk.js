 var sech_url;
 var input = $('.quantity'),
     timeOut;
 input.on('keyup', function() {

     clearTimeout(timeOut);

     timeOut = setTimeout(poIsk, 900, $(this).val());

 });

 input.on('keydown', function() {

     clearTimeout(timeOut);

 });
 input.on('mouseout', function() {
     $('.lain_block_glw>div').remove();
     lOadTabsRey();
 });
 input.on('focus', function() {
     $(this).select();
 });


 function poIsk(value) {

     sech_url = " https://api.msk-day.ru/puzzle/poi-rating/8a55bf69cf5fb46b8d40f11daca0390a.json?expand=user&name=" + value;
     sEch_Get(sech_url);

 }

 function sEch_Get(url) {
     $.ajax({
         type: 'get',
         url: url,
         contentTaype: ' application/json',
         success: function(data) {
             $('.lain_block_glw>div').remove();
             $.each(data, function(i) {

                 $('.lain_block_glw').append('<div class="lb"><div class="icon"><p>' + (i + 1) + '</p></div><div class = "us_phptp" style = "background-image: url(' +
                     data[i].user.picture + '");></div><div class="us_name"><p>' + data[i].user.name +
                     '</p></div><div class="time">Время<span>' + data[i].seconds + '</span></div><div class="steps">Шаги<span>' + data[i].turns + '</span></div></div>');

                 $('.lb .time').css('color', '#271c5d');
                 $('.lb .time span').css('color', '#271c5d');
                 $('.lb .steps').css('color', '#271c5d');
                 $('.lb .steps span').css('color', '#271c5d');
                 $('.lb .us_name p').css('color', '#271c5d');
             });

         }
     });
 }