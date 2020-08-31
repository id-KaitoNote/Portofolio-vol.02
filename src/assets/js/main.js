
'use strict';

window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}


$(function () {


    var works01 = $(".Works__title-list--01");
    var worksImg01 = $(".Works__img--01");
    var works02 = $(".Works__title-list--02");
    var worksImg02 = $(".Works__img--02");
    var works03 = $(".Works__title-list--03");
    var worksImg03 = $(".Works__img--03");
    var works04 = $(".Works__title-list--04");
    var worksImg04 = $(".Works__img--04");
    var works05 = $(".Works__title-list--05");
    var worksImg05 = $(".Works__img--05");

    // mouseover
    works01.mouseover(function () {
        $("body").addClass("changed");
        works01.removeClass("Works__title-list");
        works01.addClass("Works__title-list--changed");
        worksImg01.removeClass("Works__img");
        worksImg01.addClass("Works__img--changed");
    });
    // mouseout
    works01.mouseout(function () {
        $("body").removeClass("changed");
        works01.removeClass("Works__title-list--changed");
        works01.addClass("Works__title-list");
        worksImg01.addClass("Works__img");
        worksImg01.removeClass("Works__img--changed");
    });

    // mouseover
    works02.mouseover(function () {
        $("body").addClass("changed");
        works02.removeClass("Works__title-list");
        works02.addClass("Works__title-list--changed");
        worksImg02.removeClass("Works__img");
        worksImg02.addClass("Works__img--changed");
    });
    // mouseout
    works02.mouseout(function () {
        $("body").removeClass("changed");
        works02.removeClass("Works__title-list--changed");
        works02.addClass("Works__title-list");
        worksImg02.addClass("Works__img");
        worksImg02.removeClass("Works__img--changed");
    });

    // mouseover
    works03.mouseover(function () {
        $("body").addClass("changed");
        works03.removeClass("Works__title-list");
        works03.addClass("Works__title-list--changed");
        worksImg03.removeClass("Works__img");
        worksImg03.addClass("Works__img--changed");
    });
    // mouseout
    works03.mouseout(function () {
        $("body").removeClass("changed");
        works03.removeClass("Works__title-list--changed");
        works03.addClass("Works__title-list");
        worksImg03.addClass("Works__img");
        worksImg03.removeClass("Works__img--changed");
    });

    // mouseover
    works04.mouseover(function () {
        $("body").addClass("changed");
        works04.removeClass("Works__title-list");
        works04.addClass("Works__title-list--changed");
        worksImg04.removeClass("Works__img");
        worksImg04.addClass("Works__img--changed");
    });
    // mouseout
    works04.mouseout(function () {
        $("body").removeClass("changed");
        works04.removeClass("Works__title-list--changed");
        works04.addClass("Works__title-list");
        worksImg04.addClass("Works__img");
        worksImg04.removeClass("Works__img--changed");
    });

    // mouseover
    works05.mouseover(function () {
        $("body").addClass("changed");
        works05.removeClass("Works__title-list");
        works05.addClass("Works__title-list--changed");
        worksImg05.removeClass("Works__img");
        worksImg05.addClass("Works__img--changed");
    });
    // mouseout
    works05.mouseout(function () {
        $("body").removeClass("changed");
        works05.removeClass("Works__title-list--changed");
        works05.addClass("Works__title-list");
        worksImg05.addClass("Works__img");
        worksImg05.removeClass("Works__img--changed");
    });


});
// mouse starker
