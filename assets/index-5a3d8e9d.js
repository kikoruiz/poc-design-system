import{R as Z,r as x}from"./index-d8ade8ea.js";import{c as $}from"./_commonjsHelpers-042e6b4d.js";/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function rr(r){return Object.prototype.toString.call(r)==="[object Object]"}function gr(r){var e,t;return rr(r)===!1?!1:(e=r.constructor,e===void 0?!0:(t=e.prototype,!(rr(t)===!1||t.hasOwnProperty("isPrototypeOf")===!1)))}var ir={},C=$&&$.__assign||function(){return C=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},C.apply(this,arguments)},vr=$&&$.__spreadArrays||function(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),a=0,e=0;e<t;e++)for(var o=arguments[e],f=0,i=o.length;f<i;f++,a++)n[a]=o[f];return n};Object.defineProperty(ir,"__esModule",{value:!0});var N=[];function hr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")}function Sr(r){return Object.prototype.toString.call(r)==="[object RegExp]"}function br(r){return Object.getOwnPropertySymbols(r).filter(function(e){return Object.prototype.propertyIsEnumerable.call(r,e)})}function T(r,e,t){t===void 0&&(t="");var n={indent:"	",singleQuotes:!0},a=C(C({},n),e),o;a.inlineCharacterLimit===void 0?o={newLine:`
`,newLineOrSpace:`
`,pad:t,indent:t+a.indent}:o={newLine:"@@__PRETTY_PRINT_NEW_LINE__@@",newLineOrSpace:"@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",pad:"@@__PRETTY_PRINT_PAD__@@",indent:"@@__PRETTY_PRINT_INDENT__@@"};var f=function(l){if(a.inlineCharacterLimit===void 0)return l;var u=l.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return u.length<=a.inlineCharacterLimit?u:l.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),`
`).replace(new RegExp(o.pad,"g"),t).replace(new RegExp(o.indent,"g"),t+a.indent)};if(N.indexOf(r)!==-1)return'"[Circular]"';if(r==null||typeof r=="number"||typeof r=="boolean"||typeof r=="function"||typeof r=="symbol"||Sr(r))return String(r);if(r instanceof Date)return"new Date('"+r.toISOString()+"')";if(Array.isArray(r)){if(r.length===0)return"[]";N.push(r);var i="["+o.newLine+r.map(function(l,u){var p=r.length-1===u?o.newLine:","+o.newLineOrSpace,d=T(l,a,t+a.indent);return a.transform&&(d=a.transform(r,u,d)),o.indent+d+p}).join("")+o.pad+"]";return N.pop(),f(i)}if(hr(r)){var s=vr(Object.keys(r),br(r));if(a.filter&&(s=s.filter(function(u){return a.filter&&a.filter(r,u)})),s.length===0)return"{}";N.push(r);var i="{"+o.newLine+s.map(function(u,p){var d=s.length-1===p?o.newLine:","+o.newLineOrSpace,g=typeof u=="symbol",_=!g&&/^[a-z$_][a-z$_0-9]*$/i.test(u.toString()),P=g||_?u:T(u,a),m=T(r[u],a,t+a.indent);return a.transform&&(m=a.transform(r,u,m)),o.indent+String(P)+": "+m+d}).join("")+o.pad+"}";return N.pop(),f(i)}return r=String(r).replace(/[\r\n]/g,function(l){return l===`
`?"\\n":"\\r"}),a.singleQuotes?(r=r.replace(/\\?'/g,"\\'"),"'"+r+"'"):(r=r.replace(/"/g,'\\"'),'"'+r+'"')}var _r=ir.prettyPrint=T,v={},Er={get exports(){return v},set exports(r){v=r}},c={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H=Symbol.for("react.element"),J=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),D=Symbol.for("react.context"),Pr=Symbol.for("react.server_context"),k=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),wr=Symbol.for("react.offscreen"),ur;ur=Symbol.for("react.module.reference");function h(r){if(typeof r=="object"&&r!==null){var e=r.$$typeof;switch(e){case H:switch(r=r.type,r){case I:case M:case L:case B:case W:return r;default:switch(r=r&&r.$$typeof,r){case Pr:case D:case k:case G:case z:case j:return r;default:return e}}case J:return e}}}c.ContextConsumer=D;c.ContextProvider=j;c.Element=H;c.ForwardRef=k;c.Fragment=I;c.Lazy=G;c.Memo=z;c.Portal=J;c.Profiler=M;c.StrictMode=L;c.Suspense=B;c.SuspenseList=W;c.isAsyncMode=function(){return!1};c.isConcurrentMode=function(){return!1};c.isContextConsumer=function(r){return h(r)===D};c.isContextProvider=function(r){return h(r)===j};c.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===H};c.isForwardRef=function(r){return h(r)===k};c.isFragment=function(r){return h(r)===I};c.isLazy=function(r){return h(r)===G};c.isMemo=function(r){return h(r)===z};c.isPortal=function(r){return h(r)===J};c.isProfiler=function(r){return h(r)===M};c.isStrictMode=function(r){return h(r)===L};c.isSuspense=function(r){return h(r)===B};c.isSuspenseList=function(r){return h(r)===W};c.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===I||r===M||r===L||r===B||r===W||r===wr||typeof r=="object"&&r!==null&&(r.$$typeof===G||r.$$typeof===z||r.$$typeof===j||r.$$typeof===D||r.$$typeof===k||r.$$typeof===ur||r.getModuleId!==void 0)};c.typeOf=h;(function(r){r.exports=c})(Er);var b=function(r,e){return r===0?"":new Array(r*e).fill(" ").join("")};function A(r){return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(r)}function er(r){return Rr(r)||Nr(r)||Ar(r)||xr()}function Rr(r){if(Array.isArray(r))return X(r)}function Nr(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Ar(r,e){if(r){if(typeof r=="string")return X(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(r,e)}}function X(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function xr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(r,e){return r===null||A(r)!=="object"||r instanceof Date||r instanceof RegExp||x.isValidElement(r)?r:(e.add(r),Array.isArray(r)?r.map(function(t){return q(t,e)}):Object.keys(r).sort().reduce(function(t,n){return n==="_owner"||(n==="current"||e.has(r[n])?t[n]="[Circular]":t[n]=q(r[n],e)),t},{}))}function Or(r){return q(r,new WeakSet)}var cr=function(e){return{type:"string",value:e}},Fr=function(e){return{type:"number",value:e}},Tr=function(e,t,n,a){return{type:"ReactElement",displayName:e,props:t,defaultProps:n,childrens:a}},$r=function(e,t){return{type:"ReactFragment",key:e,childrens:t}},Cr=Boolean(x.Fragment),fr=function(e){return!e.name||e.name==="_default"?"No Display Name":e.name},Ir=function r(e){switch(!0){case Boolean(e.displayName):return e.displayName;case e.$$typeof===v.Memo:return r(e.type);case e.$$typeof===v.ForwardRef:return r(e.render);default:return fr(e)}},Lr=function(e){switch(!0){case typeof e.type=="string":return e.type;case typeof e.type=="function":return e.type.displayName?e.type.displayName:fr(e.type);case v.isForwardRef(e):case v.isMemo(e):return Ir(e.type);case v.isContextConsumer(e):return"".concat(e.type._context.displayName||"Context",".Consumer");case v.isContextProvider(e):return"".concat(e.type._context.displayName||"Context",".Provider");case v.isLazy(e):return"Lazy";case v.isProfiler(e):return"Profiler";case v.isStrictMode(e):return"StrictMode";case v.isSuspense(e):return"Suspense";default:return"UnknownElementType"}},tr=function(e,t){return t!=="children"},Mr=function(e){return e!==!0&&e!==!1&&e!==null&&e!==""},nr=function(e,t){var n={};return Object.keys(e).filter(function(a){return t(e[a],a)}).forEach(function(a){return n[a]=e[a]}),n},Q=function r(e,t){var n=t.displayName,a=n===void 0?Lr:n;if(typeof e=="string")return cr(e);if(typeof e=="number")return Fr(e);if(!Z.isValidElement(e))throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(A(e),"`"));var o=a(e),f=nr(e.props,tr);e.ref!==null&&(f.ref=e.ref);var i=e.key;typeof i=="string"&&i.search(/^\./)&&(f.key=i);var s=nr(e.type.defaultProps||{},tr),l=Z.Children.toArray(e.props.children).filter(Mr).map(function(u){return r(u,t)});return Cr&&e.type===x.Fragment?$r(i,l):Tr(o,f,s,l)};function jr(){}var Dr=function(e){return e.toString().split(`
`).map(function(t){return t.trim()}).join("")},ar=Dr,sr=function(r,e){var t=e.functionValue,n=t===void 0?ar:t,a=e.showFunctions;return n(!a&&n===ar?jr:r)},kr=function(r,e,t,n){var a=Or(r),o=_r(a,{transform:function(i,s,l){var u=i[s];return u&&x.isValidElement(u)?Y(Q(u,n),!0,t,n):typeof u=="function"?sr(u,n):l}});return e?o.replace(/\s+/g," ").replace(/{ /g,"{").replace(/ }/g,"}").replace(/\[ /g,"[").replace(/ ]/g,"]"):o.replace(/\t/g,b(1,n.tabStop)).replace(/\n([^$])/g,`
`.concat(b(t+1,n.tabStop),"$1"))},Br=function(e){return e.replace(/"/g,"&quot;")},Wr=function(e,t,n,a){if(typeof e=="number")return"{".concat(String(e),"}");if(typeof e=="string")return'"'.concat(Br(e),'"');if(A(e)==="symbol"){var o=e.valueOf().toString().replace(/Symbol\((.*)\)/,"$1");return o?"{Symbol('".concat(o,"')}"):"{Symbol()}"}return typeof e=="function"?"{".concat(sr(e,a),"}"):x.isValidElement(e)?"{".concat(Y(Q(e,a),!0,n,a),"}"):e instanceof Date?isNaN(e.valueOf())?"{new Date(NaN)}":'{new Date("'.concat(e.toISOString(),'")}'):gr(e)||Array.isArray(e)?"{".concat(kr(e,t,n,a),"}"):"{".concat(String(e),"}")},zr=function(r,e,t,n,a,o,f,i){if(!e&&!n)throw new Error('The prop "'.concat(r,'" has no value and no default: could not be formatted'));var s=e?t:a,l=i.useBooleanShorthandSyntax,u=i.tabStop,p=Wr(s,o,f,i),d=" ",g=`
`.concat(b(f+1,u)),_=p.includes(`
`);return l&&p==="{false}"&&!n?(d="",g=""):l&&p==="{true}"?(d+="".concat(r),g+="".concat(r)):(d+="".concat(r,"=").concat(p),g+="".concat(r,"=").concat(p)),{attributeFormattedInline:d,attributeFormattedMultiline:g,isMultilineAttribute:_}},Gr=function(r,e){var t=r.slice(0,r.length>0?r.length-1:0),n=r[r.length-1];return n&&(e.type==="string"||e.type==="number")&&(n.type==="string"||n.type==="number")?t.push(cr(String(n.value)+String(e.value))):(n&&t.push(n),t.push(e)),t},Yr=function(e){return["key","ref"].includes(e)},Vr=function(r){return function(e){var t=e.includes("key"),n=e.includes("ref"),a=e.filter(function(f){return!Yr(f)}),o=er(r?a.sort():a);return n&&o.unshift("ref"),t&&o.unshift("key"),o}};function Ur(r,e){return Array.isArray(e)?function(t){return e.indexOf(t)===-1}:function(t){return e(r[t],t)}}var Xr=function(e,t,n,a,o){var f=o.tabStop;return e.type==="string"?t.split(`
`).map(function(i,s){return s===0?i:"".concat(b(a,f)).concat(i)}).join(`
`):t},qr=function(e,t,n){return function(a){return Xr(a,Y(a,e,t,n),e,t,n)}},Hr=function(e,t){return function(n){var a=Object.keys(e).includes(n);return!a||a&&e[n]!==t[n]}},lr=function(e,t,n,a,o){return o?b(n,a).length+t.length>o:e.length>1},Jr=function(e,t,n,a,o,f,i){return(lr(e,t,o,f,i)||n)&&!a},pr=function(r,e,t,n){var a=r.type,o=r.displayName,f=o===void 0?"":o,i=r.childrens,s=r.props,l=s===void 0?{}:s,u=r.defaultProps,p=u===void 0?{}:u;if(a!=="ReactElement")throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(a));var d=n.filterProps,g=n.maxInlineAttributesLineLength,_=n.showDefaultProps,P=n.sortProps,m=n.tabStop,y="<".concat(f),E=y,w=y,R=!1,O=[],K=Ur(l,d);Object.keys(l).filter(K).filter(Hr(p,l)).forEach(function(S){return O.push(S)}),Object.keys(p).filter(K).filter(function(){return _}).filter(function(S){return!O.includes(S)}).forEach(function(S){return O.push(S)});var V=Vr(P)(O);if(V.forEach(function(S){var U=zr(S,Object.keys(l).includes(S),l[S],Object.keys(p).includes(S),p[S],e,t,n),yr=U.attributeFormattedInline,dr=U.attributeFormattedMultiline,mr=U.isMultilineAttribute;mr&&(R=!0),E+=yr,w+=dr}),w+=`
`.concat(b(t,m)),Jr(V,E,R,e,t,m,g)?y=w:y=E,i&&i.length>0){var F=t+1;y+=">",e||(y+=`
`,y+=b(F,m)),y+=i.reduce(Gr,[]).map(qr(e,F,n)).join(e?"":`
`.concat(b(F,m))),e||(y+=`
`,y+=b(F-1,m)),y+="</".concat(f,">")}else lr(V,E,t,m,g)||(y+=" "),y+="/>";return y},Qr="",or="React.Fragment",Kr=function(e,t,n){var a={};return t&&(a={key:t}),{type:"ReactElement",displayName:e,props:a,defaultProps:{},childrens:n}},Zr=function(e){var t=e.key;return Boolean(t)},re=function(e){var t=e.childrens;return t.length===0},ee=function(r,e,t,n){var a=r.type,o=r.key,f=r.childrens;if(a!=="ReactFragment")throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(a));var i=n.useFragmentShortSyntax,s;return i?re(r)||Zr(r)?s=or:s=Qr:s=or,pr(Kr(s,o,f),e,t,n)},te=["<",">","{","}"],ne=function(e){return te.some(function(t){return e.includes(t)})},ae=function(e){return ne(e)?"{`".concat(e,"`}"):e},oe=function(e){var t=e;return t.endsWith(" ")&&(t=t.replace(/^(.*?)(\s+)$/,"$1{'$2'}")),t.startsWith(" ")&&(t=t.replace(/^(\s+)(.*)$/,"{'$1'}$2")),t},Y=function(r,e,t,n){if(r.type==="number")return String(r.value);if(r.type==="string")return r.value?"".concat(oe(ae(String(r.value)))):"";if(r.type==="ReactElement")return pr(r,e,t,n);if(r.type==="ReactFragment")return ee(r,e,t,n);throw new TypeError('Unknow format type "'.concat(r.type,'"'))},ie=function(r,e){return Y(r,!1,0,e)},fe=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.filterProps,a=n===void 0?[]:n,o=t.showDefaultProps,f=o===void 0?!0:o,i=t.showFunctions,s=i===void 0?!1:i,l=t.functionValue,u=t.tabStop,p=u===void 0?2:u,d=t.useBooleanShorthandSyntax,g=d===void 0?!0:d,_=t.useFragmentShortSyntax,P=_===void 0?!0:_,m=t.sortProps,y=m===void 0?!0:m,E=t.maxInlineAttributesLineLength,w=t.displayName;if(!e)throw new Error("react-element-to-jsx-string: Expected a ReactElement");var R={filterProps:a,showDefaultProps:f,showFunctions:s,functionValue:l,tabStop:p,useBooleanShorthandSyntax:g,useFragmentShortSyntax:P,sortProps:y,maxInlineAttributesLineLength:E,displayName:w};return ie(Q(e,R),R)};export{fe as r};
//# sourceMappingURL=index-5a3d8e9d.js.map