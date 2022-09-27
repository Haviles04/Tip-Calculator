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

let invalidPeople = document.getElementById("invalidPeople");
let invalidBill = document.getElementById("invalidBill");
let invalidTip = document.getElementById("invalidTip");

const checkBillAmount = (amt) => {
  invalidBill.style.visibility = amt === 0 ? "visible" : "hidden";
  return amt === 0;
};

const checkTipAmt = (preset, custom) => {
  invalidTip.style.visibility =
    preset === 0 && custom === 0 ? "visible" : "hidden";
  return preset === 0 && custom === 0;
};

const checkPeopleAmt = (amt) => {
  invalidPeople.style.visibility = amt === 0 ? "visible" : "hidden";
  return amt === 0;
};

// Calculation function

const inputHandler = () => {
  const customVal = Number(document.getElementById("customTip").value);
  const billAmount = Number(document.getElementById("billAmount").value);
  const numOfPeople = Number(document.getElementById("peopleAmount").value);

  const getTipValue = () => {
    const tipBtns = document.querySelectorAll(".tipBtn:checked");
    return tipBtns.length ? Number(tipBtns[0].value) : 0;
  };
  const tipBtnVal = getTipValue();

  const isBillAmountError = checkBillAmount(billAmount);
  const isTipAmountError = checkTipAmt(tipBtnVal, customVal);
  const isPeopleAmountError = checkPeopleAmt(numOfPeople);

// calculates number values

  const calculate = () => {
    let tipAmt = 0;
    if (tipBtnVal === 0) {
      tipAmt = (billAmount * (customVal / 100)) / numOfPeople;
    } else {
      tipAmt = (billAmount * tipBtnVal) / numOfPeople;
    }

    let total = (billAmount + tipAmt * numOfPeople) / numOfPeople;

    //Rounds number to 2 decimal places
    tipAmountFinal = tipAmt.toFixed(2);
    totalFinal = total.toFixed(2);

    // Displays numbers to user

    document.getElementById("tipAmountBig").innerHTML = `$ ${tipAmountFinal}`;
    document.getElementById("totalAmountBig").innerHTML = `$ ${totalFinal}`;
  };

  //Makes sure all forms are filled in

  if (!isBillAmountError && !isTipAmountError && !isPeopleAmountError) {
    document.getElementById("reset").classList.add("resetOn");
    calculate();
  }
};

const resetAll = () => {
  document.getElementById("optionsForm").reset();
  document.getElementById("tipAmountBig").innerHTML = "$ 0.00";
  document.getElementById("totalAmountBig").innerHTML = "$ 0.00";
  document.getElementById("reset").classList.remove("resetOn");
};

// calls for inputHandler function to run whenever anything on any form is changed
const billAmountInput = document
  .getElementById("billAmount")
  .addEventListener("input", inputHandler);
const numOfPeopleInput = document
  .getElementById("peopleAmount")
  .addEventListener("input", inputHandler);
const customTipInput = document
  .getElementById("customTip")
  .addEventListener("input", inputHandler);
const resetBtnInput = document
  .getElementById("reset")
  .addEventListener("click", resetAll);
