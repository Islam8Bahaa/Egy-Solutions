

! function (o) {
    "use strict";
    var t = o(window);

    function a() {
        var e, a;
        e = o(".full-screen"), a = t.height(), e.css("min-height", a), e = o("header").height(), a = o(".screen-height"), e = t.height() - e, a.css("height", e)
    }
    o("#preloader").fadeOut("normall", function () {
        o(this).remove()
    }), t.on("scroll", function () {
        var e = t.scrollTop(),
            a = o(".navbar-brand img"),
            s = o(".navbar-brand.logodefault img");
        e <= 50 ? (o("header").removeClass("scrollHeader").addClass("fixedHeader"), a.attr("src", "img/cropped-Asset-4-4.png")) : (o("header").removeClass("fixedHeader").addClass("scrollHeader"), a.attr("src", "img/logo.png")), s.attr("src", "img/cropped-Asset-4-4.png")
    }), t.on("scroll", function () {
        500 < o(this).scrollTop() ? o(".scroll-to-top").fadeIn(400) : o(".scroll-to-top").fadeOut(400)
    }), o(".scroll-to-top").on("click", function (e) {
        e.preventDefault(), o("html, body").animate({
            scrollTop: 0
        }, 600)
    }), o(".parallax,.bg-img").each(function (e) {
        o(this).attr("data-background") && o(this).css("background-image", "url(" + o(this).data("background") + ")")
    }), o(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    }), o(".popup-social-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), o(".source-modal").magnificPopup({
        type: "inline",
        mainClass: "mfp-fade",
        removalDelay: 160
    }), 0 !== o(".copy-clipboard").length && (new ClipboardJS(".copy-clipboard"), o(".copy-clipboard").on("click", function () {
        var e = o(this);
        e.text();
        e.text("Copied"), setTimeout(function () {
            e.text("Copy")
        }, 2e3)
    })), t.resize(function (e) {
        setTimeout(function () {
            a()
        }, 500), e.preventDefault()
    }), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }).init(), a(), o(document).ready(function () {
        o(".testimonial-carousel1").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            dots: !0,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                767: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        }), o(".testimonial-carousel2").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            nav: !1,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
            dots: !1,
            margin: 20,
            autoplay: !1,
            thumbs: !0,
            thumbsPrerendered: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1,
                    nav: !1
                },
                600: {
                    items: 1,
                    nav: !1
                },
                1e3: {
                    items: 1
                }
            }
        }), o(".testimonial-carousel3").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            nav: !1,
            navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"],
            dots: !1,
            margin: 0,
            center: !1,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            items: 1,
            responsive: {
                992: {
                    dots: !1,
                    nav: !0
                }
            }
        }), o(".testimonial-carousel4").owlCarousel({
            loop: !1,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !1,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: !0,
            center: !0,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1,
                    nav: !0
                },
                1200: {
                    items: 1,
                    nav: !0
                }
            }
        }), o(".service-carousel1").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !0,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            center: !1,
            dots: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        }), o(".service-carousel2").owlCarousel({
            center: !1,
            items: 2,
            loop: !0,
            dots: !0,
            nav: !1,
            margin: 30,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }), o(".service-carousel3").owlCarousel({
            center: !1,
            items: 2,
            loop: !0,
            dots: !1,
            nav: !1,
            margin: 30,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 4
                }
            }
        }), o(".clients-carousel1").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            dots: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 2
                },
                575: {
                    items: 3
                },
                767: {
                    items: 4
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        }), o(".clients-carousel2").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !1,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            dots: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 2
                },
                575: {
                    items: 3
                },
                767: {
                    items: 4
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        }), o(".workspace-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !0,
            center: !0,
            dots: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    nav: !1
                },
                767: {
                    items: 1,
                    margin: 20,
                    nav: !1
                },
                992: {
                    items: 2,
                    margin: 20
                },
                1200: {
                    items: 2
                }
            }
        }), o(".workspace-details-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            dots: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1,
                    margin: 20
                },
                992: {
                    items: 2,
                    margin: 20
                },
                1200: {
                    items: 2
                }
            }
        }), o(".workspace-carousel2").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !0,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        }), o(".workspace-carousel3").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !1,
            dots: !1,
            center: !0,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        }), o(".slider-fade3").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            margin: 0,
            nav: !1,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            autoplay: !0,
            smartSpeed: 1500,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                992: {
                    items: 1,
                    nav: !0,
                    dots: !1
                }
            }
        }), o(".slider-fade4").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            margin: 0,
            nav: !1,
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
            autoplay: !0,
            autoplayTimeout: 6e3,
            smartSpeed: 1500,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                992: {
                    nav: !0,
                    dots: !1
                }
            }
        }), o(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !1,
            margin: 0,
            autoplay: !0,
            smartSpeed: 500
        }), o(".slider-fade3").on("changed.owl.carousel", function (e) {
            e = e.item.index - 2;
            o("span").removeClass("animated fadeInUp"), o("h1").removeClass("animated fadeInUp"), o(".butn").removeClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find("span").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find(".butn").addClass("animated fadeInUp")
        }), 0 !== o(".horizontaltab").length && o(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
                var a = o(this),
                    s = o("#nested-tabInfo");
                o("span", s).text(a.text()), s.show()
            }
        }), o(".current-year").text((new Date).getFullYear()), o(".card-style13").on({
            mouseenter: function () {
                o(".card-style13.active").removeClass("active"), o(this).addClass("active")
            }
        }), o(".card-style12 .card-body").on({
            mouseenter: function () {
                o(".card-style12 .card-body.active").removeClass("active"), o(this).addClass("active")
            }
        }), o(".countup").counterUp({
            delay: 25,
            time: 2e3
        }), o(".countdown").countdown({
            date: "01 Feb 2027 00:01:00",
            format: "on"
        })
    })
}(jQuery);