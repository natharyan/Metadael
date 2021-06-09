function changeImage(counter) {
    var images = [
      '<i class="fab fa-studiovinari"></i>',
      '<i class="fab fa-studiovinari"></i>',
      '<i class="fab fa-studiovinari"></i>',
      '<i class="fab fa-studiovinari"></i>',
      '<i class="fab fa-studiovinari"></i>',
      '<i class="fab fa-studiovinari"></i>',
      '<i class="fab fa-studiovinari"></i>',
      '<i class="fab fa-studiovinari"></i>',
      '<i class="fab fa-studiovinari"></i>',
    ];

    $(".loader .image1").html("" + images[counter] + "");
  }

  function loading() {
    var num = 0;

    for (i = 0; i <= 100; i++) {
      setTimeout(function () {
        $('.loader span').html(num + '%');

        if (num == 100) {
          loading();
        }
        num++;
      }, i * 120);
    };

  }