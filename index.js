// De-selects any pre-defined tip buttons once custom option is checked

const customTipChange = () => {
  const clickedTip = document.querySelectorAll(".tipBtn");
  for (let i = 0; i < clickedTip.length; i++) {
    if ((clickedTip[i].checked = true)) {
      clickedTip[i].checked = false;
    }
  }
};

// Clears the custom tip field when a pre-defined tip button is selected

const customTipClear = () => {
  const custom = document.getElementById("customTip");
  if (custom.value != "") custom.value = "";
};

// Calculation function
const sumItUp = () => {
  
  const customVal = Number(document.getElementById("customTip").value);
  const billAmount = Number(document.getElementById("billAmount").value);
  const numOfPeople = Number(document.getElementById("peopleAmount").value);

  const getTipValue = () => {
    const tipBtns = document.querySelectorAll(".tipBtn:checked");
    return tipBtns.length ? Number(tipBtns[0].value) : 0;
  };
  const tipBtnVal = getTipValue();

  // checks to make sure each field is filled out, if not displays an error message. if everything is good runs the function sum it up;
  // doesnt work yet (don't know why)

  let error = ((numOfPeople === 0) || (billAmount === 0) || (tipBtnVal === 0 && customVal === 0) || (numOfPeople > 0) || (billAmount > 0) || (tipBtnVal > 0 && customVal === 0) || (tipBtnVal === 0 && customVal > 0));

  switch (error){
    case (billAmount > 0 && (tipBtnVal === 0 && customVal === 0)&& numOfPeople >0):
      document.getElementById('invalidBill').style.visibility="hidden";
      document.getElementById('invalidTip').style.visibility="visible";
      document.getElementById('invalidPeople').style.visibility="hidden";
    sumItUp();
    case (billAmount > 0 && (tipBtnVal === 0 && customVal === 0)&& numOfPeople === 0):
      document.getElementById('invalidBill').style.visibility="hidden";
      document.getElementById('invalidTip').style.visibility="visible";
      document.getElementById('invalidPeople').style.visibility="visible";     
    sumItUp();
    case (billAmount > 0 && ((tipBtnVal > 0 && customVal === 0) || (tipBtnVal === 0 && customVal > 0)) && numOfPeople === 0):
      document.getElementById('invalidBill').style.visibility="hidden";
      document.getElementById('invalidTip').style.visibility="hidden";
      document.getElementById('invalidPeople').style.visibility="visible";  
    sumItUp();
    case (billAmount === 0 && ((tipBtnVal > 0 && customVal === 0) && (tipBtnVal === 0 && customVal > 0)) && numOfPeople === 0):
      document.getElementById('invalidBill').style.visibility="visible";
      document.getElementById('invalidTip').style.visibility="hidden";
      document.getElementById('invalidPeople').style.visibility="visible";  
    sumItUp();
    case (billAmount === 0 && ((tipBtnVal > 0 && customVal === 0) || (tipBtnVal === 0 && customVal > 0)) && numOfPeople > 0):
      document.getElementById('invalidBill').style.visibility="visible";
      document.getElementById('invalidTip').style.visibility="hidden";
      document.getElementById('invalidPeople').style.visibility="hidden";  
    sumItUp();
    case (billAmount === 0 && (tipBtnVal === 0 && customVal === 0)&& numOfPeople >0):
      document.getElementById('invalidBill').style.visibility="visible";
      document.getElementById('invalidTip').style.visibility="visible";
      document.getElementById('invalidPeople').style.visibility="hidden";  
    sumItUp();  
  
    case (billAmount > 0 && ((tipBtnVal > 0 && customVal === 0) || (tipBtnVal === 0 && customVal > 0)) && numOfPeople > 0 ):
      document.getElementById('invalidBill').style.visibility="hidden";
      document.getElementById('invalidTip').style.visibility="hidden";
      document.getElementById('invalidPeople').style.visibility="hidden"; 
      document.querySelector('.resetBtn').classList.add="resetOn"; 



        // calculates all numbers needed
        
        let tipAmt = 0;
        if (tipBtnVal === 0) {
          tipAmt = (billAmount * (customVal / 100)) / numOfPeople;
        } else {
          tipAmt = (billAmount * tipBtnVal) / numOfPeople;
        }

        let total = (billAmount + (tipAmt * numOfPeople)) / numOfPeople;

        //Rounds number to 2 decimal places
        tipAmountFinal = tipAmt.toFixed(2);
        totalFinal = total.toFixed(2);
  }

    // Displays numbers to user

    document.getElementById("tipAmountBig").innerHTML = `$ ${tipAmountFinal}`;
    document.getElementById("totalAmountBig").innerHTML = `$ ${totalFinal}`;
    
  

};

const resetAll = () => {
  document.getElementById("optionsForm").reset();
  document.getElementById("tipAmountBig").innerHTML = "$ 0.00";
  document.getElementById("totalAmountBig").innerHTML = "$ 0.00";
}


// calls for sumItUp function to run whenever anything on any form is changed
const billAmountInput = document
  .getElementById("billAmount")
  .addEventListener("input", sumItUp);
const numOfPeopleInput = document
  .getElementById("peopleAmount")
  .addEventListener("input", sumItUp);
const customTipInput = document
  .getElementById("customTip")
  .addEventListener("input", sumItUp);
const resetBtnInput = document.getElementById("reset").addEventListener('click', resetAll)

/* need to get function sumItUp to run on radio button click....


make if then statement on num of people / bill amount to make error message so up if not filled...


use if (num of people = 0){
    show error message
} else { run rest of function }


*/
