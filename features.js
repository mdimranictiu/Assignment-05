document.getElementById('donate-section-show').addEventListener('click',()=>{
    showSection('donate-section');
    document.getElementById('donate-section-show').classList.add('bg-[#B4F461]');
    document.getElementById('history-section-show').classList.remove('bg-color');
    
 
})
document.getElementById('history-section-show').addEventListener('click',()=>{
    showSection('history-section');
    document.getElementById('history-section-show').classList.add('bg-color');
    document.getElementById('donate-section-show').classList.remove('bg-[#B4F461]')

})

document.getElementById('noakhali_donate_btn').addEventListener('click',(e)=>{
    e.preventDefault();
    validationInput('input_amount_noakhali','noakhali_amount','noakhali_title');
})
document.getElementById('feni_donate_btn').addEventListener('click',(e)=>{
    e.preventDefault();
    validationInput('input_amount_feni','feni_amount','feni_title');
})
document.getElementById('quota_donate_btn').addEventListener('click',(e)=>{
    e.preventDefault();
    validationInput('input_amount_quota','quota_amount','quota_title');
})
document.getElementById('gaza_donate_btn').addEventListener('click',(e)=>{
    e.preventDefault();
    validationInput('input_amount_gaza','gaza_amount','gaza_title');
})