const btn = document.querySelector('button');

const mousePosToCustomProp = (e, element) => {
    const posX = e.offsetX;
    const posY = e.offsetY;

    element.style.setProperty('--x', posX + 'px');
    element.style.setProperty('--y', posY + 'px');

    btn.classList.add('pulse');
    btn.addEventListener('animationend', () => btn.classList.remove('pulse'));
};

btn.addEventListener('mousedown', (e) => mousePosToCustomProp(e, btn));
