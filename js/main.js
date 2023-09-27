'use strict'

{
　// ---SP用メニューボタン
  const button = document.getElementById('menu-button');
  const overlay = document.querySelector('.overlay');
  const ghost = document.querySelector('.flow-ghost');

  button.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
      ghost.classList.remove('ghost-hidden');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
      ghost.classList.add('ghost-hidden');
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

  // ---カルーセル
  const ul = document.querySelector('.images');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for(let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.carousel-dots').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  setupDots();

  window.addEventListener('resize', () => {
    moveSlides();
  });
	
	// 5秒ごとに自動切換え
	let interval_id = null;
	window.addEventListener('DOMContentLoaded', function(){
		interval_id = setInterval(() => {
			if(currentIndex < slides.length - 1){
				currentIndex ++;
				updateDots();
				moveSlides();
			} else {
				currentIndex = 0;
				updateDots();
				moveSlides();
				console.log('reset');
			}
		}, 5000);
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
