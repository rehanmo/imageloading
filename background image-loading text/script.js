const loadText = document.querySelector('.text-loading');
const bg = document.querySelector('.bg');
let load = 0;
let int = setInterval(blurring, 30)

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
/*  
stackover flow code

https://stackoverflow.com/questions/68692386/why-my-loading-text-not-stand-out-tho-it-has-bigger-z-index-than-my-background-i
*/

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}