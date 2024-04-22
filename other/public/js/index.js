(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function i(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
})();
const y = {
    success: ({
        text: e = "",
        title: t = "Success",
        cancelButtonText: n = "Close",
        showCloseButton: i = !0,
        showCancelButton: o = !1,
        showConfirmButton: s = !1,
        confirmButtonColor: c = "#3b82f6",
        cancelButtonColor: r = "#ef4444",
        padding: a = 0
    }) => Swal.fire({
        icon: "success",
        timer: 3e3,
        title: t,
        text: e,
        cancelButtonText: n,
        showCloseButton: i,
        showCancelButton: o,
        showConfirmButton: s,
        confirmButtonColor: c,
        cancelButtonColor: r,
        padding: a,
        customClass: {
            cancelButton: "!border !border-solid !border-black-900 !rounded-lg !text-teal-900 !bg-white"
        }
    }),
    warning: ({
        text: e = "",
        title: t = "Warning",
        cancelButtonText: n = "Close",
        confirmButtonText: i = "Ok",
        showCloseButton: o = !0,
        showCancelButton: s = !0,
        showConfirmButton: c = !0,
        padding: r = 0
    }) => Swal.fire({
        icon: "warning",
        title: t,
        text: e,
        cancelButtonText: n,
        confirmButtonText: i,
        showCloseButton: o,
        showCancelButton: s,
        showConfirmButton: c,
        padding: r,
        customClass: {
            cancelButton: "!border !border-solid !border-black-900 !rounded-lg !text-teal-900 !bg-white"
        }
    }),
    error: ({
        text: e = "",
        title: t = "Fail",
        cancelButtonText: n = "Close",
        showCloseButton: i = !0,
        showCancelButton: o = !0,
        showConfirmButton: s = !1,
        padding: c = 0
    }) => Swal.fire({
        icon: "error",
        title: t,
        text: e,
        cancelButtonText: n,
        showCloseButton: i,
        showCancelButton: o,
        showConfirmButton: s,
        padding: c,
        focusCancel: o,
        timer: 6e3,
        customClass: {
            cancelButton: "!border !border-solid !border-black-900 !rounded-lg !text-teal-900 !bg-white"
        }
    }),
    confirm: ({
        text: e = "",
        title: t = "",
        cancelButtonText: n = "Close",
        confirmButtonText: i = "Ok",
        onConfirm: o = () => null,
        onDenied: s = () => null,
        confirmButtonColor: c = "#3b82f6",
        cancelButtonColor: r = "#ef4444",
        showCloseButton: a = !0,
        showCancelButton: l = !0,
        showConfirmButton: h = !0,
        padding: d = 0
    }) => Swal.fire({
        icon: "warning",
        text: e,
        title: t,
        cancelButtonText: n,
        confirmButtonText: i,
        confirmButtonColor: c,
        cancelButtonColor: r,
        showCancelButton: l,
        showConfirmButton: h,
        showCloseButton: a,
        padding: d
    }).then(m => {
        m.isConfirmed ? o() : m.isDismissed && s()
    }),
    html: e => Swal.fire({
        html: e,
        showConfirmButton: !1,
        padding: 0
    })
},
    L = "m8nvn*&hKwcgb^D-D#Hz^5CXfKySpY",
    S = "b7a2bdf4-ac40-4012-9635-ff4b7e55eae0",
    E = "http://dev1.geneat.vn:7100/api/v1",
    p = {
        init: () => ({
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer " + (localStorage.getItem(S) || ""),
                "Accept-Language": localStorage.getItem("i18nextLng") || ""
            },
            redirect: "follow",
            referrerPolicy: "no-referrer"
        }),
        responsible: async (e, t = {}, n, i = {}) => {
            n.headers = {
                ...n.headers,
                ...i
            };
            const o = Object.keys(t).map(r => r + "=" + encodeURIComponent(typeof t[r] == "object" ? JSON.stringify(t[r]) : t[r])).join("&"),
                s = await fetch(E + e + (o && "?" + o), n),
                c = await s.json();
            return s.ok || s.status === 401 && (localStorage.removeItem(L), location.reload()), c
        },
        get: (e, t = {}, n) => p.responsible(e, t, {
            ...p.init(),
            method: "GET"
        }, n),
        post: (e, t = {}, n = {}, i) => p.responsible(e, n, {
            ...p.init(),
            method: "POST",
            body: JSON.stringify(t)
        }, i),
        put: (e, t = {}, n = {}, i) => p.responsible(e, n, {
            ...p.init(),
            method: "PUT",
            body: JSON.stringify(t)
        }, i),
        delete: (e, t = {}, n) => p.responsible(e, t, {
            ...p.init(),
            method: "DELETE"
        }, n)
    },
    w = () => {
        window._FORM_ = {}, window._FORMSTATUS_ = {}, window._SELECT_ = {}, Array.from(document.getElementsByTagName("form")).forEach(e => {
            e.noValidate && (window._FORM_[e.name] = {}, window._FORMSTATUS_[e.name] = !1, window._SELECT_[e.name] = {}, e.addEventListener("submit", t => {
                t.preventDefault(), b(e)
            }), Array.from(["input", "textarea"]).forEach(t => Array.from(e.querySelectorAll(t)).forEach(n => {
                n.type === "range" && rangeSlider(n), n.addEventListener("blur", () => u(n, t, "blur", e.name), !1)
            })), Array.from([".pretty > input", "select"]).forEach(t => Array.from(e.querySelectorAll(t)).forEach(n => {
                n.type.indexOf("select") > -1 && (window._SELECT_[e.name][n.name] = new Choices(n, {
                    removeItemButton: !0
                })), n.addEventListener("change", () => u(n, t, "change", e.name), !1)
            })))
        })
    },
    b = e => (Array.from(["input", "textarea"]).forEach(t => e.querySelectorAll(".group > " + t).forEach(n => {
        u(n, t, "blur", e.name)
    })), Array.from([".pretty > input", "select"]).forEach(t => e.querySelectorAll(t).forEach(n => {
        u(n, t, "change", e.name, !0)
    })), window._FORMSTATUS_[e.name] = e.querySelectorAll(".group.error").length === 0, !0),
    u = (e, t, n, i, o = !1) => {
        const s = e.closest(".group");
        if (s) {
            o || (t === "select" ? window._FORM_[i][e.name] = e.type.indexOf("multiple") > -1 ? window._SELECT_[i][e.name].getValue().map(l => l.value) : window._SELECT_[i][e.name].getValue().value : window._FORM_[i][e.name.replace("[]", "")] = e.name.indexOf("[]") === -1 ? e.value : [].filter.call(document.getElementsByName(e.name), l => l.checked).map(l => l.value));
            const c = x(e, i, o),
                r = gsap.timeline({
                    defaults: {
                        duration: .3,
                        ease: "power1.inOut"
                    }
                }),
                a = s.querySelector("p");
            if (c)
                if (a) a.innerHTML = c;
                else {
                    t === "select" && window._SELECT_[i][e.name].destroy();
                    const l = s.querySelectorAll(t);
                    s.innerHTML += `<p class="error">${c}</p>`;
                    const h = s.querySelector("p");
                    r.from(h, {
                        marginTop: "-15",
                        opacity: "0",
                        fontSize: "10"
                    }), s.classList.add("error"), Array.from(s.querySelectorAll(t)).forEach((d, m) => {
                        t === "select" && (window._SELECT_[i][d.name] = new Choices(d, {
                            removeItemButton: !0
                        })), d.checked = l[m].checked, d.value = l[m].value, d.addEventListener(n, () => u(d, t, n, i), !1)
                    })
                }
            else {
                const l = s.querySelectorAll(t);
                s.classList.remove("error"), a && r.to(a, {
                    marginTop: "-15",
                    opacity: "0",
                    fontSize: "10"
                }), setTimeout(() => {
                    var h;
                    (h = s.querySelector("p")) == null || h.remove(), Array.from(s.querySelectorAll(t)).forEach((d, m) => {
                        d.checked = l[m].checked, d.addEventListener(n, () => u(d, t, n, i), !1)
                    })
                }, 300)
            }
        }
    },
    x = (e, t, n) => {
        let {
            value: i,
            required: o,
            type: s,
            name: c,
            dataset: r
        } = e;
        if ((n || s === "checkbox" && c && c.indexOf("[]") > -1) && (i = window._FORM_[t][c.replace("[]", "")]), !i && o && c.indexOf("[]") === -1) return window._MESSAGE_.required;
        if (i && s === "email" && !T.test(i.trim())) return window._MESSAGE_.email;
        if (i && r.hasOwnProperty("minLength") && i.length < parseInt(r.minLength)) return window._MESSAGE_.minLengthCheckBox + r.minLength + " ký tự";
        if (i && r.hasOwnProperty("maxLength") && i.length > parseInt(r.maxLength)) return window._MESSAGE_.minLengthCheckBox + r.maxLength + " ký tự";
        if (i && r.hasOwnProperty("regex") && !new RegExp(r.regex).test(i.trim())) return r.hasOwnProperty("message") ? r.message : window._MESSAGE_.required;
        if (i && r.hasOwnProperty("compare")) {
            const a = e.parentElement.parentElement.querySelector(`[name='${r.compare}']`);
            if (a && a.value && a.value.trim() !== i.trim()) return r.hasOwnProperty("message") ? r.message : window._MESSAGE_.required
        }
        return s === "checkbox" && c.indexOf("[]") > -1 && r.hasOwnProperty("minLength") && (!i || i.length < parseInt(r.minLength)) ? window._MESSAGE_.minLengthCheckBox + r.minLength : ""
    },
    T = /^(([^<>()[\]\\.,;:$%^&*\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    _ = () => {
        const e = document.querySelector(".mySwiper-class");
        e && (e.classList.contains("hidden") ? e.classList.remove("hidden") : e.classList.add("hidden"))
    };

function A() {
    const e = document.querySelector(".header-menu"),
        t = document.querySelector(".registration");
    console.log(t), window.screen.availWidth >= 992 && (t == null || t.classList.remove("fixed"), t == null || t.classList.remove("top-32")), window.scrollY > 123 && (e == null || e.classList.add("fixed"), e == null || e.classList.add("top-0"), e == null || e.classList.add("left-0"), e == null || e.classList.add("right-0"), e == null || e.classList.add("shadow-lg"), e == null || e.classList.add("bg-white"), window.screen.availWidth >= 992 && (t == null || t.classList.add("fixed"), t == null || t.classList.add("top-32"))), window.addEventListener("scroll", () => {
        window.scrollY > 123 ? (e == null || e.classList.add("fixed"), e == null || e.classList.add("top-0"), e == null || e.classList.add("left-0"), e == null || e.classList.add("right-0"), e == null || e.classList.add("shadow-lg"), e == null || e.classList.add("bg-white"), window.screen.availWidth >= 992 ? (t == null || t.classList.add("fixed"), t == null || t.classList.add("top-32")) : (t == null || t.classList.remove("fixed"), t == null || t.classList.remove("top-32")), window.scrollY > 1700 && (t == null || t.classList.remove("fixed"), t == null || t.classList.remove("top-32"))) : (e == null || e.classList.remove("fixed"), e == null || e.classList.remove("top-0"), e == null || e.classList.remove("left-0"), e == null || e.classList.remove("right-0"), e == null || e.classList.remove("shadow-lg"), e == null || e.classList.remove("bg-white"), t == null || t.classList.remove("fixed"), t == null || t.classList.remove("top-32"))
    })
}
const g = (e, t) => {
    const n = gsap.timeline({
        delay: t,
        defaults: {
            duration: 1,
            ease: "power1.inOut"
        }
    }),
        i = e.querySelectorAll(".gsap"),
        o = gsap.getTweensOf(i);
    if (o.length > 0) return o.forEach(s => s.kill()), !0;
    i.forEach(s => {
        s.classList.contains("left") && n.from(s, {
            x: "-=10%",
            scale: "+=0.15",
            opacity: "-=1"
        }, "<0.25"), s.classList.contains("right") && n.from(s, {
            x: "+=10%",
            scale: "+=0.15",
            opacity: "-=1"
        }, "<0.5"), s.classList.contains("top") && n.from(s, {
            y: "-=50%",
            scale: "+=0.15",
            opacity: "-=1"
        }, "<0.25"), s.classList.contains("bottom") && n.from(s, {
            y: "+=50%",
            scale: "+=0.15",
            opacity: "-=1"
        }, "<0.5"), s.classList.contains("zoom") && gsap.to(s, {
            scale: "+=0.1",
            duration: 20
        }), s.classList.contains("next") && gsap.from(s, {
            opacity: 0,
            scale: .5
        }, {
            opacity: 1,
            scale: 1,
            duration: .5
        })
    })
},
    C = () => {
        const e = {
            loop: true,
            autoHeight: true,
            spaceBetween: 30,
            autoplay: {
                delay: 5000
            }
        };
        new Swiper(".mySwiper", {
            ...e,
            navigation: false,
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 3,
                slidesPerView: 3
            },
            breakpoints: {
                1366: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 2
                },
                500: {
                    slidesPerView: 1
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });

        new Swiper(".mySwiperContent", {
            ...e,
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev"
            },
            on: {
                init: n => g(n.slides[n.activeIndex], 0),
                slideChangeTransitionStart: n => g(n.slides[n.activeIndex], 0)
            }
        });

        var t = new Swiper(".swiperContent", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true
        });

        new Swiper(".swiperContent2", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next-content",
                prevEl: ".swiper-button-prev-content"
            },
            thumbs: {
                swiper: t
            }
        });

        return t;
    };

