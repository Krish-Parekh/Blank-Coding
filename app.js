const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".main-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".my-img", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".cont", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

/* const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');


menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

}); */


const form = document.getElementById("form");
const customTextarea = document.getElementById("custom-textarea");
const textareaHidden = document.getElementById("textarea-hidden");
const cursor = document.getElementById("cursor");

form.onsubmit = function (event) {
    event.preventDefault();
    console.log(textareaHidden.value);
};

customTextarea.onfocus = function () {
    /* https://stackoverflow.com/questions/10158190/how-to-set-cursor-at-the-end-in-a-textarea/10158291#10158291 */
    textareaHidden.focus();
    textareaHidden.setSelectionRange(
        textareaHidden.value.length,
        textareaHidden.value.length
    );

    cursor.classList.remove("d-none");
};

textareaHidden.onblur = function () {
    cursor.classList.add("d-none");
};

document.body.onkeydown = function (event) {
    if (event.code === "Tab") {
        event.preventDefault();
    }
};