(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){e.classList.add("popup_opened"),document.addEventListener("keydown",r)}function n(e){e.classList.remove("popup_opened"),e.classList.remove("popup_opened-picture"),document.removeEventListener("keydown",r)}function o(e){e.classList.contains("popup_opened")&&n(e)}function r(e){"Escape"===e.key&&n(document.querySelector(".popup_opened"))}e.d({},{co:()=>C,oB:()=>k,DJ:()=>y,f:()=>P,t1:()=>A,Ag:()=>j}),document.querySelectorAll(".popup__close-button").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return n(t)}))}));var c={url:"https://nomoreparties.co/v1/wbf-cohort-5",headers:{authorization:"eb2b4170-c32c-4a27-a66a-d0de0ec94cc6","Content-Type":"application/json"}},u="",i=function(){return fetch("".concat(c.url,"/users/me"),{headers:c.headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(e){return j.textContent=e.name,A.textContent=e.about,P.src=e.avatar,P.alt=e.name,u=e._id})).catch((function(e){return console.error(e)}))},a=document.querySelector(".elements"),s=document.querySelector("#card").content;function l(e,n,o,r,i){var a=s.querySelector(".element").cloneNode(!0),l=a.querySelector(".element__picture"),d=a.querySelector(".element__text"),_=a.querySelector(".element__likes-number");return a.setAttribute("id",r),a.setAttribute("owner",i._id),a.getAttribute("owner")!==u&&(a.querySelector(".element__trash-button").classList.add("element__trash-button_invisible"),a.querySelector(".element__trash-button").setAttribute("disabled",!0)),l.src=n,l.alt=e,d.textContent=e,_.textContent=o.length,a.querySelector(".element__trash-button").addEventListener("click",(function(e){var n;n=e.target,t(y),m=n.closest(".element").id})),a.querySelector(".element__like-button").addEventListener("click",(function(e){var t;t=e.target,m=t.closest(".element").id,t.classList.contains("element__like-button_color_black")?(function(e){e.nextElementSibling.textContent=Number(e.nextElementSibling.textContent)-1}(t),function(e){fetch("".concat(c.url,"/cards/likes/").concat(e),{method:"DELETE",headers:c.headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}(m),f(t)):(function(e){e.nextElementSibling.textContent=Number(e.nextElementSibling.textContent)+1}(t),function(e){fetch("".concat(c.url,"/cards/likes/").concat(e),{method:"PUT",headers:c.headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}(m),f(t))})),a.querySelector(".element__picture").addEventListener("click",(function(e){C(e.target)})),a}function d(e){a.prepend(e)}var m="";function f(e){e.classList.toggle("element__like-button_color_black")}var _=function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,n,o,r){var c=Array.from(e.querySelectorAll(t)),u=e.querySelector(n);p(c,u,r),c.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),r.textContent=n}(e,t,t.validationMessage,n)}(e,t,o),p(c,u,r)}))}))}(t,e.inputSelector,e.submitButtonSelector,e.inputErrorClass,e.inactiveButtonClass)}))},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n),t.removeAttribute("disabled")):(t.classList.add(n),t.setAttribute("disabled",!0))},v=document.querySelector("#popup_profile"),h=document.querySelector("#popup_avatar"),b=document.querySelector("#popup_card"),y=document.querySelector("#popup_card-remove"),S=document.querySelector("#popup_picture"),E=document.querySelector(".profile__edit-button"),q=document.querySelector(".card__add-button");i();var k=[];fetch("".concat(c.url,"/cards"),{headers:c.headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(e){e.forEach((function(e){k.push(e)})),k.forEach((function(e){d(l(e.name,e.link,e.likes,e._id,e.owner))}))})).catch((function(e){return console.error(e)}));var L=S.querySelector("#image"),g=S.querySelector("#text");function C(e){t(S),S.classList.add("popup_opened-picture"),L.src=e.src,g.textContent=e.alt,L.alt=e.alt}E.addEventListener("click",(function(e){return t(v)})),q.addEventListener("click",(function(e){return t(b)}));var x=document.forms.formProfile,j=document.querySelector(".profile__title"),A=document.querySelector(".profile__subtitle"),P=document.querySelector(".profile__avatar"),B=x.querySelector("#input-name"),w=x.querySelector("#input-job");B.value=j.textContent,w.value=A.textContent,x.addEventListener("submit",(function(e){var t,o;t=B.value,o=w.value,fetch("".concat(c.url,"/users/me"),{method:"PATCH",headers:c.headers,body:JSON.stringify({name:t,about:o})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(e){j.textContent=e.name,A.textContent=e.about})).catch((function(e){console.log(e)})),i(),n(v),_({formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__item_type_error"})}));var O=document.forms.formCard,T=O.querySelector("#input-place"),N=O.querySelector("#input-url");O.addEventListener("submit",(function(e){var t,o;t=T.value,o=N.value,fetch("".concat(c.url,"/cards"),{method:"POST",headers:c.headers,body:JSON.stringify({name:"".concat(t),link:"".concat(o)})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(e){d(l(e.name,e.link,e.likes,e._id,e.owner))})).catch((function(e){console.log(e)})),N.value="",T.value="",n(b),_({formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__item_type_error"})})),_({formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__item_type_error"}),b.addEventListener("click",(function(e){return o(e.target)})),v.addEventListener("click",(function(e){return o(e.target)})),S.addEventListener("click",(function(e){return o(e.target)})),document.forms.formCardRemove.addEventListener("submit",(function(){!function(e){fetch("".concat(c.url,"/cards/").concat(e),{method:"DELETE",headers:c.headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(t){document.getElementById(e).remove()})).catch((function(e){console.log(e)}))}(m),n(y)})),document.querySelector(".profile__avatar-overlay").addEventListener("click",(function(){t(h)}));var D=document.forms.formAvatar,J=D.querySelector("#input-url-avatar");D.addEventListener("submit",(function(){var e;e=J.value,fetch("".concat(c.url,"/users/me/avatar"),{method:"PATCH",headers:c.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(e){P.src=e.avatar})).catch((function(e){console.log(e)})),n(h),D.reset()}))})();