function v() {
    const e = {
        items: [{
            imageSrc: "/images/swpier1.png",
            title: "Các xu hướng lựa chọn thiết kế căn hộ lý tưởng năm 2022"
        }, {
            imageSrc: "/images/swpier2.png",
            title: "Những căn hộ đơn giản hiện đại có phải là xu hướng mới?"
        }, {
            imageSrc: "/images/swpier3.png",
            title: "Phong cách thiết kế căn hộ nào sẽ là xu hướng năm 2023?"
        }, {
            imageSrc: "/images/swpier1.png",
            title: "Các xu hướng lựa chọn thiết kế căn hộ lý tưởng năm 2022"
        }, {
            imageSrc: "/images/swpier2.png",
            title: "Những căn hộ đơn giản hiện đại có phải là xu hướng mới?"
        }, {
            imageSrc: "/images/swpier3.png",
            title: "Phong cách thiết kế căn hộ nào sẽ là xu hướng năm 2023?"
        }]
    },
        t = document.getElementById("swpier-template").innerHTML,
        i = Handlebars.compile(t)(e);
    document.getElementById("swpier-container").innerHTML = i
}

function O() {
    const e = {
        items: [{
            imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
            title: "An Khánh",
            room: "Số phòng: 44",
            district: "Quận: Tân Bình",
            type: "Loại: Motel",
            address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
            introduce: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
            title: "An Khánh",
            room: "Số phòng: 44",
            district: "Quận: Tân Bình",
            type: "Loại: Motel",
            address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
            introduce: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
            title: "An Khánh",
            room: "Số phòng: 44",
            district: "Quận: Tân Bình",
            type: "Loại: Motel",
            address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
            introduce: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
            title: "An Khánh",
            room: "Số phòng: 44",
            district: "Quận: Tân Bình",
            type: "Loại: Motel",
            address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
            introduce: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }]
    },
        t = document.getElementById("room-template").innerHTML,
        i = Handlebars.compile(t)(e);
    document.getElementById("room-container").innerHTML = i
}

