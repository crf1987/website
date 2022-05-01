$(function() {

    /*! picturefill - v3.0.2 - 2016-02-12
     * https://scottjehl.github.io/picturefill/
     * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
     */
    !function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"  "===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);
    
    
    /**
     * focus-ring.js
     * 銈儶銉冦偗鏅傘伀`.focus-ring`銈掍粯涓庛仐銇俱仚銆�
     * 浠ヤ笅銇倛銇嗐伀鎸囧畾銇欍倠銇撱仺銇с偗銉儍銈檪銇犮亼銇紙`:focus`銇惈銇俱仾銇勶級銈广偪銈ゃ儷銈掓寚瀹氥仚銈嬨亾銇ㄣ亴銇с亶銇俱仚銆�
     * .selector:focus:not(.focus-ring) {}
     * @see https://github.com/WICG/focus-ring
     */
    $(function() {
      (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (factory());
      }(this, (function () { 'use strict';
    
      /**
       * Module export
       *
       * @param {Element} el
       * @return {ClassList}
       */
    
      var index = function (el) {
        return new ClassList(el);
      };
    
      /**
       * Initialize a new ClassList for the given element
       *
       * @param {Element} el DOM Element
       */
      function ClassList(el) {
        if (!el || el.nodeType !== 1) {
          throw new Error('A DOM Element reference is required');
        }
    
        this.el = el;
        this.classList = el.classList;
      }
    
      /**
       * Check token validity
       *
       * @param token
       * @param [method]
       */
      function checkToken(token, method) {
        method = method || 'a method';
    
        if (typeof token != 'string') {
          throw new TypeError(
            'Failed to execute \'' + method + '\' on \'ClassList\': ' +
            'the token provided (\'' + token + '\') is not a string.'
          );
        }
        if (token === "") {
          throw new SyntaxError(
            'Failed to execute \'' + method + '\' on \'ClassList\': ' +
            'the token provided must not be empty.'
          );
        }
        if (/\s/.test(token)) {
          throw new Error(
            'Failed to execute \'' + method + '\' on \'ClassList\': ' +
            'the token provided (\'' + token + '\') contains HTML space ' +
            'characters, which are not valid in tokens.'
          );
        }
      }
    
      /**
       * Return an array of the class names on the element.
       *
       * @return {Array}
       */
      ClassList.prototype.toArray = function () {
        var str = (this.el.getAttribute('class') || '').replace(/^\s+|\s+$/g, '');
        var classes = str.split(/\s+/);
        if ('' === classes[0]) { classes.shift(); }
        return classes;
      };
    
      /**
       * Add the given `token` to the class list if it's not already present.
       *
       * @param {String} token
       */
      ClassList.prototype.add = function (token) {
        var classes, index, updated;
        checkToken(token, 'add');
    
        if (this.classList) {
          this.classList.add(token);
        }
        else {
          // fallback
          classes = this.toArray();
          index = classes.indexOf(token);
          if (index === -1) {
            classes.push(token);
            this.el.setAttribute('class', classes.join(' '));
          }
        }
    
        return;
      };
    
      /**
       * Check if the given `token` is in the class list.
       *
       * @param {String} token
       * @return {Boolean}
       */
      ClassList.prototype.contains = function (token) {
        checkToken(token, 'contains');
    
        return this.classList ?
          this.classList.contains(token) :
          this.toArray().indexOf(token) > -1;
      };
    
      /**
       * Remove any class names that match the given `token`, when present.
       *
       * @param {String|RegExp} token
       */
      ClassList.prototype.remove = function (token) {
        var arr, classes, i, index, len;
    
        if ('[object RegExp]' == Object.prototype.toString.call(token)) {
          arr = this.toArray();
          for (i = 0, len = arr.length; i < len; i++) {
            if (token.test(arr[i])) {
              this.remove(arr[i]);
            }
          }
        }
        else {
          checkToken(token, 'remove');
    
          if (this.classList) {
            this.classList.remove(token);
          }
          else {
            // fallback
            classes = this.toArray();
            index = classes.indexOf(token);
            if (index > -1) {
              classes.splice(index, 1);
              this.el.setAttribute('class', classes.join(' '));
            }
          }
        }
    
        return;
      };
    
      /**
       * Toggle the `token` in the class list. Optionally force state via `force`.
       *
       * Native `classList` is not used as some browsers that support `classList` do
       * not support `force`. Avoiding `classList` altogether keeps this function
       * simple.
       *
       * @param {String} token
       * @param {Boolean} [force]
       * @return {Boolean}
       */
      ClassList.prototype.toggle = function (token, force) {
        checkToken(token, 'toggle');
    
        var hasToken = this.contains(token);
        var method = hasToken ? (force !== true && 'remove') : (force !== false && 'add');
    
        if (method) {
          this[method](token);
        }
    
        return (typeof force == 'boolean' ? force : !hasToken);
      };
    
      /**
       * https://github.com/WICG/focus-ring
       */
      function init() {
        var hadKeyboardEvent = false;
        var elWithFocusRing;
    
        var inputTypesWhitelist = {
          'text': true,
          'search': true,
          'url': true,
          'tel': true,
          'email': true,
          'password': true,
          'number': true,
          'date': true,
          'month': true,
          'week': true,
          'time': true,
          'datetime': true,
          'datetime-local': true,
        };
    
        /**
         * Computes whether the given element should automatically trigger the
         * `focus-ring` class being added, i.e. whether it should always match
         * `:focus-ring` when focused.
         * @param {Element} el
         * @return {boolean}
         */
        function focusTriggersKeyboardModality(el) {
          var type = el.type;
          var tagName = el.tagName;
    
          if (tagName == 'INPUT' && inputTypesWhitelist[type] && !el.readonly)
            return true;
    
          if (tagName == 'TEXTAREA' && !el.readonly)
            return true;
    
          if (el.contentEditable == 'true')
            return true;
    
          return false;
        }
    
        /**
         * Add the `focus-ring` class to the given element if it was not added by
         * the author.
         * @param {Element} el
         */
        function addFocusRingClass(el) {
          if (index(el).contains('focus-ring'))
            return;
          index(el).add('focus-ring');
          el.setAttribute('data-focus-ring-added', '');
        }
    
        /**
         * Remove the `focus-ring` class from the given element if it was not
         * originally added by the author.
         * @param {Element} el
         */
        function removeFocusRingClass(el) {
          if (!el.hasAttribute('data-focus-ring-added'))
            return;
          index(el).remove('focus-ring');
          el.removeAttribute('data-focus-ring-added');
        }
    
        /**
         * On `keydown`, set `hadKeyboardEvent`, add `focus-ring` class if the
         * key was Tab.
         * @param {Event} e
         */
        function onKeyDown(e) {
          if (e.altKey || e.ctrlKey || e.metaKey)
            return;
    
          if (e.keyCode != 9)
            return;
    
          hadKeyboardEvent = true;
        }
    
        /**
         * On `focus`, add the `focus-ring` class to the target if:
         * - the target received focus as a result of keyboard navigation
         * - the event target is an element that will likely require interaction
         *   via the keyboard (e.g. a text box)
         * @param {Event} e
         */
        function onFocus(e) {
          if (e.target == document)
            return;
    
          if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
            addFocusRingClass(e.target);
            hadKeyboardEvent = false;
          }
        }
    
        /**
         * On `blur`, remove the `focus-ring` class from the target.
         * @param {Event} e
         */
        function onBlur(e) {
          if (e.target == document)
            return;
    
          removeFocusRingClass(e.target);
        }
    
        /**
         * When the window regains focus, restore the focus-ring class to the element
         * to which it was previously applied.
         */
        function onWindowFocus() {
          if (document.activeElement == elWithFocusRing)
            addFocusRingClass(elWithFocusRing);
    
          elWithFocusRing = null;
        }
    
        /**
         * When switching windows, keep track of the focused element if it has a
         * focus-ring class.
         */
        function onWindowBlur() {
          if (index(document.activeElement).contains('focus-ring')) {
            // Keep a reference to the element to which the focus-ring class is applied
            // so the focus-ring class can be restored to it if the window regains
            // focus after being blurred.
            elWithFocusRing = document.activeElement;
          }
        }
    
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('focus', onFocus, true);
        document.addEventListener('blur', onBlur, true);
        window.addEventListener('focus', onWindowFocus, true);
        window.addEventListener('blur', onWindowBlur, true);
    
        index(document.body).add('js-focus-ring');
      }
    
      /**
       * Subscription when the DOM is ready
       * @param {Function} callback
       */
      function onDOMReady(callback) {
        var load;
        if (document.readyState === 'complete') {
          callback();
        } else {
          var loaded = false;
    
          /**
           * Callback wrapper for check loaded state
           */
           load = function(){
            if (!loaded) {
              loaded = true;
              callback();
            }
           }
          // function load() {
          //   if (!loaded) {
          //     loaded = true;
    
          //     callback();
          //   }
          // }
    
          document.addEventListener('DOMContentLoaded', load, false);
          window.addEventListener('load', load, false);
        }
      }
    
      onDOMReady(init);
    
      })));
    }());
    
      /**
       * 銉栥儵銈︺偠銉愩儍銈檪銇儶銉兗銉夈仐銇俱仚銆�
       * 妞滅储绲愭灉鐢婚潰銇嬨倝鎴汇仯銇熴仺銇嶃伀銆佹绱儠銈┿兗銉犮伄銈点偢銈с偣銉堛亴鍔广亱銇亜銇熴倎銆�
       */
      window.onpageshow = function(e) {
        if (e.persisted) {
          location.reload();
        }
      };
    
      /**
       * 鎸囧畾浣嶇疆銇俱仹銈广偗銉兗銉仚銈嬨仺pageTop銉溿偪銉炽亴琛ㄧず銇曘倢銇俱仚銆�
       * 銈般儹銉笺儛銉儠銉冦偪銉笺亴琛ㄧず銇曘倢銇熴倝fixed銇岃В闄ゃ仌銈屻伨銇欍€�
       */
      function GlobalFooterPageTop() {
        if($('.st-GlobalFooter_PageTop').length && window.innerWidth >= 768) {
          var $pageTop = $('.st-GlobalFooter_PageTop');
          var offsetTop;
          if($('.st-Title').length) {
            offsetTop = $('.st-Title').offset().top;
          } else {
            offsetTop = $('main').offset().top;
          }
          var GlobalFooterHeight = $('.st-GlobalFooter').outerHeight();
          // 銈广偗銉兗銉綅缃�
          var scrollTop = $(document).scrollTop();
          // 銉夈偔銉ャ儭銉炽儓鍏ㄤ綋銇珮銇�
          var documentHeight = $(document).innerHeight();
          // 琛ㄧず銇椼仸銇勩倠鐢婚潰銇珮銇�
          var windowHeight = $(window).innerHeight();
    
          // 鍒濇湡鍊わ細pageTop銈掗潪琛ㄧず
          $pageTop.attr('aria-hidden', true);
          // 銉氥兗銈搞偪銈ゃ儓銉伨銇с偣銈儹銉笺儷銇椼仧銈夎〃绀�
          if(scrollTop >= offsetTop && $pageTop.attr('aria-hidden') === 'true') {
            $pageTop.attr('aria-hidden', false);
          }
          // 銈般儹銉笺儛銉儠銉冦偪銉笺亴瑕嬨亪銇熴倝浣嶇疆鍥哄畾銈掕В闄�
          if((scrollTop + windowHeight) >= (documentHeight - GlobalFooterHeight)) {
            $pageTop.addClass('st-GlobalFooter_PageTop-static');
          } else {
            $pageTop.removeClass('st-GlobalFooter_PageTop-static');
          }
        }
      }
      GlobalFooterPageTop();
      $(window).on('load scroll resize', function() {
        GlobalFooterPageTop();
      });
    
      /**
       * 銈广儬銉笺偣銈广偗銉兗銉€�
       */
      if($('.st-GlobalFooter_PageTop').length) {
        $('.st-GlobalFooter_PageTop').on('click', function(e) {
          $('html, body').animate({scrollTop: 0}, 500, 'swing');
          e.preventDefault();
        });
      }
    
      /**
       * 銈广儐銉笺儓銉°兂銉堛倰瑙︺倢銇亜銈堛亞銇仚銈嬨€�
       * `pointer-events`銇湭瀵惧繙銇儢銉┿偊銈躲伄銉曘偐銉笺儷銉愩儍銈€�
       */
      if($('.st-GlobalHeader_StatementArea').length) {
        $('.st-GlobalHeader_StatementArea').css('pointer-events', 'none');
      }
    
      /**
       * 銈枫兂銈偟銉笺儊銇儦銉笺偢閬风Щ銇嚘鐞嗐倰杩藉姞銇欍倠銆�
       * 銈点偢銈с偣銉堛倰銈儶銉冦偗銇椼仧鏅傘€�
       * 銇俱仧銇偔銉笺儨銉笺儔銇ч伕鎶炪仐銇熺洿寰屻伀銉氥兗銈搁伔绉汇仌銇涖倠銆�
       */
      function syncsearchPageTransition() {
        $('.st-SearchButton').on('click', function() {
          var $contentsBody = $('#SS_Frame').contents().find('body');
          // 銈儶銉冦偗銇俱仧銇偪銉冦儣銇椼仧鏅傘€�
          $contentsBody.find('.SS_suggest').on('mouseup', function(evt) {
            $('.st-SearchForm_Form').submit();
          });
          // 銈兗銉溿兗銉夈仹閬告姙銇椼仧鏅傘€�
          $('#SS_searchQuery').on('keypress', function(e){
            if(e.which === 13) {
            $('.st-SearchForm_Form').submit();
            }
          });
        });
      }
      syncsearchPageTransition();
    
      /**
       * 妞滅储绲愭灉銉氥兗銈搞伀娓°仚鍊ゃ倰澶夋洿銇欍倠銆�
       *
       * PC銉汇偣銉炪儧銇ф浮銇欏€�(name=design)銇屽銈忋倠銆�
       * 銉兂銈广儩銉炽偡銉栥伄鍫村悎銆佸€ゃ倰澶夈亪銈嬪繀瑕併亴銇亸鍑︾悊銇笉瑕併€�
       * 鍓嶆彁: 鍊ゃ倰澶夈亪銈嬪牬鍚堛€乮nput[name=design]銇玧s-syncsearch-value銈儵銈广倰銇ゃ亼銇︺€併仢銈屻仦銈屻伄鍊ゃ倰data灞炴€с仹瑷畾銇椼仸銇娿亸銆�
       */
      function changeSyncsearchValue() {
        var $input = $('.js-syncsearch-value[name="design"]');
        if ($input.length == 0) {
          return;
        }
        var dataName = (window.innerWidth < 1024) ? 'design-sp' : 'design-pc';
        $input.val($input.data(dataName));
      }
      changeSyncsearchValue();
    
      /**
       * 銈般儹銉笺儛銉儤銉冦儉銉煎唴銇亗銈嬨儭銈ゃ兂銉娿儞銈层兗銈枫儳銉炽倓妞滅储銉栥儹銉冦偗銇仼銇嚘鐞嗐倰
       * 銇俱仺銈併仸銇勩伨銇欍€�
       */
      function GlobalHeader() {
    
        // 妯箙銇嬨倝銈广優銉涖亱PC銇嬨倰鍒ゅ畾銇欍倠銆�
        function searchIsSp() {
          var isSp;
          var windowWIdth = window.innerWidth;
          if(windowWIdth >= 1024) {
            isSp = false;
          } else {
            isSp = true;
          }
          return isSp;
        }
        var isSp = searchIsSp();
    
        // body銇玸p銇媝c銇偗銉┿偣鍚嶃倰浠樹笌銇欍倠銆�
        function addBreakpointClass() {
          var $targert = $('body');
          if(isSp) {
            $targert.removeClass('pc').addClass('sp');
          } else {
            $targert.removeClass('sp').addClass('pc');
          }
        }
        addBreakpointClass();
    
        // 瑕佺礌銈掑鏁板寲
        var $toggleButton = $('.st-ToggleButton');
        var $globalNavArea = $('.st-GlobalNav_Area');
        var $searchButton = $('.st-SearchButton');
        var $searchForm = $('.st-SearchForm');
        var $searchFormInput = $('.st-SearchForm_Input');
        var $globalSiteNavLink = $('.st-GlobalSiteNav_Link');
        var $globalSubNavLink = $('.st-GlobalCommonNav_SubLink');
        var globalSiteNavSubArea = 'st-GlobalSiteNav_SubArea';
        var thisHasNextClass = 'st-GlobalSiteNav_Link-hasChildren';
        var $hasNextElement;
        var $thisNextElement;
        var documentClose = 'js-documentClose';
        var $globalNavNavClose = $('.st-GlobalNav_NavClose');
        var $globalNavSearchClose = $('.st-GlobalNav_SearchClose');
        var animateSpeed = 400;
        var $globalCommonNavLink = $('.st-GlobalCommonNav_Link');
        var $globalCommonNavSubArea = $('.st-GlobalCommonNav_SubArea');
    
        // st-GlobalSiteNav锛坈ategorySecond锛�
        // ARIA銇仼銈掑嫊鐨勩伀浠樹笌銇欍倠銆�
        function addAttrSiteNavLink() {
          $globalSiteNavLink.each(function(i) {
            var $thisLink = $(this);
            var hasNextElement = false;
            var navId = i + 1;
    
            if($thisLink.next('.' + globalSiteNavSubArea).length) {
              hasNextElement = true;
              $hasNextElement = $thisLink;
              $thisNextElement = $thisLink.next('.' + globalSiteNavSubArea);
              if(!isSp) {
                $thisNextElement.each(function() {
                  $(this).css({
                    'width': $(window).innerWidth()
                    })
                  .hide();
                });
              }
            }
    
            if(hasNextElement) {
              $thisLink.attr({
                'aria-expanded': 'false',
                'aria-controls': globalSiteNavSubArea + navId
              }).addClass(thisHasNextClass).addClass(documentClose);
              $thisNextElement.attr({
                'aria-hidden': true,
                'id': globalSiteNavSubArea + navId
              });
            }
          });
        }
        addAttrSiteNavLink();
    
        // aria灞炴€с仾銇┿倰浠樹笌銇欍倠銆�
        $toggleButton.attr({
          'aria-controls': 'st-GlobalNav_Area',
          'aria-expanded': false
        });
        $globalNavArea.css({
          display: 'none'
        });
        if(isSp) {
          $globalNavArea.attr('aria-hidden', true).css('display', 'none');
        } else {
          $globalNavArea.attr('aria-hidden', false).css('display', '');
        }
        $searchButton.attr({
          'aria-controls': 'st-SearchForm',
          'aria-expanded': false
        });
        $searchForm.attr({
          'aria-hidden': true
        }).css('width', $(window).innerWidth());
        $globalCommonNavLink.attr({
          'aria-expanded': 'false',
          'aria-controls': 'st-GlobalCommonNav_SubArea'
        });
        $globalCommonNavSubArea.attr({
          'id': 'st-GlobalCommonNav_Link'
        });
        if(isSp) {
          $globalCommonNavSubArea.attr('aria-hidden', true);
        } else {
          $globalCommonNavSubArea.attr('aria-hidden', false);
        }
    
        // 銉夈偔銉ャ儭銉炽儓銈儶銉冦偗瀵捐薄澶栥伄瑕佺礌銇偗銉┿偣銈掍粯涓庛仚銈嬨€�
        $toggleButton.addClass(documentClose);
        $('.st-ToggleButton_Icon').addClass(documentClose);
        $searchButton.addClass(documentClose);
        $('.st-SearchButton_Icon').addClass(documentClose);
        $searchForm.addClass(documentClose);
        $searchFormInput.addClass(documentClose);
        $('.st-SearchForm_Submit').addClass(documentClose);
        $('.' + globalSiteNavSubArea).addClass(documentClose);
        $('.st-GlobalSiteNav_SubAreaInner').addClass(documentClose);
        $('.st-GlobalSiteNav_SubAreaInner').find('.st-Grid').addClass(documentClose);
        $('.st-GlobalSiteNav_SubAreaInner').find('.st-Grid_Item').addClass(documentClose);
        $('.st-GlobalSiteNav_SubList').addClass(documentClose);
        $('.st-GlobalSiteNav_SubLink').addClass(documentClose);
        $('.st-GlobalSiteNav_SubLinkTitle').addClass(documentClose);
    
    
        $globalSiteNavLink.addClass(documentClose);
        $('.st-GlobalSiteNav_LinkIcon').addClass(documentClose);
        $globalCommonNavLink.addClass(documentClose);
        $('.st-GlobalCommonNav_LinkIcon').addClass(documentClose);
        $('.st-GlobalSiteNav_SubLinkTopInner').addClass(documentClose);
        $('.st-GlobalSiteNav_SubLinkTopIcon').addClass(documentClose);
        $('.st-GlobalSiteNav_DivisionTitle').addClass(documentClose);
    
        // 銈儶銉冦偗鏅傘伄鍑︾悊銈掗枹鏁板寲
    
        // 銉夈偔銉ャ儭銉炽儓銈掑浐瀹�
        function fixedScreen() {
          $('html, body').css({
            'width': '100%',
            'height': '100%',
            'overflow': 'hidden',
            'position': 'fixed',
            'top': '0',
            'left': '0'
          });
        }
    
        // 銉夈偔銉ャ儭銉炽儓銇浐瀹氥倰瑙ｉ櫎
        function cancelFixedScreen() {
          $('html, body').css({
            'width': '',
            'height': '',
            'overflow': '',
            'position': '',
            'top': '',
            'left': ''
          });
        }
    
        // Close銉溿偪銉炽倰銇欍伖銇﹂潪琛ㄧず銇仚銈�
        function hideCloseButtons() {
          $globalNavNavClose.attr('aria-hidden', 'true');
          $globalNavSearchClose.attr('aria-hidden', 'true');
        }
    
        // 銉忋兂銉愩兗銈兗銉°儖銉ャ兗銈掗枊銇�
        function showhumbergerMenu() {
          $toggleButton.attr('aria-expanded', true);
          $globalNavArea.attr('aria-hidden', false);
          setTimeout(function() {
            $globalNavArea.css('height', 'calc(100vh + 64px)');
          }, 500)
        }
    
        // 銉忋兂銉愩兗銈兗銉°儖銉ャ兗銈掗枆銇樸倠
        function hideHumbergerMenu() {
          if(isSp) {
            $toggleButton.attr('aria-expanded', false);
            $globalNavArea.attr('aria-hidden', true);
            $globalNavArea.css('height', $(window).outerHeight() + 64);
          } else {
            $toggleButton.attr('aria-expanded', false);
          }
        }
    
        // 妞滅储銉曘偐銉笺儬銈掗枊銇�
        function showSearchMenu() {
          $searchButton.attr('aria-expanded', true);
          $searchForm.attr('aria-hidden', false).slideDown(animateSpeed);
          $globalNavSearchClose.attr('aria-hidden', false);
          $searchFormInput.focus();
        }
        // 妞滅储銉曘偐銉笺儬銈掗枆銇樸倠
        function hideSearchMenu() {
          $searchButton.attr('aria-expanded', false);
          $searchForm.attr('aria-hidden', true).slideUp(animateSpeed);
        }
    
        // 銈点儢銉°儖銉ャ兗銈掋仚銇广仸闁夈仒銈�
        function hideAllMenu(animate) {
          var animate = typeof animate !== 'undefined' ?  animate : 400;
          $globalSiteNavLink.attr('aria-expanded', false);
          $('.' + globalSiteNavSubArea)
            .attr('aria-hidden', true)
            .slideUp(animate, function() {
              $(this).children().hide();
          });
        }
    
        // 銉忋兂銉愩兗銈兗銉°儖銉ャ兗銇睍闁�
        $toggleButton.on('click', function() {
          // 闁夈仒銇︺亜銈嬪牬鍚�
          if($(this).attr('aria-expanded') === 'false') {
            fixedScreen();
            hideSearchMenu();
            showhumbergerMenu();
            $globalNavArea.slideDown(animateSpeed);
          } else {
            cancelFixedScreen();
            hideHumbergerMenu();
            $globalNavArea.slideUp(animateSpeed);
          }
        });
    
        // 妞滅储銉曘偐銉笺儬銇睍闁�
        $searchButton.click(function() {
          // 闁嬨亸鍫村悎
          if($(this).attr('aria-expanded') === 'false') {
            if(isSp) {
              fixedScreen();
              hideHumbergerMenu();
              $globalNavArea.slideUp(0);
            } else {
              hideAllMenu();
              hideCloseButtons();
              cancelFixedScreen();
            }
            showSearchMenu();
    
          } else {
            // 闁夈仒銈嬪牬鍚�
            if(isSp) {
              cancelFixedScreen();
            }
            hideSearchMenu();
            $globalNavSearchClose.attr('aria-hidden', true);
          }
        });
    
        $('.st-SearchForm_Input').on('keydown', function(e) {
          // Tab銈兗銈掓娂銇椼仧銈夈€丆lose銉溿偪銉炽伀銉曘偐銉笺偒銈广仚銈嬨€�
          if(e.which === 9) {
            $globalNavSearchClose.focus().addClass('focus-ring');
            return false;
          }
        });
    
        $globalNavSearchClose.on('keydown', function(e) {
          // Enter銇ㄣ偣銉氥兗銈广偔銉笺倰鎶笺仚銇ㄦ绱儠銈┿兗銉犮伄銉夈儹銉冦儣銉€銈︺兂銉溿偪銉炽伀銉曘偐銉笺偒銈广仚銈�
          if(e.which === 13 || e.which === 32) {
            $('.st-SearchButton').focus().addClass('focus-ring');
          }
          // Tab銈兗銈掓娂銇欍仺妞滅储銉曘偐銉笺儬銇儠銈┿兗銈偣銇欍倠
          if(e.which === 9) {
            $('.st-SearchForm_Input').focus().addClass('focus-ring');
            return false;
          }
        });
    
        // 銉忋兂銉愩兗銈兗銉°儖銉ャ兗鍐呫伄銈偝銉笺儑銈ｃ偑銉炽伄灞曢枊锛圫P锛�
        var $accordionTrigger = '.sp ' + '.' + thisHasNextClass;
        $(document).on('click', $accordionTrigger, function(e) {
          var $thisLink = $(this);
          var $thisLinkNext = $thisLink.next('.' + globalSiteNavSubArea);
          function hideSubMenu() {
            $('.' + thisHasNextClass).attr('aria-expanded', 'false');
            $('.' + thisHasNextClass).next('.' + globalSiteNavSubArea).attr('aria-hidden', 'true');
          }
          // 闁夈仒銇︺亜銈嬪牬鍚�
          if($thisLink.attr('aria-expanded') === 'false') {
            hideSubMenu();
            $thisLink.attr('aria-expanded', true);
            $thisLinkNext.attr('aria-hidden', false).css('display', '');
          } else {
            // 闁嬨亜銇︺亜銈嬪牬鍚�
              hideSubMenu();
              $thisLink.attr('aria-expanded', false);
              $thisLinkNext.attr('aria-hidden', true);
          }
          e.preventDefault();
        });
    
        // 銈般儹銉笺儛銉儭銉嬨儱銉笺伄闁嬮枆
        var $globalNavTrigger = '.pc ' + '.' + thisHasNextClass;
        $(document).on('click', $globalNavTrigger, function(e) {
          var $thisLink = $(this);
          var $controls = $('#' + $thisLink.attr('aria-controls'));
          var $LinkHasChildren = $('.st-GlobalSiteNav_Link-hasChildren');
          var openNav = false;
          $LinkHasChildren.each(function() {
            if($(this).attr('aria-expanded') === 'true') {
              openNav = true;
            }
          });
          hideCloseButtons();
    
          // 闁夈仒銇︺亜銈嬪牬鍚�
          if($controls.attr('aria-hidden') === 'true') {
            // 浠栥伄銉娿儞銇岄枊銇勩仸銇勩仧銈�
            if(openNav === 'true') {
              $LinkHasChildren.attr('aria-expanded', false).next('.' + globalSiteNavSubArea).attr('aria-hidden', true);
            }
            $LinkHasChildren.next('.' + globalSiteNavSubArea).stop().slideUp(0).children().hide();
            hideAllMenu();
            $thisLink.attr({
              'aria-expanded': true
            });
            $controls.attr('aria-hidden', false);
            $globalNavNavClose.attr('aria-hidden', false);
            hideSearchMenu();
            $controls.children().show();
            $controls.slideDown();
    
          } else {
            // 闁嬨亜銇︺亜銈嬪牬鍚�
            hideAllMenu();
            $globalNavNavClose.attr('aria-hidden', true);
    
          }
          e.preventDefault();
        });
    
        // 銈儹銉笺偤銉溿偪銉炽倰闁夈仒銈�
        $globalNavNavClose.on('click', function() {
          var $thisCloase = $(this);
          if($thisCloase.attr('aria-hidden') === 'false') {
            hideAllMenu();
            hideSearchMenu();
            $globalNavNavClose.attr('aria-hidden', 'true');
          }
        });
    
        // 銉忋兂銉愩兗銈兗銉°儖銉ャ兗鍐呫伄About kyoceta鐢ㄣ伄銈偝銉笺儑銈ｃ偑銉炽伄灞曢枊
        $globalCommonNavLink.on('click', function(e) {
          // 闁嬨亸鍫村悎
          if($globalCommonNavLink.attr('aria-expanded') === 'false') {
            $globalCommonNavLink.attr('aria-expanded', true);
            $globalCommonNavSubArea.attr('aria-hidden', false);
          } else {
            // 闁夈仒銈嬪牬鍚�
              $globalCommonNavLink.attr('aria-expanded', false);
              $globalCommonNavSubArea.attr('aria-hidden', true);
          }
          e.preventDefault();
        });
    
        $(document).on('keydown', function(e) {
          // 妞滅储銉栥儹銉冦偗銈掑睍闁嬫檪銇獷sc銈兗銈掓娂銇欍仺妞滅储銉栥儹銉冦偗銈掗枆銇樸倠銆�
          var formFlag = false;
          $('.st-SearchForm').each(function() {
            if($('.st-SearchForm').attr('aria-hidden') === 'false') {
              formFlag = true
            }
          });
          if(formFlag === true && e.which === 27) {
            // 闁夈仒銈嬪牬鍚�
            if(isSp) {
              cancelFixedScreen();
            }
            hideSearchMenu();
            $globalNavSearchClose.attr('aria-hidden', true);
            $searchButton.focus().addClass('focus-ring');
            formFlag = false;
          }
    
          // 銉°偆銉炽儕銉撱偛銉笺偡銉с兂銈掑睍闁嬫檪銇獷sc銈兗銈掓娂銇欍仺妞滅储銉栥儹銉冦偗銈掗枆銇樸倠銆�
          var navFlag = false;
          $('.st-GlobalSiteNav_Link').each(function() {
            if($(this).attr('aria-expanded') === 'true') {
              navFlag = true
            }
          });
          if(navFlag === true && e.which === 27) {
            hideAllMenu();
            hideCloseButtons();
            navFlag = false;
          }
        });
    
        $globalNavSearchClose.keydown(function(e) {
          // 妞滅储銉栥儹銉冦偗銇枆銇樸倠銉溿偪銉炽仹shift + Tab銈掓娂銇欍仺妞滅储銉曘偐銉笺儬銇Щ鍕曘仚銈嬨€�
          if(e.shiftKey) {
            if(e.which === 9) {
              $searchFormInput.focus();
              return false;
            }
          }
        });
    
        /**
         * 銈般儹銉笺儛銉儕銉撱偛銉笺偡銉с兂銇屻儔銉儍銉椼儉銈︺兂銇仺銇嶃伄鍑︾悊
         */
        function DropGlobalNav() {
    
          var $win = $(window);
          var $dropdown = $('#st-DropGlovalNav');
          var $dropdownBtn = $('#st-DropGnavButton');
          var $closeBtn = $('.st-GlobalNav_DropGnavClose');
          var $searchBtn = $('#st-SearchButton');
          var $accordionBtn = $('.st-DropGlobalNav_LinkTop');
          var $accordion = $('#st-DropGlovalNav_List');
          var $firstLink = $accordion.find('.st-DropGlobalNav_Item').eq(0).find('.st-DropGlobalNav_Link');
          var $lastLink = $accordion.find('.st-DropGlobalNav_Item').eq(-2).find('.st-DropGlobalNav_Link');
          var slideSpeed = 300;
    
          // 銉夈儹銉冦儣銉€銈︺兂銇屽瓨鍦ㄣ仐銇亜鍫村悎銇祩浜嗐仚銈�
          if(!$dropdownBtn[0]) return false;
    
          var EXCLUDED_CLASS = [
            // 銇撱伄class銈掓寔銇よ绱犮倰銈儶銉冦偗銇椼仧鏅傘伅銉夈儹銉冦儣銉€銈︺兂銈掗枆銇樸仾銇�
            'st-GlobalNav_Area',
            'st-DropGlovalNav',
            'st-DropGlobalNav_Item'
            ];
          var flag = {
            dropdownHidden : true, // PC銇с儔銉儍銉椼儉銈︺兂銇岄枆銇樸仸銇勩倠銇�
            accordionHidden : true, // SP銇с偄銈炽兗銉囥偅銈兂銇岄枆銇樸仸銇勩倠銇�
            sp : ( window.innerWidth < 1024 )? true: false, // SP銇嬨仼銇嗐亱
            anime : false, // 銈儖銉°兗銈枫儳銉冲嚘鐞嗕腑銇�
            timer : false, // 銉偟銈ゃ偤鐢ㄣ偪銈ゃ優銉�
            breakpoint : false // 銉偟銈ゃ偤銇倛銈娿儢銉兗銈儩銈ゃ兂銉堛亴鍒囥倞鏇裤倧銇ｃ仧銇嬨仼銇嗐亱
          };
    
          // aria灞炴€с倰鍚勩儠銉┿偘銇繙銇樸仸澶夋洿銇欍倠
          var changeAttribute = function(){
            $dropdown.attr('aria-hidden', String(flag.dropdownHidden));
            $dropdownBtn.attr('aria-expanded', String(!flag.dropdownHidden));
            $closeBtn.attr('aria-hidden', String(flag.dropdownHidden));
            $accordionBtn.attr('aria-expanded', String(!flag.accordionHidden));
          };
          // 銉夈儹銉冦儣銉€銈︺兂or銈偝銉笺儑銈ｃ偑銉炽伄闁嬮枆寰屻伀鍛笺伋鍑恒仚鍑︾悊
          // 銉曘儵銈般仺灞炴€с倰澶夋洿銇椼€併偄銉嬨儭銉笺偡銉с兂銉曘儵銈般倰鎶樸倠
          var afterAnimation = function(strings){
            if(strings === 'dropdown'){
              flag.dropdownHidden = !flag.dropdownHidden;
            } else {
              flag.accordionHidden = !flag.accordionHidden;
            }
            changeAttribute();
            flag.anime = false;
          }
          // 銈广儵銈ゃ儔銈掗枆銇樸倠鍑︾悊
          var closeDropdown = function(){
            if(!flag.anime){
              flag.anime = true;
              $dropdown.slideUp(slideSpeed, function(){
                afterAnimation('dropdown');
              });
            }
          };
    
          // 銉兗銉夋檪銇玃C骞呫伄鍫村悎銇€併儔銉儍銉椼儉銈︺兂銉°儖銉ャ兗銈掗殸銇椼仸銇娿亸
          if(!flag.sp) $dropdown.hide();
          changeAttribute();
    
          // 銉曘儵銈般伀蹇溿仒銇︺儔銉儍銉椼儉銈︺兂銈掗枊闁夈仚銈�
          $dropdownBtn.on('click', function(e){
            if(!flag.anime){
              flag.anime = true;
              if(flag.dropdownHidden){
                $dropdown.slideDown(slideSpeed, function(){
                  afterAnimation('dropdown');
                });
              } else {
                $dropdown.slideUp(slideSpeed, function(){
                  afterAnimation('dropdown');
                });
              }
            }
            e.preventDefault();
          });
    
          // Enter銈掓娂銇椼仧鍫村悎銇渶鍒濄伄銉兂銈伀銉曘偐銉笺偒銈广倰鍚堛倧銇涖倠
          $dropdownBtn.on('keydown', function(e) {
            if(e.which === 13) {
              setTimeout(function() {
                $firstLink.focus().addClass('focus-ring');
              });
            }
          });
    
          // 鏈€寰屻伄銉兂銈仹Tab銈兗銈掓娂銇欍仺闁夈仒銈嬨儨銈裤兂銇Щ鍕曘仚銈�
          $firstLink.on('keydown', function(e) {
           // shift + Tab銈掓娂銇欍仺鍓嶃伄銉兂銈伀銉曘偐銉笺偒銈广仚銈�
            if(e.shiftKey) {
              if(e.which === 9) {
                $closeBtn.focus().addClass('focus-ring');
                return false;
              }
            }
          });
    
          // 鏈€寰屻伄銉兂銈仹Tab銈兗銈掓娂銇欍仺闁夈仒銈嬨儨銈裤兂銇Щ鍕曘仚銈�
          $lastLink.on('keydown', function(e) {
           // shift + Tab銈掓娂銇欍仺鍓嶃伄銉兂銈伀銉曘偐銉笺偒銈广仚銈�
            if(e.shiftKey) {
              if(e.which === 9) {
                $(this).parent().prev().find('a').focus().addClass('focus-ring');
                return false;
              }
            }
            // Tab銈兗銈掓娂銇椼仧銈夐枆銇樸倠銉溿偪銉炽伀銉曘偐銉笺偒銈广仚銈�
            if(e.which === 9) {
              $closeBtn.focus().addClass('focus-ring');
              return false;
            }
          });
    
          $closeBtn.keydown(function(e) {
            // 闁夈仒銈嬨儨銈裤兂銇hift + Tab銈掓娂銇欍仺鏈€寰屻伄銉兂銈伀銉曘偐銉笺偒銈广仚銈�
            if(e.shiftKey) {
              if(e.which === 9) {
                $lastLink.focus().addClass('focus-ring');
                return false;
              }
            }
            // Enter銈兗銈掓娂銇椼仧銈夈儔銉儍銉椼儉銈︺兂銉溿偪銉炽伀銉曘偐銉笺偒銈广仚銈�
            if(e.which === 13) {
              setTimeout(function() {
                $dropdownBtn.focus().addClass('focus-ring');
              });
            }
            // Tab銈兗銈掓娂銇椼仧銈夋渶鍒濄伄銉兂銈伀銉曘偐銉笺偒銈广仚銈�
            if(e.which === 9) {
              $firstLink.focus().addClass('focus-ring');
              return false;
            }
          });
    
          // 銉娿儞銈层兗銈枫儳銉炽倰灞曢枊涓伀Esc銈掓娂銇欍仺銉娿儞銈层兗銈枫儳銉炽倰闁夈仒銈�
          $win.on('keydown', function(e) {
            var flag = false;
            if($('#st-DropGlovalNav').attr('aria-hidden') === 'false') {
              flag = true;
            }
            if(flag === true && e.which === 27) {
              if(!flag.sp){
                closeDropdown();
                e.preventDefault();
              }
              $dropdownBtn.focus().addClass('focus-ring');
              formFlag = false;
            }
            if(flag === false && e.which !== 27) {
              $dropdownBtn.removeClass('focus-ring');
            }
          });
    
          // 闁夈仒銈嬨儨銈裤兂銈掓娂銇椼仧銇ㄣ亶銇嚘鐞�
          $closeBtn.on('click', function(e){
            if(!flag.sp){
              closeDropdown();
              e.preventDefault();
            }
          });
    
          // PC鏅傘伀銈ㄣ儶銈㈠銈掋偗銉儍銈仐銇熷牬鍚堛€併儔銉儍銉椼儉銈︺兂銈掗枆銇樸倠
          $win.on('click', function(e){
            var clickedArea = e.target.parentElement.className;
            clickedArea = clickedArea.split(' ');
            // 鎸併仯銇︺亜銈媍lass銇岄櫎澶栥儶銈广儓銇亗銈嬨亱纰鸿獚
            if( !flag.dropdownHidden && !flag.anime && !flag.sp ){
              flag.hasExcludedClass = false;
              for( var i=0; i < clickedArea.length; i++ ){
                if(EXCLUDED_CLASS.indexOf(clickedArea[i]) !== -1 ) {
                  flag.hasExcludedClass = true;
                  break;
                }
              }
              if(!flag.hasExcludedClass) {
                closeDropdown();
              }
            }
          });
    
          // 妞滅储銉溿偪銉炽亴闁嬨亜銇熷牬鍚堛€併儔銉儍銉椼儉銈︺兂銈掗枆銇樸倠
          $searchBtn.on('click', function(){
            if(!flag.dropdownHidden && !flag.anime && !flag.sp) {
              flag.anime = true;
              $closeBtn.hide();
              $dropdown.slideUp(slideSpeed, function(){
                $closeBtn.removeAttr('style');
                afterAnimation('dropdown');
              });
            }
          });
    
          // 銈广優銉涖伄鐧姐亜銈偝銉笺儑銈ｃ偑銉�
          $accordionBtn.on('click', function(e){
            var $accordionTarget = $('#' + $(this).attr('aria-controls'));
            if(!flag.anime){
              flag.anime = true;
              if(flag.accordionHidden) {
                $accordionBtn.attr('aria-expanded', 'true');
                $accordionTarget.slideDown(slideSpeed, function(){
                  afterAnimation('accordion');
                })
              } else {
                $accordionTarget.slideUp(slideSpeed, function(){
                  afterAnimation('accordion');
                });
              }
            }
            e.preventDefault();
          });
    
          // 銈︺偆銉炽儔銈︺儶銈点偆銈恒伄鐩ｈ
          $win.on('resize', function(){
            if(flag.timer) clearTimeout(flag.timer);
            flag.timer = setTimeout(function() {
              // 銈︺偆銉炽儔銈︺儶銈点偆銈恒伀銈堛倞銆丳C/SP銉兗銉夈亴鍒囥倞鏇裤倧銇ｃ仧銇嬨倰鍒ゅ畾銇欍倠
              // flag.breakpoint銇╢lag.sp銇€ゃ亴绛夈仐銇忋仾銇勫牬鍚堛伅銆併儶銈点偆銈哄墠銇ㄣ儮銉笺儔銇岄仌銇�
              flag.breakpoint = ( window.innerWidth < 1024 )? true: false;
              if( flag.sp !== flag.breakpoint ) {
                if( flag.breakpoint ){
                  // PC鈫扴P銇嚘鐞�
                  $dropdown.show();
                  $accordion.hide();
                  flag.dropdownHidden = false;
                  flag.accordionHidden = true;
                  changeAttribute();
                } else {
                  // SP鈫扨C銇嚘鐞�
                  $('#st-DropGlovalNav_List').show();
                  $dropdown.hide();
                  flag.dropdownHidden = true;
                  changeAttribute();
                }
              }
              flag.sp = flag.breakpoint;
            }, 200);
          });
    
        }
        DropGlobalNav();
    
        // 鎸囧畾銇曘倢銇熻绱犱互澶栥伄銉夈偔銉ャ儭銉炽儓銈掋偗銉儍銈仚銈嬨仺銆併儭銉嬨儱銉笺仾銇┿倰闁夈仒銈嬨€�
        $(document).click(function(e){
          // documentClose浠ュ銈掋偗銉儍銈仐銇熷牬鍚堛伅銇欍伖銇︺倰闁夈仒銈�
          if(!$(e.target).is('.' + documentClose)) {
            hideSearchMenu();
            hideHumbergerMenu();
            hideAllMenu();
            hideCloseButtons();
          }
        });
    
        // 銉偟銈ゃ偤鏅傘伀灞曢枊銇欍倠銉°儖銉ャ兗銇仼銇í骞呫倰鎸囧畾銇欍倠銆�
        // CSS銇甤alc()銇犮仺銈广偗銉兗銉儛銉笺伄鏈夌劇銇у箙銇屽銈忋仯銇︺仐銇俱亞銇熴倎銆�
        function setDocumentWidth(element) {
          var $element = $(element);
          $element.css('width', $(window).innerWidth());
        }
    
        // 銈广優銉涖仺PC銇ц绱犮伄闋嗙暘銈掑叆銈屾浛銇堛倠銆�
        function moveButtons() {
          var $buttons = $('.st-GlobalHeader_Buttons');
          var $nav = $('.st-GlobalNav');
          if(isSp) {
            $nav.before($buttons);
          } else {
            $nav.after($buttons);
          }
        }
        moveButtons();
    
        $(window).resize(function() {
          isSp = searchIsSp();
          setDocumentWidth('.st-SearchForm');
          addBreakpointClass();
          moveButtons();
            $('.st-GlobalSiteNav_SubLinkTop').css('display', '');
            $('.st-GlobalSiteNav_SubAreaInner').css('display', '');
    
          // 銉°儖銉ャ兗銇姸鎱嬨倰澶夋洿銇欍倠
          if(isSp) {
            $globalNavArea.attr('aria-hidden', true);
            $globalCommonNavSubArea.attr('aria-hidden', true);
            setDocumentWidth('.st-GlobalSiteNav_SubArea');
            addAttrSiteNavLink();
            changeSyncsearchValue();
          } else {
            addAttrSiteNavLink();
            cancelFixedScreen();
            hideHumbergerMenu();
            hideAllMenu(0);
            setDocumentWidth('.st-GlobalSiteNav_SubArea');
            $globalNavArea.attr('aria-hidden', false).css('display', '');
            $globalCommonNavSubArea.attr('aria-hidden', false);
            changeSyncsearchValue();
          }
        });
    
      }
      GlobalHeader();
    
    }());