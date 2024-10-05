
// /*............................................................
//                 Accordian Menu
// ..............................................................*/

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));




$(document).ready(function () {
    //dropdown
    var dropdownid = '';
    $(document).on("click", ".dropdown", function () {
        dropdownid = $(this).attr("data-target");
        if ($('#' + dropdownid).attr("aria-expanded") == "false") {
            $('#' + dropdownid).addClass('block');
            $('#' + dropdownid).attr("aria-expanded", "true");
        } else {
            $('#' + dropdownid).removeClass('block');
            $('#' + dropdownid).attr("aria-expanded", "false");
        }
    });
    $(document).on("click", ".dropdown_value", function () {
        var value = $(this).attr("data-value");
        var input = $(this).attr("input-target");
        $('#' + input).val(value);
        $('.web_dropdown_submenu_con').removeClass("block");
        $('#' + dropdownid).attr("aria-expanded", "false");
    });

    //checkbox design
    $(document).on("change", ".checkbox", function () {
        if ($(this).is(":checked")) {
            // alert($(this).attr("id"));
        } else {

        }
    });


    // pop managerefund
    $(document).on("change", ".managecheckboxrefund", function () {
        var input_target = $(this).attr('input-target');
        if ($(this).is(":checked")) {
            $('.managecheckboxrefund').prop('checked', false);
            $(this).prop('checked', true);
            $('.manage_account_card_input').css("display", "none");
            $('#' + input_target).css("display", "block");


        } else {
            $('.manage_account_card_input').css("display", "none");
            $('#' + input_target).css("display", "none");
            $('.managecheckboxrefund').prop('checked', false);
        }

    });

    //pop forward
    $(document).on("click", ".btnpopnext", function (e) {
        e.preventDefault();
        var formid = $(this).attr('forward-target');
        $('.frmmanage_refund').css("display", "none");
        $('#' + formid).css("display", "block");
    });
    //pop backward
    $(document).on("click", ".popbackbutton", function (e) {
        e.preventDefault();
        var formid = $(this).attr('backward-target');
        $('.frmmanage_refund').css("display", "none");
        $('#' + formid).css("display", "block");
    });

    //pop formshow
    $(document).on("click", ".btn_pop_title_form", function (e) {
        e.preventDefault();
        $('.btn_pop_title_form').css("color", "#333 !important");
        var formid = $(this).attr('form-target');
        $('.btn_pop_title_form').removeClass("change-gold");
        $(this).addClass("change-gold");
        $('.frmmanage_refund').css("display", "none");
        $('#' + formid).css("display", "block");
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
var slider = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 6,
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }, autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        // reverseDirection: true
    },

});

var thumbs = new Swiper(".gallery-thumbs", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    slideToClickedSlide: true
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;

/*
inspiration 
https://dribbble.com/shots/4675498-Photography-Website/attachments/10530248?mode=media
*/