function k() {
    const e = {
        items: [{
            title: "Uhouse",
            Content: "Mang lại nhiều tiện ích cho khách thuê",
            imageSrc: "/images/property-1.png"
        }, {
            title: "Uhouse",
            Content: " Nền tảng quản lý vận hành tòa nhà tiên tiến",
            imageSrc: "/images/property-1.png"
        }, {
            title: "Uhouse",
            Content: "Tiết kiệm chi phí hiệu quả",
            imageSrc: "/images/property-1.png"
        }]
    },
        t = document.getElementById("right-template").innerHTML,
        i = Handlebars.compile(t)(e);
    document.getElementById("right-container").innerHTML = i
}
window.API = p;
window.Message = y;
w();
window.SetupFormValid = w;
window._MESSAGE_ = {
    required: "Xin vui lòng nhập nội dung",
    email: "Xin vui lòng nhập địa chỉ email hợp lệ!",
    minLengthCheckBox: "Xin vui lòng chọn ít nhất ",
    minLength: "Xin vui lòng nhập tối thiểu ",
    maxLength: "Xin vui lòng nhập không quá ",
    compare: "Xin vui lòng nhập không quá "
};
document.addEventListener("DOMContentLoaded", function () {
    const e = document.getElementById("arrow-icon"),
        t = document.getElementById("dropdown-select");
    e == null || e.addEventListener("click", function () {
        t == null || t.classList.toggle("open")
    });
    const n = document.getElementById("play-image"),
        i = document.getElementById("video-iframe");
    n !== null && i !== null && (n.style.display = "none", i.addEventListener("click", function () {
        n.style.display = "block", i.style.display = "none", console.log("aaaaaaa")
    }), n.addEventListener("click", function () {
        n.style.display = "none", i.style.display = "block", console.log("bbbbbb")
    }), i.addEventListener("pause", function () {
        n.style.display = "block", console.log("Video paused")
    }))
});
const f = document.querySelector(".btn-show-image");
f == null || f.addEventListener("click", _);

const provinceSelect = document.getElementById('selectAddress');

provinceSelect.addEventListener('change', function () {
    const selectedProvince = provinceSelect.value;
    window.location.href = `http://localhost:3000/?address=${selectedProvince}`;
});
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const address = urlParams.get('address');
    if (address) {
        const option = provinceSelect.querySelector(`option[value="${address}"]`);
        if (option) {
            provinceSelect.value = address;
        }
    }
};

A();
C();
v();
O();
k();