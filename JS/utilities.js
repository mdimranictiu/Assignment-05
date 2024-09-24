
function showSection(id){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}


function validationInput(id1,id2,id3){
    const title=document.getElementById(id3).innerText;
    const inputData= parseFloat(document.getElementById(id1).value);
   const balanceAmount=document.getElementById('balanceAmount').innerText;
   const balanceAmountNumber=parseFloat(balanceAmount).toFixed(2)
   if(isNaN(inputData) || inputData === "" || inputData > balanceAmountNumber || inputData<=0){
    alert("Invalid Input");
    document.getElementById(id1).value ="";
   }
   else{
    const addAmount=parseFloat(document.getElementById(id2).innerText);
    document.getElementById(id2).innerText=inputData+addAmount;
    const remainBalance=balanceAmountNumber-inputData;
    document.getElementById('balanceAmount').innerText=remainBalance;
    
    const history_creation=document.createElement('div');
    history_creation.className='rounded-2xl p-7 border border-zinc-300 my-5';
    history_creation.innerHTML=
    `
    <h2 class="text-xl font-bold text-[#111111] mb-5">${inputData} Taka is Donated ${title} </h2>
    <p class="font-normal text-base text-[#b6b3b3]">Date: ${new Date()}</p>
    
    `
    const history_parent=document.getElementById('history_parent');
    history_parent.appendChild(history_creation);
   document.getElementById('my_modal_5').showModal();
   }
   
   document.getElementById(id1).value ="";
}