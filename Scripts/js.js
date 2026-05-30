/*const click = $('#menu');*/
const menu = $('#popup');
const close = $('#close');
close.click = () => {
    menu.style.display = 'none';
    document.body.style.overflow = 'scroll';
}
