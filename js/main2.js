$(function () {
  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', '#page9'],
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 1000,

    onLeave: function (origin, destination, direction) {
      animateText(destination.index);
    }
  });

  $('header #nav-trigger').click(function () {
    $('nav').fadeIn(200)
  })

  $('nav #nav-trigger').click(function () {
    $('nav').fadeOut(200)
  })

  $('.play_btn').click(function () {
    $('.pop').fadeIn()
    $('header #nav-trigger').hide()
    $('.pop #nav-trigger').show()
  })

  $('.pop #nav-trigger').click(function () {
    $('.pop').fadeOut()
    $('header #nav-trigger').show()
    $('nav').hide()
  })

  $('.gotop').click(function () {
    $.fn.fullpage.moveTo(1, 1);
  })

})

function animateText(index) {
  if (index == 1);
  TweenMax.set($('section .txt_box h1'), { y: 50, opacity: 0 });
  TweenMax.set($('section .txt_box p'), { y: 50, opacity: 0 });

  TweenMax.staggerTo($('section .txt_box h1'), 3, { y: 0, opacity: 1, ease: Linear.easeIn, alpha: 1 }, 0.1);

  TweenMax.staggerTo($('section .txt_box p'), 3, { y: 0, opacity: 1, ease: Linear.easeIn, alpha: 1 }, 0.3);
}

document.addEventListener('DOMContentLoaded', function () {
  // 페이지가 로드되면 bg_wrap의 배경을 차례대로 나타나게 함
  const bgElements = document.querySelectorAll('#section3 .bg');
  let delay = 0;

  bgElements.forEach((bg, index) => {
    setTimeout(() => {
      bg.style.opacity = 1; // 배경을 보이게 함
    }, delay);
    delay += 1000; // 각 배경이 나타나는 간격 (1000ms)
  });
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', () => {
  const scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition, 10));
    // 효과를 다시 적용하는 코드 추가
  }
}
);

// document.addEventListener('DOMContentLoaded', function () {
//   const bgElements = document.querySelectorAll('#section3 .bg');
//   let delay = 0;

//   // 저장된 상태를 불러오기
//   const savedOpacity = JSON.parse(localStorage.getItem('bgOpacity')) || [];

//   bgElements.forEach((bg, index) => {
//     // 저장된 상태가 있으면 해당 상태에 따라 opacity 설정
//     if (savedOpacity[index] !== undefined) {
//       bg.style.opacity = savedOpacity[index];
//     } else {
//       // 저장된 상태가 없으면 초기 opacity 설정
//       bg.style.opacity = 0; // 초기값은 0
//     }

//     // 배경을 차례대로 나타나게 함
//     setTimeout(() => {
//       bg.style.opacity = 1; // 배경을 보이게 함
//       // 현재 opacity 상태를 저장
//       savedOpacity[index] = 1;
//       localStorage.setItem('bgOpacity', JSON.stringify(savedOpacity));
//     }, delay);
//     delay += 1000; // 각 배경이 나타나는 간격 (1000ms)
//   });

//   // 페이지를 떠날 때 현재 상태 저장
//   window.addEventListener('beforeunload', () => {
//     const currentOpacity = Array.from(bgElements).map(bg => parseFloat(bg.style.opacity));
//     localStorage.setItem('bgOpacity', JSON.stringify(currentOpacity));
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const bgElements = document.querySelectorAll('#section4 .bg');
  let delay = 0;

  bgElements.forEach((bg, index) => {
    // 초기 opacity를 1으로 설정
    bg.style.opacity = 1;

    // 배경을 차례대로 나타나게 함
    setTimeout(() => {
      bg.style.transition = 'opacity 1s'; // 부드러운 전환 효과
      bg.style.opacity = 0; // 배경을 사라지게 함
    }, delay);
    delay += 100; // 각 배경이 나타나는 간격 (1000ms)
  });
});

