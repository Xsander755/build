$('.guest_games_btn').click(function() {
  status_game = 'guest';
  TweenMax.to(".zadanie_block", 0.5, {
    autoAlpha: 1,
    delay: 0.5
  });
  TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.5, {
    autoAlpha: 0,
    delay: 0.8
  }, 0.25);
  TweenMax.to(".global_window", 0.5, {
    autoAlpha: 0
  });

  console.log('guest_game');
  console.log(status_game);
});
$('.resaul_game_btn').click(function() {
  TweenMax.to(".block_info", 0.5, {
    autoAlpha: 1
  });
  tImEruSer();
  console.log(status_game);
  console.log('Запуск QR на результат');
  /*todo*/
});
$('.hi_works_btn').click(function() {
  TweenMax.to(".block_info", 0.5, {
    autoAlpha: 1
  });
  console.log('Как это работает?');
});
$('.user_btn_wtf').click(function() {
  TweenMax.to(".block_info", 0.5, {
    autoAlpha: 1
  });
  console.log('Как это работает?');
});
$('.user_btn_bac_zadach').click(function() {
  TweenMax.to(".zadanie_block", 0.5, {
    autoAlpha: 1
  });
  TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.5, {
    autoAlpha: 0,
    delay: 0.5
  }, 0.25);
  TweenMax.to(".block_game", 0.5, {
    autoAlpha: 0
  });
  clearInterval(times_val);
  $("#image> div").remove();
  console.log('К списку задач');
});
$('.user_btn_back').click(function() {
  TweenMax.to(".zadanie_block", 0.5, {
    autoAlpha: 1
  });
  TweenMax.staggerFrom([".nz1", ".nz2", ".nz3", ".nz4", ".nz5", ".nz6", ".nz7", ".nz8"], 0.5, {
    autoAlpha: 0,
    delay: 0.5
  }, 0.25);
  TweenMax.to(".block_game", 0.5, {
    autoAlpha: 0
  });
  clearInterval(times_val);
  $("#image> div").remove();
  console.log('Заново ИГРУ');

});
$('.btn_bac').click(function() {
  TweenMax.to(".block_info", 0.5, {
    autoAlpha: 0
  });
  TweenMax.to(".bloc_user_id", 0.5, {
    autoAlpha: 0
  });
  clearInterval(user_get);
  console.log('т отключен');
  console.log('Назад');
});
$('.btn_bac_s').click(function() {

  TweenMax.to(".bloc_user_id", 0.5, {
    autoAlpha: 0
  });
  TweenMax.to(".global_window", 0.5, {
    autoAlpha: 1,
    delay: 0.2
  });
  console.log('Назад');
});
$('.user_to_game').click(function() {
  console.log('Начать игру на стенде');
});
$('.user_to_exit').click(function() {
  console.log('Отменить и выйти');
});
$('.btn_bac_n').click(function() {
  TweenMax.to(".zadanie_block", 0.5, {
    autoAlpha: 0
  });
  TweenMax.to(".global_window", 0.5, {
    autoAlpha: 1,
    delay: 0.2
  });
  TweenMax.to(".btn_box", 0.5, {
    autoAlpha: 1,
    delay: 0.2
  });
  console.log('В начало');
});