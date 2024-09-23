
function blurScroll() {
    if (window.scrollY >= 100) { 
        document.getElementById('scroll').classList.add('bg-[#F9F7F3]');
    } else {
        document.getElementById('scroll').classList.remove('bg-[#F9F7F3]');
    }
}
window.onscroll = ()=> {
    blurScroll();
};
