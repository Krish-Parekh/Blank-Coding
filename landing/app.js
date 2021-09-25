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
const timer = document.getElementById("timer");

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
    
    startTimer();
};

let timerOnceStarted = false;
function startTimer() {
    if(!timerOnceStarted){
        timerOnceStarted = true;
        
        const intervalID = setInterval(changeTime, 1000);
        
        const timeMinutes = 20 // set this to required minutes
        const timerLimit = timeMinutes * 60;
        let secondsElapsed = 0;
        function changeTime() {
            secondsElapsed++;
            timer.innerText = fancyTimeFormat(timerLimit - secondsElapsed + 1);
            
            if(secondsElapsed > timerLimit) // timer ends
            {
                clearInterval(intervalID);
                
                // Write below the stuff to be done after timer ends (eg. auto submit, etc)
            }
        }
    }
}

function fancyTimeFormat(duration) {   
    /* https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds/11486026#11486026 */
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


textareaHidden.onblur = function () {
    cursor.classList.add("d-none");
};

document.body.onkeydown = function (event) {
    if (event.code === "Tab") {
        event.preventDefault();
    }
};

document.onkeydown = function(e) {
    // F12 key
    if(e.code == 123) {
        return false;
    }
    // I key
    if(e.ctrlKey && e.shiftKey && e.code == 'I'.charCodeAt(0)){
        return false;
    }
    // J key 
    if(e.ctrlKey && e.shiftKey && e.code == 'J'.charCodeAt(0)){
        return false;
    }
    // disable U
    if(e.ctrlKey && e.code == 'U'.charCodeAt(0)){
        return false;
    }
}
document.addEventListener('contextmenu',event => event.preventDefault());

window.onload = function () {
    var controls = document.getElementsByTagName("*");
    var regEx = new RegExp("(^| )disable( |$)");
    for (var i = 0; i < controls.length; i++) {
        if (regEx.test(controls[i].className)) {
            AttachEvent(controls[i], "copy");
            AttachEvent(controls[i], "paste");
            AttachEvent(controls[i], "cut");
        }
    }
};
function AttachEvent(control, eventName) {
    if (control.addEventListener) {
      control.addEventListener(eventName, function (e) { e.preventDefault(); }, false);
    } else if (control.attachEvent) {
      control.attachEvent('on' + eventName, function () { return false; });
    }
}
      
