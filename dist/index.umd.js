!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):(t||self).rCaptcha=r(t.react)}(this,function(t){function r(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,n(t,r)}function e(t){return e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(t)}function n(t,r){return n=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},n(t,r)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function a(t,r,e){return a=o()?Reflect.construct:function(t,r,e){var o=[null];o.push.apply(o,r);var a=new(Function.bind.apply(t,o));return e&&n(a,e.prototype),a},a.apply(null,arguments)}function c(t){var r="function"==typeof Map?new Map:void 0;return c=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,o)}function o(){return a(t,arguments,e(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),n(o,t)},c(t)}var l=/*#__PURE__*/function(t){function e(r){var e;return(e=t.call(this,r)||this).name="NegativeLengthError",e.message=r,e}return r(e,t),e}(/*#__PURE__*/c(RangeError)),u=/*#__PURE__*/function(t){function e(r){var e;return(e=t.call(this,r)||this).name="MaxLengthExceededError",e.message=r,e}return r(e,t),e}(/*#__PURE__*/c(Error)),i=function(t,r){var e="~`!@#$%^&*()-_=+\\|{}[]:;\"'<>,./?";if(t=t.toLowerCase(),r=r||6,!Number.isInteger(r))throw new TypeError("Length must be a positive integer");if(r<0)throw new l("Captcha length must be a positive number.");if(r<4&&console.warn("Captcha length must be at least 4 characters long."),r>255)throw new u("Captcha length must be less than 255 characters long.");r>8&&console.warn("Captcha length must be less than 8 characters long.");var n="",o="";t.includes("u")&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t.includes("l")&&(n+="abcdefghijklmnopqrstuvwxyz"),t.includes("n")&&(n+="0123456789"),t.includes("s")&&(n+=e),""===t&&(n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"+e);for(var a=0;a<r;a++)o+=n.charAt(Math.floor(Math.random()*n.length));return o},s=function(){for(var t="0123456789ABCDEF",r="#",e=0;e<6;e++)r+=t.charAt(Math.floor(Math.random()*t.length));return r},f=function(t){var r=t.color,e=t.bgColor,n=[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],o=["light","normal","bold"],a=["Cambria","Calibri","Mangal","Arial Narrow","Sanskrit Text","Adobe Caslon Pro","Adobe Caslon Pro Bold","Adobe Garamand Pro","Adobe Garamand Pro Bold","Agency FB","Algerian","Aparajita","Arial","Arno Pro","Bahnschrift","Bauhas 93","Bell MT","Berlin Sans FB","Birch STD","Bradley Hand ITC","Broadway","Candara","Cascadia Code","Castellar","Consolas","Cooper Std Black","Curlz MT","Courier New","Gabriola","Ink Free","MV Boli","Orator Std","Papyrus","Tahoma","Cursive","sans-serif"],c=t.text;return h("div",{className:"r-captcha__captchaText",style:{width:"fit-content",padding:"3px 10px",backgroundColor:""+("random"!==e&&e?e:s())}},c.split("").map(function(t){return h("span",{key:Math.random()-Math.random(),className:"r-captcha__character",style:{color:""+("random"===r?s():r),fontSize:n[Math.floor(Math.random()*n.length)]+"px",fontWeight:""+o[Math.floor(Math.random()*o.length)],fontStyle:Math.random()>.5?"italic":"normal",fontFamily:""+a[Math.floor(Math.random()*a.length)]}},t)}))};f.defaultProps={text:"",color:"random",bgColor:"random"};var p=/*#__PURE__*/function(t){function e(r){var e;return(e=t.call(this,r)||this).name="NoHandleSuccessCallbackError",e.message=r,e}return r(e,t),e}(/*#__PURE__*/c(Error)),d=/*#__PURE__*/function(t){function e(r){var e;return(e=t.call(this,r)||this).name="NoHandleFailureCallbackError",e.message=r,e}return r(e,t),e}(/*#__PURE__*/c(Error)),m=function(r){var e=r.charset,n=r.length,o=r.color,a=r.bgColor,c=r.reload,l=r.reloadText,u=r.reloadIcon,s=r.handleSuccess,m=r.handleFailure;if(!s)throw new p("You must provide a callback function for successs");if(!m)throw new d("You must provide a callback function for failure");if("function"!=typeof s)throw new TypeError("handleSuccess must be a function");if("function"!=typeof m)throw new TypeError("handleFailure must be a function");var b=t.useState(i(e,n)),g=b[0],y=b[1],C=t.useRef(null);return h("div",{className:"r-captcha"},h(f,{text:g,color:o,bgColor:a}),c&&h("button",{className:"r-captcha__reloadBtn",onClick:function(){y(i(e,n))}},l||"Reload Captcha",u&&h("img",{src:u,alt:"Reload",style:{width:"20px",height:"20px"}})),h("input",{ref:C,type:"text",placeholder:"Enter captcha",className:"r-captcha__inputField"}),h("button",{type:"button",onClick:function(){g===C.current.value?s():m(),C.current.value=""},className:"r-captcha__submitBtn"},"Submit"))};return m.defaultProps={charset:"ulns",length:6,color:"#000",bgColor:"#fff",reload:!1,reloadText:"Reload Captcha"},m});
//# sourceMappingURL=index.umd.js.map
