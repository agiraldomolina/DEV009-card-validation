import validator from "./validator.js";

// declaring variables for elements

const set1 = document.querySelector("#input-set1");
const set2 = document.querySelector("#input-set2");
const set3 = document.querySelector("#input-set3");
const set4 = document.querySelector("#input-set4");

const name = document.querySelector("#input-name");
const month = document.querySelector("#input-month");
const year = document.querySelector("#input-year");
const CCV = document.querySelector("#input-cvc");

const monthlyDonation = document.querySelector("#monthly-donation");
const onceDonation = document.querySelector("#once-donation");

const donate5 = document.querySelector("#donate5");
const donate10 = document.querySelector("#donate10");
const donate20 = document.querySelector("#donate20");
const donateDiffAmunt = document.querySelector("#donate-diff-amount");

const buttonVerify = document.querySelector(".button-verify");

//declaring variables
let donationKind = "";
let amountDonated = 0;
let msg = "";

//Reading the find of donation
monthlyDonation.addEventListener("click", function () {
  donationKind = "mensual";
});
onceDonation.addEventListener("click", function () {
  donationKind = "una vez";
});

//Reading donation amount
donate5.addEventListener("click", function () {
  amountDonated = 5;
});
donate10.addEventListener("click", function () {
  amountDonated = 10;
});
donate20.addEventListener("click", function () {
  amountDonated = 20;
});
donateDiffAmunt.addEventListener("click", function () {
  amountDonated = prompt("Ingrese la cantidad que quiere donar");
});

// function that verify that user press only digits
function onlyDigits(e) {
  const char = e.which || e.keycode;
  if (char >= 48 && char <= 57) return true;
  else return false;
}

//every time user press a key inside digits inputs
set1.addEventListener("keypress", function (e) {
  //thansk to onlyDigits function only digits are received
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
  //when digits are complete cursor moves to the next digits set
  if (set1.value.length === 4) set2.focus();
});

set2.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
  if (set2.value.length === 4) set3.focus();
});

set3.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
  if (set3.value.length === 4) set4.focus();
});

set4.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
  if (set4.value.length === 4) month.focus();
});

//thanks to onlyDigits function only digits are received
month.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
  //when month digits are complete cursor moves to the next filed
  if (month.value.length === 2) {
    year.focus();
  }
});

//Verifyin values for month, year and CCV
year.addEventListener("focus", function () {
  if (+month.value === 0 || +month.value > 12) {
    alert(`${month.value} no es un número de mes válido`);
    month.value = "";
    month.focus();
  }
});

year.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
  if (year.value.length === 2) {
    CCV.focus();
  }
});

CCV.addEventListener("focus", function () {
  if (!(+year.value > 22 && +year.value < 28)) {
    alert(`${year.value} no es un número de añ0 válido`);
    year.value = "";
    year.focus();
  }
});

CCV.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
});

buttonVerify.addEventListener("click", function () {
  //read digits from inputs

  const digitsSet1 = set1.value;
  const digitsSet2 = set2.value;
  const digitsSet3 = set3.value;
  const digitsSet4 = set4.value;

  //Verifying all digits are complete
  if (
    +digitsSet1.length < 4 ||
    +digitsSet2.length < 4 ||
    +digitsSet3.length < 4 ||
    +digitsSet4.length < 4
  ) {
    //if digits are incomplete user is alerted y can'n continue
    alert(
      "Por favor introduzca correctamente todos los dígitos de su tarjeta de crédito 😿"
    );
    set1.focus();
  }
  // if digits are complete...
  else {
    // Cancatenating the sets
    const strCardNumber = `${digitsSet1}${digitsSet2}${digitsSet3}${digitsSet4}`;

    // calling method isValid
    const creditCardValid = validator.isValid(strCardNumber);

    // if credit card is a valid number:
    if (creditCardValid) {
      //create a string that will be used in a later message
      msg = "válido";
      //calling maskify method
      const masky = validator.maskify(strCardNumber);
      //masking digits in the onterfaz
      set1.value = masky.substring(0, 4);
      set2.value = masky.substring(4, 8);
      set3.value = masky.substring(8, 12);
      set4.value = masky.substring(12);

      const cardKind = +strCardNumber.slice(0, 1);
      let franq;
      console.log(cardKind);
      console.log(typeof cardKind);
      switch (cardKind) {
        case 4:
          franq = "Visa";
          console.log(franq);
        case 5:
          const masterDigits = +strCardNumber.slice(0, 2);
          if (masterDigits > 50 && masterDigits < 56) {
            franq = "Master Card";
          }
          console.log(franq);
      }

      // declating variable with the donor name
      const donorName = name.value;
      //display a gratitude message
      alert(
        `😽😻 ${donorName} muchas gracias por hacer tu donación ${donationKind} por un valor de ${amountDonated}$, lo cargaremos a tu tarjeta ${franq}`
      );
      // if credit card is not a  valid number:
    } else {
      //create a string that will be used in a later message
      msg = "no válido";
      //clear inputs
      set1.value = "";
      set2.value = "";
      set3.value = "";
      set4.value = "";
    }
    alert(`Numero de tarjeta ${msg}`);
  }
});
