(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){e.classList.add("popup_opened"),document.addEventListener("keydown",o)}function n(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",o)}function r(e){e.classList.contains("popup_opened")&&n(e)}function o(e){"Escape"===e.key&&n(document.querySelector(".popup_opened"))}e.d({},{co:()=>x,oB:()=>L,DJ:()=>S,kW:()=>k}),document.querySelectorAll(".popup__close-button").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return n(t)}))}));var c=function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))},u=function(e,t){return fetch(e,t).then(c)},a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?r:n},i={url:"https://nomoreparties.co/v1/wbf-cohort-5",headers:{authorization:"eb2b4170-c32c-4a27-a66a-d0de0ec94cc6","Content-Type":"application/json"}},l=document.querySelector(".elements"),s=document.querySelector("#card").content;function d(e,n,r,o,c){var a=s.querySelector(".element").cloneNode(!0),l=a.querySelector(".element__picture"),d=a.querySelector(".element__text"),f=a.querySelector(".element__likes-number"),p=a.querySelector(".element__like-button");return a.setAttribute("id",o),a.setAttribute("owner",c._id),a.getAttribute("owner")!==k&&(a.querySelector(".element__trash-button").classList.add("element__trash-button_invisible"),a.querySelector(".element__trash-button").setAttribute("disabled",!0)),r.forEach((function(e){k===e._id&&p.classList.add("element__like-button_color_black")})),l.src=n,l.alt=e,d.textContent=e,f.textContent=r.length,a.querySelector(".element__trash-button").addEventListener("click",(function(e){var n;n=e.target,t(S),m=n.closest(".element").id})),a.querySelector(".element__like-button").addEventListener("click",(function(e){var t;t=e.target,m=t.closest(".element").id,t.classList.contains("element__like-button_color_black")?function(e){return u("".concat(i.url,"/cards/likes/").concat(e),{method:"DELETE",headers:i.headers})}(m).then((function(e){v(t,e)})).catch((function(e){console.log(e)})):function(e){return u("".concat(i.url,"/cards/likes/").concat(e),{method:"PUT",headers:i.headers})}(m).then((function(e){v(t,e)})).catch((function(e){console.log(e)}))})),a.querySelector(".element__picture").addEventListener("click",(function(e){x(e.target)})),a}function f(e){l.prepend(e)}var m="";function v(e,t){e.closest(".element").querySelector(".element__likes-number").textContent=t.likes.length,function(e){e.classList.toggle("element__like-button_color_black")}(e)}var p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n),t.removeAttribute("disabled")):(t.classList.add(n),t.setAttribute("disabled",!0))};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector("#popup_profile"),h=document.querySelector("#popup_avatar"),b=document.querySelector("#popup_card"),S=document.querySelector("#popup_card-remove"),q=document.querySelector("#popup_picture"),E=document.querySelector(".profile__edit-button"),g=document.querySelector(".card__add-button"),k="",L=[];Promise.all([u("".concat(i.url,"/users/me"),{headers:i.headers}),u("".concat(i.url,"/cards"),{headers:i.headers})]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];j.textContent=o.name,O.textContent=o.about,P.src=o.avatar,P.alt=o.name,k=o._id,c.forEach((function(e){L.push(e)})),L.forEach((function(e){f(d(e.name,e.link,e.likes,e._id,e.owner))}))})).catch((function(e){return console.error(e)}));var C=q.querySelector("#image"),A=q.querySelector("#text");function x(e){t(q),C.src=e.src,A.textContent=e.alt,C.alt=e.alt}E.addEventListener("click",(function(e){t(_),T.value=j.textContent,B.value=O.textContent})),g.addEventListener("click",(function(e){return t(b)}));var w=document.forms.formProfile,j=document.querySelector(".profile__title"),O=document.querySelector(".profile__subtitle"),P=document.querySelector(".profile__avatar"),T=w.querySelector("#input-name"),B=w.querySelector("#input-job"),D=w.querySelector(".form__button");T.value=j.textContent,B.value=O.textContent,w.addEventListener("submit",(function(e){var t,r;a(!0,D),(t=T.value,r=B.value,u("".concat(i.url,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify({name:t,about:r})})).then((function(e){j.textContent=e.name,O.textContent=e.about,n(_)})).catch((function(e){console.log(e)})).finally(a(!1,D))}));var I,J=document.forms.formCard,N=J.querySelector("#input-place"),H=J.querySelector("#input-url"),M=J.querySelector(".form__button");J.addEventListener("submit",(function(e){var t,r;a(!0,M),(t=N.value,r=H.value,u("".concat(i.url,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify({name:"".concat(t),link:"".concat(r)})})).then((function(t){f(d(t.name,t.link,t.likes,t._id,t.owner)),n(b),e.target.reset()})).catch((function(e){console.log(e)})).finally(a(!1,M))})),I={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__item_type_error"},Array.from(document.querySelectorAll(I.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,n,r,o){var c=Array.from(e.querySelectorAll(t)),u=e.querySelector(n);p(c,u,o),c.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r),o.textContent=n}(e,t,t.validationMessage,n)}(e,t,r),p(c,u,o)}))}))}(e,I.inputSelector,I.submitButtonSelector,I.inputErrorClass,I.inactiveButtonClass)})),b.addEventListener("click",(function(e){return r(e.target)})),_.addEventListener("click",(function(e){return r(e.target)})),q.addEventListener("click",(function(e){return r(e.target)})),h.addEventListener("click",(function(e){return r(e.target)})),document.forms.formCardRemove.addEventListener("submit",(function(){(function(e){return u("".concat(i.url,"/cards/").concat(e),{method:"DELETE",headers:i.headers})})(m).then((function(e){document.getElementById(m).remove(),n(S)})).catch((function(e){console.log(e)}))})),document.querySelector(".profile__avatar-overlay").addEventListener("click",(function(){t(h)}));var U=document.forms.formAvatar,z=U.querySelector("#input-url-avatar"),R=U.querySelector(".form__button");U.addEventListener("submit",(function(){var e=z.value;a(!0,R),function(e){return u("".concat(i.url,"/users/me/avatar"),{method:"PATCH",headers:i.headers,body:JSON.stringify({avatar:e})})}(e).then((function(e){P.src=e.avatar,n(h),U.reset()})).catch((function(e){console.log(e)})).finally(a(!1,R))}))})();