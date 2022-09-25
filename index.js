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

// Calculates everything
const sumItUp = () => {

//Checks to see if the tip button is clicked, if so saves the value as the tipBTNValue, if not sets it as undefined


let tipBtnVal = 0

const isTipBtnClick = () =>{
    const clickedTip = document.querySelectorAll(".tipBtn")
    for (let i = 0; i < clickedTip.length; i++){
      if(clickedTip[i].checked = true){
        let tipBtnVal = clickedTip[i].value;
      }else{
        return tipBtnVal = 0;
      }
    }
  }



  const customVal = document.getElementById("customTip").value;
  const billAmount = document.getElementById("billAmount").value;
  const numOfPeople = document.getElementById("peopleAmount").value;
  const tipAmountDisplay = document.getElementById("tipAmountBig");
  const totalAmountDisply = document.getElementById("totalAmountBig");
  const peopleError = document.getElementsByClassName("invalidPeople");
  const tipError = document.getElementsByClassName("invalidTip");
  const billError = document.getElementsByClassName("invalidBill");

 
 // checks to make sure each field is filled out, if not displays an error message. if everything is good runs the function sum it up;
 
  if (numOfPeople === 0){
    peopleError.style.visibilty = "visible";
  }else if(billAmount === 0){
    billError.style.visibilty = "visible";
  }else if(tipBtnVal === 0 && customVal === 0){
    tipError.style.visibility = "visible";
  }else {


    // calculates all numbers needed
    let tipAmt = 0;
    if (tipBtnVal === undefined) {
      tipAmt = billAmount * (customVal / 100);
    } else {
      tipAmt = billAmount * tipBtnVal;
    }

    let total = (parseInt(billAmount) + parseInt(tipAmt)) / numOfPeople;

    tipAmountFinal = tipAmt.toFixed(2);
    totalFinal = total.toFixed(2);

    // Displays numbers to user
    tipAmountDisplay.innerHTML = `$ ${tipAmountFinal}`;
    totalAmountDisply.innerHTML = `$ ${totalFinal}`;
  }
};

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

/* need to get function sumItUp to run on button click....


make if then statement on num of people / bill amount to make error message so up if not filled...


use if (num of people = 0){
    show error message
} else { run rest of function }


*/
