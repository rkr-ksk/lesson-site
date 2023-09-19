'use strict'

{
  // ---SP用メニューボタン
  const button = document.getElementById('menu-button');
  const overlay = document.querySelector('.overlay');

  button.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
    }
  });

  // ---SP用オーバーレイメニュー
  const contact = document.querySelector('.ol-contact');
  const access = document.querySelector('.ol-access');

  contact.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
    }
  });

  access.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
    }
  });

  // ---イメージモーダル
  const modalWrapper = document.querySelector('.modal-wrapper');
  const images = document.querySelectorAll('.image');
  const modalImage = document.querySelector('.modal-image');

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      modalWrapper.classList.add('imgshow');
      modalImage.classList.add('imgshow');

      var imageSrc = image.getAttribute('data-src');
      modalImage.src = imageSrc;
    });
  });

  modalWrapper.addEventListener('click', function () {
    if (this.classList.contains('imgshow')) {
      this.classList.remove('imgshow');
      modalImage.classList.remove('imgshow');
    }
  });

}
