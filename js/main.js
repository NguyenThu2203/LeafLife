(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    //Số lượng sản phẩm
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);
//mã giảm giá
$(document).ready(function () {
    $('.discountbtn').click(function () {
        $('.discountbtn').css('background-color', '');
        $(this).css('background-color', '#dd3226');
    });
});
//bớt sản phẩm trong giỏ hàng
$(document).ready(function () {
    $('.xoa').click(function () {
        $(this).closest('tr').hide();
    });
});  
// hiển thị mã km đã chọn
function chon(button) {
    // Lấy nội dung từ class magiam bên trong nút
    var magiam = button.querySelector('.magiam').innerText;

    // Hiển thị nội dung khuyến mãi trong phần tử có id="showmakm"
    document.getElementById('showmakm').innerText = magiam;
}
function showCustomBox() {
    var customBox = document.getElementById('custom-box');
    customBox.style.display = 'block';
}
function hideCustomBox() {
    var customBox = document.getElementById('custom-box');
    customBox.style.display = 'none';
}

//Hiển thị nội dung đánh giá sản phẩm 
function showCustomBox() {
    var customBox = document.getElementById('custom-box');
    customBox.style.display = 'block';
}

function hideCustomBox() {
    var customBox = document.getElementById('custom-box');
    customBox.style.display = 'none';
}
//

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    kiemTraMaGiamGia();
  });

  function kiemTraMaGiamGia() {
    var inputMaGiamGia = document.getElementById('nhapmakm').value;

    // Kiểm tra điều kiện của mã giảm giá và hiển thị thông báo
    if (inputMaGiamGia === 'KM_LeafLife20K') {
      alert('Mã giảm giá hợp lệ. Giảm 20k cho đơn hàng từ 150K.');
    } else if (inputMaGiamGia === 'KM_LeafLife10K') {
      alert('Mã giảm giá hợp lệ. Giảm 10K cho đơn từ 99K.');
    } else if (inputMaGiamGia === 'KM_LeafLife10%') {
      alert('Mã giảm giá hợp lệ. Giảm 10% cho khách hàng mới.');
    } else {
      alert('Mã giảm giá không tồn tại.');
    }
  }


