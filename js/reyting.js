function lOadTabsRey() {
    var s = 0;
    $.ajax({
        type: 'get',
        url: "https://api.msk-day.ru/puzzle/poi-rating/14391be72342662f13306081dd13c699.json?expand=user",
        contentTaype: ' application/json',
        success: function(data) {
            $.each(data, function(i) {
                if (i < 20) {

                    $('.lain_block_glw').append('<div class="lb lain' + (i + 1) + '"><div class="icon"><p>' + (i + 1) + '</p></div><div class = "us_phptp" style = "background-image: url(' +
                        data[i].user.picture + '");></div><div class="us_name"><p>' + data[i].user.name +
                        '</p></div><div class="time">Время<span>' + data[i].seconds + '</span></div><div class="steps">Шаги<span>' + data[i].turns + '</span></div></div>');
                    $(".lain3").nextAll('.time').css('color', 'red');

                    cLeAr();
                }
            });
        }
    });
    console.log("запуск");
}


function cLeAr() {
    $(".lain1 .icon> *").remove();
    $(".lain2 .icon> *").remove();
    $(".lain3 .icon> *").remove();
    $('.lb .time:gt(2)').css('color', '#271c5d');
    $('.lb .time:gt(2) span').css('color', '#271c5d');
    $('.lb .steps:gt(2)').css('color', '#271c5d');
    $('.lb .steps:gt(2) span').css('color', '#271c5d');
    $('.lb .us_name:gt(2) p').css('color', '#271c5d');

}