
// De-selects any pre-defined tip buttons once custom option is checked

const customTipChange = () => {
    const clickedTip = document.querySelectorAll('.tipBtn');
    const clickedTipLabel = document.querySelectorAll('.forRadio');
    for (let i = 0; i < clickedTip.length; i++){
        if (clickedTip[i].checked = true){
            clickedTip[i].checked = false;   
        }

    } 
}; 

// Clears the custom tip field when a pre-defined tip button is selected

const customTipClear = () => {
    const custom = document.getElementById('customTip');
    if(custom.value != "")
    custom.value = "";
}

// Calculates everything
    const  sumItUp =()=>{
    const customVal = document.getElementById('customTip').value;
    const billAmount = document.getElementById('billAmount').value;
    const tipBtnVal = document.querySelector('.tipBtn:checked').value;
    const numOfPeople = document.getElementById('peopleAmount').value;
    const tipAmountDisplay = document.getElementById('tipAmountBig');
    const totalAmountDisply = document.getElementById('totalAmountBig');
    
    if(numOfPeople == 0){
        
    }

    let tipAmt = 0;
    if (tipBtnVal === undefined){
        tipAmt = (billAmount * (customVal / 100));
    }else { tipAmt = (billAmount * tipBtnVal)};

    
    let total = ((parseInt(billAmount) + parseInt(tipAmt)) / numOfPeople);

    tipAmountFinal = tipAmt.toFixed(2);
    totalFinal = total.toFixed(2);
    

    tipAmountDisplay.innerHTML = `$ ${tipAmountFinal}`;
    totalAmountDisply.innerHTML = `$ ${totalFinal}`;
};

const billAmountInput = document.getElementById('billAmount').addEventListener('input', sumItUp);
const numOfPeopleInput = document.getElementById('peopleAmount').addEventListener('input', sumItUp);
const customTipInput = document.getElementById('customTip').addEventListener('input', sumItUp);

/* need to get function sumItUp to run on button click....


make if then statement on num of people / bill amount to make error message so up if not filled...


use if (num of people = 0){
    show error message
} else { run rest of function }


*/




