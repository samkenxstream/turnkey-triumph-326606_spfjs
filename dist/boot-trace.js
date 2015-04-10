/*
SPF 22 (v2.2.0)
(c) 2012-2014 Google, Inc.
License: MIT
*/
/**
 * https://github.com/google/tracing-framework
 * Copyright 2013 Google, Inc. All Rights Reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found at https://github.com/google/tracing-framework/blob/master/LICENSE.
 */
(function(){function aa(a){return a};function f(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function ba(){};function l(a,b){for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function m(a,b){for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function da(a,b){var c=[];l(a,function(a,e,g){b.call(void 0,a,e,g)&&c.push(a)});return c}function n(a){return a&&a.push?a:[a]};function ea(a,b){var c=b||document;return c.querySelectorAll?c.querySelectorAll(a):[]}function fa(a,b){var c=document,d=c.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";b&&(d.onload=f(b,null,d));c.body.appendChild(d);return d};function p(a,b){return q[a]=b}var q=window._spf_state||{};window._spf_state=q;function ga(a,b){a&&b&&(a in r||(r[a]=[]),r[a].push(b))}function ha(a,b){a in r&&b&&m(r[a],function(a,d,e){return a==b?(e[d]=null,!1):!0})}function ia(a){a in r&&l(r[a],function(a,c,d){d[c]=null;a&&a()})}var r={};p("ps-s",r);var ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};var t={};"config"in q||p("config",t);t=q.config;var ka=!!this.wtf&&2==this.wtf.trace.API_VERSION,la=ka?this.wtf.trace.instrument:aa;function ma(a){return a}var u=!window._spf_tracing_runtime_disabled&&ka?la:ma;function v(a,b,c){var d=w[a];return a&&b?(d||(d=w[a]=x()),a=y(b,c||0),d.items.push(a)):d&&d.items.length||0}function z(a,b){var c=w[a];if(c){var d=!!c.b||!!c.a;0<c.c&&(b||!d)&&A(a,b)}}function na(a){(a=w[a])&&a.c--}function oa(a,b){var c=w[a];c&&(c.c++,z(a,b))}function B(a){var b=w[a];b&&(pa(b),delete w[a])}function qa(a,b){var c=a||"",d;for(d in w)b!=d&&0==d.lastIndexOf(c,0)&&B(d)}function ra(a){var b=parseInt(q.uid,10)||0;b++;return a["spf-key"]||(a["spf-key"]=""+p("uid",b))}
function A(a,b){var c=w[a];if(c&&(pa(c),0<c.c&&c.items.length)){var d=c.items[0];if(d){var e=f(function(a,b){b();a()},null,f(A,null,a,b));b?(c.items.shift(),e(d.e)):sa(c,d,e)}}}function sa(a,b,c){b.d?(c=f(c,null,ba),a.a=setTimeout(c,b.d),b.d=0):(a.items.shift(),c=f(c,null,b.e),(b=(b=t["advanced-task-scheduler"])&&b.addTask)?a.b=b(c):a.a=setTimeout(c,0))}function pa(a){if(a.b){var b=t["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.b);a.b=0}a.a&&(clearTimeout(a.a),a.a=0)}
function x(){return{items:[],b:0,a:0,c:1}}function y(a,b){return{e:a,d:b}}var w={},v=u(v,"spf.tasks.add"),z=u(z,"spf.tasks.run"),na=u(na,"spf.tasks.suspend"),oa=u(oa,"spf.tasks.resume"),B=u(B,"spf.tasks.cancel"),qa=u(qa,"spf.tasks.cancelAllExcept"),ra=u(ra,"spf.tasks.key"),A=u(A,"spf.tasks.do_"),x=u(x,"spf.tasks.createQueue_"),y=u(y,"spf.tasks.createTask_");function ta(a){var b=document.createElement("a");b.href=a;b.href=b.href;return b.href.split("#")[0]};var ua;function C(a,b,c,d){b=D(a,b);var e=c||"^"+b,g=E(a,e),k;k=E(a,b);if((k=F[k])&&e!=k){G(a,k);var h=E(a,b);delete F[h];(h=E(a,k))&&g&&h in r&&(r[g]=(r[g]||[]).concat(r[h]),delete r[h])}h=E(a,b);F[h]=e;H(a,e,b);ga(g,d);d=f(I,null,a);J(a,b)?(k&&e!=k&&(a=va(a,b))&&a.setAttribute("name",c||""),d()):(a=K(a,b,d,void 0,void 0,void 0))&&c&&a.setAttribute("name",c)}
function L(a,b){var c=M(a,b);G(a,b);if(c){var d=E(a,c);delete F[d]}d=E(a,b);delete r[d];d=a==N;if(c){var d=d?"spfjsunload":"spfcssunload",e={name:b,url:c};if(document.createEvent){var g=document.createEvent("CustomEvent");g.initCustomEvent(d,!0,!0,e);document.dispatchEvent(g)}O(a,c)}}function I(a){var b=E(a,""),c;for(c in r)0==c.indexOf(b)&&m(c.substring(b.length).split("|"),f(P,null,a))&&ia(c)}
function K(a,b,c,d,e){function g(){J(a,b,e)&&Q(R,a,b,e);h&&h.parentNode&&k==document&&h.parentNode.removeChild(h);c&&setTimeout(c,0);return null}b=D(a,b);Q(wa,a,b,e);var k=d||document,h=k.createElement("script");if(!b)return g();d=S(b);h.className=E(a,d);"onload"in h?h.onerror=h.onload=g:h.onreadystatechange=function(){/^c|loade/.test(h.readyState)&&g()};d=k.getElementsByTagName("head")[0]||k.body;h.async=!0;h.src=b;d.insertBefore(h,d.firstChild);return h}
function O(a,b,c){b=D(a,b);(c=va(a,b,c))&&c.parentNode&&c.parentNode.removeChild(c);xa(a,b)}function va(a,b,c){b=S(b);a="."+E(a,b);return ea(a,c)[0]}
function ya(a){var b=a==N,c=[];l(ea(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href,e=D(a,e);if(!J(a,e)){Q(R,a,e);var g=S(e);if(g=E(a,g))if(d.classList)d.classList.add(g);else{var k;a:{if(g){if(d.classList){k=d.classList.contains(g);break a}k=d.classList?d.classList:d.className&&d.className.match(/\S+/g)||[];for(var h=0,ca=k.length;h<ca;h++)if(k[h]==g){k=!0;break a}}k=!1}k||(d.className+=" "+g)}if(g=d.getAttribute("name"))k=E(a,e),F[k]=g,H(a,g,e);c.push(d)}});return c}
function za(a,b){if(b&&(b=D(a,b),!J(a,b))){var c=S(b),d=E(a,c),e=E(a,"prefetch"),c=document.getElementById(e);if(!c)c=fa(e,function(a){a.title=e;z(e,!0)});else if(c.contentWindow.document.getElementById(d))return;d=f(Aa,null,c,a,b,d,e);c.title?d():v(e,d)}}
function Aa(a,b,c,d,e){var g=b==Ba;a=a.contentWindow.document;b==N?(b=a.createElement("object"),Ca?a.createElement("script").src=c:b.data=c,b.id=d,a.body.appendChild(b)):g?(b=K(b,c,null,a,e),b.id=d):(b=a.createElement("img"),b.src=c,b.id=d,a.body.appendChild(b))}
function Da(a,b,c){for(var d=a==N,e=M(a,c),g=b.replace(/\s/g,""),g=g||"",k=0,h=0,ca=g.length;h<ca;++h)k=31*k+g.charCodeAt(h),k%=4294967296;g="hash-"+k;H(a,c,g);!T(a,g)&&(b=Ea(a,b))&&(Q(R,a,g),b&&!d&&(d=S(g),d=E(a,d),b.className=d,b.setAttribute("name",c)),(e=e&&e[0])&&O(a,e))}
function Ea(a,b){b=ja(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body,d;a==N?(d=document.createElement("script"),d.text=b,c.appendChild(d),c.removeChild(d)):(d=document.createElement("style"),c.appendChild(d),"styleSheet"in d?d.styleSheet.cssText=b:d.appendChild(document.createTextNode(b)));return d}function Fa(a,b){p("rsrc-p-"+a,b)}
function D(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=q[c]||"";if("string"==typeof c)b=c+b;else for(var e in c)b=b.replace(e,c[e]);b=0>b.indexOf("."+a)?b+"."+a:b;b=ta(b)}else 0==d&&(b=ta(b))}return b}function E(a,b,c){return a+"-"+b+(c?"-"+c:"")}function S(a){return a?String(a).replace(/[^\w]/g,""):""}function Q(a,b,c,d){b=E(b,c,d);U[b]=a}function J(a,b,c){a=E(a,b,c);return U[a]}function xa(a,b){var c=E(a,b);delete U[c]}
function T(a,b){var c=J(a,b);return""==b||c==R}function H(a,b,c){a=E(a,b);V[a]=c}function M(a,b){var c=E(a,b);return V[c]}function G(a,b){var c=E(a,b);delete V[c]}function P(a,b){var c=M(a,b);return void 0!=c&&T(a,c)}var U={},F={},V={},Ca=-1!=navigator.userAgent.indexOf(" Trident/"),wa=1,R=2,Ba="css",N="js";p("rsrc-s",U);p("rsrc-n",F);p("rsrc-u",V);C=u(C,"spf.net.resource.load");L=u(L,"spf.net.resource.unload");ua=u(ua,"spf.net.resource.unload_");I=u(I,"spf.net.resource.check");K=u(K,"spf.net.resource.create");
O=u(O,"spf.net.resource.destroy");ya=u(ya,"spf.net.resource.discover");za=u(za,"spf.net.resource.prefetch");Aa=u(Aa,"spf.net.resource.prefetch_");Da=u(Da,"spf.net.resource.eval");Ea=u(Ea,"spf.net.resource.exec");Fa=u(Fa,"spf.net.resource.path");D=u(D,"spf.net.resource.canonicalize");E=u(E,"spf.net.resource.key");S=u(S,"spf.net.resource.label");Q=u(Q,"spf.net.resource.status.set");J=u(J,"spf.net.resource.status.get");xa=u(xa,"spf.net.resource.status.clear");T=u(T,"spf.net.resource.status.loaded");
H=u(H,"spf.net.resource.url.set");M=u(M,"spf.net.resource.url.get");G=u(G,"spf.net.resource.url.clear");P=u(P,"spf.net.resource.url.loaded");function W(a,b,c){C(N,a,b,c)}function Ga(a){L(N,a)}function Ha(){ya(N)}function Ia(a,b){K(N,a,b)}function Ja(a){a=n(a);l(a,function(a){za(N,a)})}function X(a,b,c){a=n(a);a=da(a,function(a){return!!a});var d=[];l(a,function(a){void 0==M(N,a)&&d.push(a)});var e=!d.length;if(b){var g=m(a,f(P,null,N));e&&g?b():(a=E(N,a.sort().join("|")),ga(a,b))}c&&!e&&c(d)}function Ka(a){H(N,a,"");I(N)}function La(a,b){a=n(a);var c=E(N,a.sort().join("|"));ha(c,b)}function Y(a,b){X(a,b,Ma)}
function Ma(a){l(a,function(a){function c(){W(e,a)}var d=Z[a],e=Na[a]||a;d?Y(d,c):c()})}function Oa(a){a=n(a);l(a,function(a){var c=[],d;for(d in Z){var e=Z[d],e=n(e);l(e,function(e){e==a&&c.push(d)})}l(c,function(a){Oa(a)});Ga(a)})}function Pa(a,b){Da(N,a,b)}function Qa(a,b){if(a){for(var c in a)Z[c]=a[c];if(b)for(c in b)Na[c]=b[c]}}function Ra(a){Fa(N,a)}var Z={};p("js-d",Z);var Na={};p("js-u",Na);W=u(W,"spf.net.script.load");Ga=u(Ga,"spf.net.script.unload");Ha=u(Ha,"spf.net.script.discover");
Ia=u(Ia,"spf.net.script.get");Ja=u(Ja,"spf.net.script.prefetch");X=u(X,"spf.net.script.ready");Ka=u(Ka,"spf.net.script.done");La=u(La,"spf.net.script.ignore");Y=u(Y,"spf.net.script.require");Ma=u(Ma,"spf.net.script.require_");Oa=u(Oa,"spf.net.script.unrequire");Pa=u(Pa,"spf.net.script.eval");Qa=u(Qa,"spf.net.script.declare");Ra=u(Ra,"spf.net.script.path");var Sa={script:{load:W,get:Ia,ready:X,done:Ka,require:Y,declare:Qa,path:Ra}},Ta=this.spf=this.spf||{},Ua;for(Ua in Sa)Ta[Ua]=Sa[Ua];})();