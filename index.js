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
  const customVal = document.getElementById("customTip").value;
  const billAmount = document.getElementById("billAmount").value;
  const numOfPeople = document.getElementById("peopleAmount").value;

  const getTipValue = () => {
    const tipBtns = document.querySelectorAll(".tipBtn:checked");
    return tipBtns.length ? tipBtns[0].value : 0;
  };

  const tipBtnVal = getTipValue();

  // checks to make sure each field is filled out, if not displays an error message. if everything is good runs the function sum it up;
  // doesnt work yet (don't know why)

  if (numOfPeople === false) {
    document.getElementsByClassName("invalidPeople").style.visibilty =
      "visible";
  } else if (billAmount === false) {
    document.getElementsByClassName("invalidBill").style.visibilty = "visible";
  } else if (tipBtnVal === false && customVal === false) {
    document.getElementsByClassName("invalidTip").style.visibility = "visible";
  } else {
    // calculates all numbers needed
    let tipAmt = 0;
    if (tipBtnVal === 0) {
      tipAmt = billAmount * (parseInt(customVal) / 100);
    } else {
      tipAmt = billAmount * tipBtnVal;
    }

    let total = (parseInt(billAmount) + parseInt(tipAmt)) / numOfPeople;

    //Rounds number to 2 decimal places
    tipAmountFinal = tipAmt.toFixed(2);
    totalFinal = total.toFixed(2);

    // Displays numbers to user
    document.getElementById("tipAmountBig").innerHTML = `$ ${tipAmountFinal}`;
    document.getElementById("totalAmountBig").innerHTML = `$ ${totalFinal}`;
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

/* need to get function sumItUp to run on radio button click....


make if then statement on num of people / bill amount to make error message so up if not filled...


use if (num of people = 0){
    show error message
} else { run rest of function }


*/
