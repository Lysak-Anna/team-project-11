function e(e,t,n,o){const d=document.querySelectorAll(e),s=document.querySelector(t),c=document.querySelector(n),a=document.querySelector(o);function i(){c.classList.add("is-hidden"),s.classList.add("is-hidden"),document.removeEventListener("keydown",r),s.removeEventListener("click",l),c.removeEventListener("click",m)}function r(e){"Escape"===e.key&&i()}function l(e){e.target!==s||c.contains(e.target)||i()}function m(e){e.target.closest(".modal-stores__body, .modal-payment__body")||i()}d.forEach((e=>{e.addEventListener("click",(()=>{c.classList.remove("is-hidden"),s.classList.remove("is-hidden"),document.addEventListener("keydown",r),s.addEventListener("click",l),c.addEventListener("click",m)}))})),a.addEventListener("click",(()=>{i()}))}e("[openmodal-stores]",".backdrop-stores",".modal-stores",".modal-stores__close"),e("[openmodal-payment]",".backdrop-payment",".modal-payment",".modal-payment__close");
//# sourceMappingURL=index.eea740b8.js.map
