// Modify the DOM directly with Javascript or JQuery

const wrapperEl = document.querySelector('.wrapper');
const numberOfEls = 26;
const duration = 5000;
const delay = duration / numberOfEls;

let tl = anime.timeline({
duration: delay,
complete: function() { tl.restart(); }
});

function createEl(i) {
let el = document.createElement('div');
el.classList.add('el');
el.style.border = "1px solid #333";
el.style.borderRadius = '100%';
el.style.height = `calc(1px + ${i * 20}px`;
el.style.width = `calc(1px + ${i * 20}px`;

tl.add({
    begin: function() {
    anime({
        targets: el,
        // scale: [1, 1.25],
        borderWidth: [1, 5],
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: duration * .1
    });
    }
});
wrapperEl.appendChild(el);
};

for (let i = 0; i < numberOfEls; i++) createEl(i);
