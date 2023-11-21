const ourMenuElem = document.getElementById('contextMenu');
document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    if (ourMenuElem.style.display === 'none') {
        ourMenuElem.style.left = event.pageX + 'px';
        ourMenuElem.style.top = event.pageY + 'px';
        ourMenuElem.style.display = 'block';

    } else {
        ourMenuElem.style.left = event.pageX + 'px';
        ourMenuElem.style.top = event.pageY + 'px';
    }

});



document.body.addEventListener('click', () => {
    ourMenuElem.style.display = 'none';
})

document.body.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        ourMenuElem.style.display = 'none';
    }
});