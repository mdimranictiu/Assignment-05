
function blurScroll() {
    if (window.scrollY >= 100) { 
        document.getElementById('scroll').classList.add('backdrop-blur-xl');
    } else {
        document.getElementById('scroll').classList.remove('backdrop-blur-xl');
    }
}
window.onscroll = ()=> {
    blurScroll();
};

document.getElementById('q1').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('a2').classList.add('hidden');
    document.getElementById('a3').classList.add('hidden');
    document.getElementById('a4').classList.add('hidden');
    document.getElementById('a1').classList.remove('hidden');

    document.getElementById('i1').classList.add('rotate-180');
    document.getElementById('i2').classList.remove('rotate-180');
    document.getElementById('i3').classList.remove('rotate-180');
    document.getElementById('i4').classList.remove('rotate-180');
})
document.getElementById('q2').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('a1').classList.add('hidden');
    document.getElementById('a3').classList.add('hidden');
    document.getElementById('a4').classList.add('hidden');
    document.getElementById('a2').classList.remove('hidden');

    document.getElementById('i2').classList.add('rotate-180');
    document.getElementById('i1').classList.remove('rotate-180');
    document.getElementById('i3').classList.remove('rotate-180');
    document.getElementById('i4').classList.remove('rotate-180');
})
document.getElementById('q3').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('a1').classList.add('hidden');
    document.getElementById('a2').classList.add('hidden');
    document.getElementById('a4').classList.add('hidden');
    document.getElementById('a3').classList.remove('hidden');

    document.getElementById('i3').classList.add('rotate-180');
    document.getElementById('i1').classList.remove('rotate-180');
    document.getElementById('i2').classList.remove('rotate-180');
    document.getElementById('i4').classList.remove('rotate-180');
})
document.getElementById('q4').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('a1').classList.add('hidden');
    document.getElementById('a2').classList.add('hidden');
    document.getElementById('a3').classList.add('hidden');
    document.getElementById('a4').classList.remove('hidden');
    document.getElementById('a5').classList.remove('hidden');

    document.getElementById('i4').classList.add('rotate-180');
    document.getElementById('i1').classList.remove('rotate-180');
    document.getElementById('i2').classList.remove('rotate-180');
    document.getElementById('i3').classList.remove('rotate-180');
})
