(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/HOU":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return V}));var n=r("q1tI"),a=r.n(n),c=(r("rHLO"),r("9gBE"),r("8Kt/")),o=r.n(c),i=r("wx14"),s=r("rePB"),l=r("KQm4"),u=r("ODXe"),f=r("16fy"),h=r("ara8"),b=r("r4d+"),p=r("qX4b"),m=r("0iN6"),g=r("ob4f"),y=a.a.createElement;function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,c=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw a}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=Object(n.createContext)({blocks:[]});function j(){var e={blocks:b.b};return y(S.Provider,{value:e},y(h.a,{withToolbar:!0,className:"character-specimen"},y("h1",null,"Iosevka Specimen"),y(f.a,{wholeSection:!0,enableSpacing:!0,enableMarkings:!0,content:N,styleGrades:[p.f.Sans,p.f.Slab,p.f.Aile,p.f.Etoile,p.f.Sparkle],defaultFontStyle:{style:p.f.Sans}})))}function N(e){var t=Object(n.useContext)(S);return y(a.a.Fragment,null,t.blocks.map((function(t){return y(w,{key:t.name,block:t,fontStyle:e.fontStyle})})))}function w(e){var t=Object(g.a)(),r=Object(u.a)(t,2),n=r[0],a=r[1];return y("div",{className:"specimen-block"},y("h3",null,e.block.name),y("div",{className:Object(m.a)("specimen-block-body",a?"visible":"virtualized"),style:{height:e.block.characters.length/16*4+"rem"},ref:n},a?e.block.characters.map((function(t){return y(F,{blockName:e.block.name,char:t,fontStyle:e.fontStyle,key:t.lch})})):null))}function F(e){return y("div",{className:Object(m.a)("specimen-character",e.char.inFont?"in-font":"Unassigned"===e.char.gc?"unassigned":"not-in-font")},y(U,e),y(L,e))}function M(e){var t=[];return function e(t,r,n,a){if(r===t.length)a.push(n.slice(0));else{var c,o=k(t[r]);try{for(o.s();!(c=o.n()).done;){var i=c.value;n[r]=i,e(t,r+1,n,a)}}catch(s){o.e(s)}finally{o.f()}}}(e,0,[],t),t}function P(e){for(var t=0,r=0;r<e.length;r++)e[r].length>0&&(t=r);return[e[t],[].concat(Object(l.a)(e.slice(0,t)),Object(l.a)(e.slice(t+1)))]}function _(e){var t,r,n=function(e,t,r){if(!e)return[];switch(r){case p.e.Upright:return t.charVariantsUpright||[];case p.e.Italic:return t.charVariantsItalic||[];case p.e.Oblique:return t.charVariantsOblique||[]}}(Object(p.k)(e.fontStyle.style||p.f.Sans),e.char,e.fontStyle.slope||p.e.Upright);if(e.char.typographicVariants&&e.char.typographicVariants.length)if(n.length){var a=P(n),c=Object(u.a)(a,2),o=c[0],i=c[1];t=M([].concat(Object(l.a)(i),[e.char.typographicVariants])),r=o}else t=[[]],r=e.char.typographicVariants;else if(n.length>1){var s=P(n),f=Object(u.a)(s,2),h=f[0];t=M(f[1]),r=h}else n.length?(t=[[]],r=n[0]):(t=[],r=[]);return{rowFeatures:t,columnFeatures:r}}function L(e){if(!e.char.inFont)return null;var t=_(e),r=t.rowFeatures,n=t.columnFeatures;if(!n.length)return null;var c,o=[],s=k(r);try{for(s.s();!(c=s.n()).done;){var u,f=c.value,h=[],b=k(n);try{for(b.s();!(u=b.n()).done;){var p=u.value,g=[p].concat(Object(l.a)(f)).map((function(e){return"'".concat(e,"' on")})).join(", "),v=d({},e.fontStyle);h.push(y(U,Object(i.a)({},e,{fontStyle:v,variantOverride:g,key:p})))}}catch(O){b.e(O)}finally{b.f()}o.push(y("div",{className:"row",key:f.join(",")},h))}}catch(O){s.e(O)}finally{s.f()}return y(a.a.Fragment,null,y("div",{className:"has-variant-marker"}),y("div",{className:Object(m.a)("character-sample-variants")},o))}function U(e){var t=e.char.inFont&&"Nonspacing_Mark"===e.char.gc,r=e.char.inFont&&("Space_Separator"===e.char.gc||"Format"===e.char.gc),n=e.char.inFont&&("Private Use Area"===e.blockName||"Box Drawing"===e.blockName||"Block Elements"===e.blockName||"Symbols for Legacy Computing"===e.blockName),a=e.char.inFont&&!n&&("Decimal_Number"===e.char.gc||"Uppercase_Letter"===e.char.gc||"Lowercase_Letter"===e.char.gc||"Titlecase_Letter"===e.char.gc||"Other_Letter"===e.char.gc||"Currency Symbols"===e.blockName);return y("div",{className:Object(m.a)("character-sample",Object(p.i)(e.fontStyle),e.fontStyle.markingsVisible||t||r?"markings-visible":"markings-hidden"),style:e.variantOverride?{fontFeatureSettings:e.variantOverride}:t?{fontFeatureSettings:"'NWID' on"}:Object(p.j)(e.fontStyle),title:e.char.inFont?E(e.char,e.variantOverride):void 0},y(I,{char:e.char,isMark:t,isLetter:a,isMosaic:n}),y("span",{className:"character-sample-inner"},y("span",{className:"pre"},(t?"\ue09e":"")+String.fromCodePoint(e.char.lch)),y(A,{char:e.char,isMark:t,isLetter:a,isMosaic:n})),y(C,{char:e.char,isMark:t,isLetter:a,isMosaic:n}))}function E(e,t){var r=e.lch.toString(16).toUpperCase().padStart(4,"0"),n="\u200b"+("Nonspacing_Mark"===e.gc?"\u25cc":"")+String.fromCodePoint(e.lch)+"\u200b";return"U+".concat(r," \u27e6").concat(n,"\u27e7\n").concat(e.charName||"","\n(").concat(e.gc,")")+(t?"\n"+t:"")}function I(e){return e.char.inFont?e.isMark?y("span",{className:"background mark-base"}):e.isLetter?y("span",{className:"background pre-letter"}):e.isMosaic?y("span",{className:"background pre-mosaic"}):y("span",{className:"background pre-symbol"}):null}function A(e){return e.char.inFont&&e.isLetter?y("span",{className:"background under-letter"}):null}function C(e){return!e.char.inFont||e.isMark?null:e.isLetter?y("span",{className:"background post-letter"}):e.isMosaic?y("span",{className:"background post-mosaic"}):y("span",{className:"background post-symbol"})}var D=a.a.createElement;function V(){return D("div",{className:"page"},D(o.a,null,D("title",null,"Iosevka Specimen")),D(j,null))}},"8bMz":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/specimen",function(){return r("/HOU")}])}},[["8bMz",0,1,3,4]]]);