
var portal = 'it';
var theme = '3-Samsung_S10';
var template = 'surbox';
var brand_country = 'Spain';
var dayNames = Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
var monthNames = new Array("Janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
var img_regalo = "./assets/images/img-2.png";
var minutos_y = "minutos e ";
var segundos = "segundos ";
var url_f = "";
var modalOptions = {
    backdrop: 'static',
    keyboard: false
};
var adS = ["bG9jYWwucHJlbG9hZGVycy5jb20=", "bG9jYWwucHJlbG9hZGVycy5jb20="];
//<!--Facebook Pixel Code-->
!function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}
(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js');
fbq('init', '{lander.param:fbpixel}');
fbq('track', 'PageView');