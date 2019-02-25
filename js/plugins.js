/* -----------------------------------------------------------------
    Avoid `console` errors in browsers that lack a console
--------------------------------------------------------------------*/
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/* -----------------------------------------
jQuery Plugin index.
1. Jquery scroll hide plugin.
2. Treeview 1.4.2
3. Header sticky style.
4. VenoBox - jQuery
5. imagesLoaded jQuery
6. jquery.counterup
7. WOW JS
8. jQuery meanMenu
10. jQuery One Page Nav Plugin

--------------------------------------------*/
/* -------------------------------------------------------------------------------
 4. VenoBox - jQuery
 * version: 1.6.0
 * @requires jQuery
 *
 * Examples at http://lab.veno.it/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2015 Nicola Franchini - @nicolafranchini
 *
------------------------------------------------------------------------------------ */
!function(t){function a(){t.ajax({url:g,cache:!1}).done(function(t){u.html('<div class="vbox-inline">'+t+"</div>"),l(!0)}).fail(function(){u.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'),l(!0)})}function e(){u.html('<iframe class="venoframe" src="'+g+'"></iframe>'),l()}function o(t){var a=g.split("/"),e=a[a.length-1],o=t?"?autoplay=1":"";u.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="//player.vimeo.com/video/'+e+o+'"></iframe>'),l()}function i(t){var a=g.split("/"),e=a[a.length-1],o=t?"?autoplay=1":"";u.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen src="//www.youtube.com/embed/'+e+o+'"></iframe>'),l()}function n(){u.html('<div class="vbox-inline">'+t(g).html()+"</div>"),l()}function r(){Q=t(".vbox-content").find("img"),Q.one("load",function(){l()}).each(function(){this.complete&&t(this).load()})}function l(){f.html(X),u.find(">:first-child").addClass("figlio"),t(".figlio").css("width",C).css("height",j).css("padding",m).css("background",s),I=u.outerHeight(),G=t(window).height(),G>I+80?(D=(G-I)/2,u.css("margin-top",D),u.css("margin-bottom",D)):(u.css("margin-top","40px"),u.css("margin-bottom","40px")),u.animate({opacity:"1"},"slow")}function d(){t(".vbox-content").length&&(I=u.height(),G=t(window).height(),G>I+80?(D=(G-I)/2,u.css("margin-top",D),u.css("margin-bottom",D)):(u.css("margin-top","40px"),u.css("margin-bottom","40px")))}var c,s,v,f,m,b,h,u,g,p,x,y,w,k,C,j,q,z,H,D,E,L,P,Q,X,A,B,F,G,I,J,K;t.fn.extend({venobox:function(l){var d={framewidth:"",frameheight:"",border:"0",bgcolor:"#fff",titleattr:"title",numeratio:!1,infinigall:!1,overlayclose:!0},D=t.extend(d,l);return this.each(function(){var l=t(this);return l.data("venobox")?!0:(l.addClass("vbox-item"),l.data("framewidth",D.framewidth),l.data("frameheight",D.frameheight),l.data("border",D.border),l.data("bgcolor",D.bgcolor),l.data("numeratio",D.numeratio),l.data("infinigall",D.infinigall),l.data("overlayclose",D.overlayclose),l.data("venobox",!0),void l.click(function(d){function Q(){A=l.data("gall"),E=l.data("numeratio"),q=l.data("infinigall"),z=t('.vbox-item[data-gall="'+A+'"]'),z.length>1&&E===!0?(v.html(z.index(l)+1+" / "+z.length),v.show()):v.hide(),B=z.eq(z.index(l)+1),F=z.eq(z.index(l)-1),l.attr(D.titleattr)?(X=l.attr(D.titleattr),f.show()):(X="",f.hide()),z.length>1&&q===!0?(J=!0,K=!0,B.length<1&&(B=z.eq(0)),z.index(l)<1&&(F=z.eq(z.index(z.length)))):(B.length>0?(t(".vbox-next").css("display","block"),J=!0):(t(".vbox-next").css("display","none"),J=!1),z.index(l)>0?(t(".vbox-prev").css("display","block"),K=!0):(t(".vbox-prev").css("display","none"),K=!1))}function G(t){27===t.keyCode&&I()}function I(){t("body").removeClass("vbox-open"),t("body").unbind("keydown",G),P.animate({opacity:0},500,function(){P.remove(),H=!1,l.focus()})}d.stopPropagation(),d.preventDefault(),l=t(this),L=l.data("overlay"),C=l.data("framewidth"),j=l.data("frameheight"),c=l.data("autoplay")||!1,m=l.data("border"),s=l.data("bgcolor"),J=!1,K=!1,H=!1,g=l.data("href")||l.attr("href"),w=l.data("css")||"",t("body").addClass("vbox-open"),b='<div class="vbox-overlay '+w+'" style="background:'+L+'"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>',t("body").append(b),P=t(".vbox-overlay"),h=t(".vbox-container"),u=t(".vbox-content"),v=t(".vbox-num"),f=t(".vbox-title"),u.html(""),u.css("opacity","0"),Q(),P.css("min-height",t(window).outerHeight()),P.animate({opacity:1},250,function(){"iframe"==l.data("type")?e():"inline"==l.data("type")?n():"ajax"==l.data("type")?a():"vimeo"==l.data("type")?o(c):"youtube"==l.data("type")?i(c):(u.html('<img src="'+g+'">'),r())});var M={prev:function(){H||(H=!0,L=F.data("overlay"),C=F.data("framewidth"),j=F.data("frameheight"),m=F.data("border"),s=F.data("bgcolor"),g=F.data("href")||F.attr("href"),c=F.data("autoplay"),X=F.attr(D.titleattr)?F.attr(D.titleattr):"",void 0===L&&(L=""),u.animate({opacity:0},500,function(){P.css("background",L),"iframe"==F.data("type")?e():"inline"==F.data("type")?n():"ajax"==F.data("type")?a():"youtube"==F.data("type")?i(c):"vimeo"==F.data("type")?o(c):(u.html('<img src="'+g+'">'),r()),l=F,Q(),H=!1}))},next:function(){H||(H=!0,L=B.data("overlay"),C=B.data("framewidth"),j=B.data("frameheight"),m=B.data("border"),s=B.data("bgcolor"),g=B.data("href")||B.attr("href"),c=B.data("autoplay"),X=B.attr(D.titleattr)?B.attr(D.titleattr):"",void 0===L&&(L=""),u.animate({opacity:0},500,function(){P.css("background",L),"iframe"==B.data("type")?e():"inline"==B.data("type")?n():"ajax"==B.data("type")?a():"youtube"==B.data("type")?i(c):"vimeo"==B.data("type")?o(c):(u.html('<img src="'+g+'">'),r()),l=B,Q(),H=!1}))}};t("body").keydown(function(t){37==t.keyCode&&1==K&&M.prev(),39==t.keyCode&&1==J&&M.next()}),t(".vbox-prev").click(function(){M.prev()}),t(".vbox-next").click(function(){M.next()});var N=".vbox-close, .vbox-overlay";return l.data("overlayclose")||(N=".vbox-close"),t(N).click(function(a){p=".figlio",y=".vbox-prev",x=".vbox-next",k=".figlio *",t(a.target).is(p)||t(a.target).is(x)||t(a.target).is(y)||t(a.target).is(k)||I()}),t("body").keydown(G),!1}))})}}),t(window).resize(function(){d()})}(jQuery);


/*! -------------------------------------------------------------------
 5. imagesLoaded jQuery
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
----------------------------------------------------------------------*/

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});



/*! -------------------------------------------------------------------
* 6. jquery.counterup
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
------------------------------------------------------------------------*/
(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

/*! ---------------------------------------------------------------------
    7. WOW JS
    WOW - v1.0.2 - 2014-10-28
    Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT
------------------------------------------------------------------------ */
(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/* ---------------------------------------------
 9. jQuery Site Preloaded animation
 --------------------------------------------- */
$(window).on('load', function() {
    $('body').imagesLoaded(function(){
        $('.preloader-wave-effect').fadeOut();
        $('#preloader-wrapper').delay(200).fadeOut('slow');
    });
});
(function($) {
    'use strict';

    $(".slider-scroll-btn").on('click', function() {
        $('html,body').animate({
            scrollTop: $("#adam-about-id").offset().top},
            'slow');
    });

})(jQuery);   
/* ---------------------------------------------
    3. Header sticky style.
--------------------------------------------- */
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function () {
    $(window).on('scroll', function(){
        $('.navbar-ex1-collapse').collapse('hide')
    });
});



/*!
 * Bootstrap-submenu v2.0.4 (https://vsn4ik.github.io/bootstrap-submenu/)
 * Copyright 2014-2016 Vasily A. (https://github.com/vsn4ik)
 * Licensed under the MIT license
 */

"use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(b){this.$element=a(b),this.$menu=this.$element.closest(".dropdown-menu"),this.$main=this.$menu.parent(),this.$items=this.$menu.children(".dropdown-submenu"),this.init()}function c(b){this.$element=a(b),this.$main=this.$element.parent(),this.$menu=this.$main.children(".dropdown-menu"),this.$subs=this.$main.siblings(".dropdown-submenu"),this.$items=this.$menu.children(".dropdown-submenu"),this.init()}function d(b){this.$element=a(b),this.$main=this.$element.parent(),this.$menu=this.$main.children(".dropdown-menu"),this.$items=this.$menu.children(".dropdown-submenu"),this.init()}b.prototype={init:function(){this.$element.on("keydown",a.proxy(this,"keydown"))},close:function(){this.$main.removeClass("open"),this.$items.trigger("hide.bs.submenu")},keydown:function(a){27==a.keyCode&&(a.stopPropagation(),this.close(),this.$main.children("a, button").trigger("focus"))}},a.extend(c.prototype,b.prototype,{init:function(){this.$element.on({click:a.proxy(this,"click"),keydown:a.proxy(this,"keydown")}),this.$main.on("hide.bs.submenu",a.proxy(this,"hide"))},click:function(a){a.preventDefault(),a.stopPropagation(),this.toggle()},hide:function(a){a.stopPropagation(),this.close()},open:function(){this.$main.addClass("open"),this.$subs.trigger("hide.bs.submenu")},toggle:function(){this.$main.hasClass("open")?this.close():this.open()},keydown:function(b){32==b.keyCode&&b.preventDefault(),-1!=a.inArray(b.keyCode,[13,32])&&this.toggle()}}),d.prototype={init:function(){this.$menu.off("keydown.bs.dropdown.data-api"),this.$menu.on("keydown",a.proxy(this,"itemKeydown")),this.$menu.find("li > a").each(function(){new b(this)}),this.$menu.find(".dropdown-submenu > a").each(function(){new c(this)}),this.$main.on("hidden.bs.dropdown",a.proxy(this,"hidden"))},hidden:function(){this.$items.trigger("hide.bs.submenu")},itemKeydown:function(b){if(-1!=a.inArray(b.keyCode,[38,40])){b.preventDefault(),b.stopPropagation();var c=this.$menu.find("li:not(.disabled):visible > a"),d=c.index(b.target);if(38==b.keyCode&&0!==d)d--;else{if(40!=b.keyCode||d===c.length-1)return;d++}c.eq(d).trigger("focus")}}};var e=a.fn.submenupicker;return a.fn.submenupicker=function(b){var c=this instanceof a?this:a(b);return c.each(function(){var b=a.data(this,"bs.submenu");b||(b=new d(this),a.data(this,"bs.submenu",b))})},a.fn.submenupicker.Constructor=d,a.fn.submenupicker.noConflict=function(){return a.fn.submenupicker=e,this},a.fn.submenupicker});
