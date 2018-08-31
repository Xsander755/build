$(function() {
    lOadTabsRey();

});
var autor = 0;
// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// }, false);

function reGame() {
    var im = Number.parseInt($(this).attr('id') - 1);
    vOiData(im);
}