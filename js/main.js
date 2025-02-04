$(function () {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        scrollingSpeed: 1000,
    })

    $('.vid_btn').on('click', function () {
        $('#section3 video').trigger('play')
    })

    TweenMax.set($('#section1 .top-logo'), { y: 100, opacity: 0 });
    TweenMax.set($('#section1 .tit'), { y: 100, opacity: 0 });
    TweenMax.set($('#section1 .list'), { y: 100, opacity: 0 });

    TweenMax.staggerTo($('#section1 .top-logo'), .8, { y: 0, opacity: 1, ease: Linear.easeIn, alpha: 1 }, 0.1);

    TweenMax.staggerTo($('#section1 .tit'), 1, { y: 0, opacity: 1, ease: Linear.easeIn, alpha: 1 }, 0.1);

    TweenMax.staggerTo($('#section1 .list'), 1.2, { y: 0, opacity: 1, ease: Linear.easeIn, alpha: 1 }, 0.1);

    $('.popup1 .cls').click(function () {
        $('.popup1').hide()
    })

    $('.popup2 .cls').click(function () {
        $('.popup2').hide()
    })

    $('.alrm').click(function () {
        $.fn.fullpage.moveTo(0, 0);
    })

    // popup3 서서히 나타나기
    $('section #ques').click(function () {
        $('.popup3').fadeIn().addClass('show');
        // 몇 초 후에 question 창이 fadeUp 효과로 나타나기
        setTimeout(function () {
            $('.question').addClass('show');
        }, 2000); // 2초 후에 나타나도록 설정
    });

    // 닫기 버튼 클릭 시 popup3 닫기
    $('.popup3 .question button').click(function () {
        $('.popup3').fadeOut();
        // $('.popup3 .question').removeClass('show');
    });
})


document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    const storedDate = localStorage.getItem("popupClosedDate");

    if (storedDate === today) {
        document.querySelectorAll(".popup1, .popup2").forEach(popup => {
            popup.style.display = "none";
        });
    }
});

function closePopup(popupSelector) {
    const dontShowToday = document.querySelector("#ptoday").checked || document.querySelector("#ptoday2").checked;

    if (dontShowToday) {
        const today = new Date().toISOString().split("T")[0];
        localStorage.setItem("popupClosedDate", today);
    }

    document.querySelector(popupSelector).style.display = "none";
}

