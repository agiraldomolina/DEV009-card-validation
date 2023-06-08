import validator from "./validator.js";

const set1 = document.querySelector("#input-set1");
const set2 = document.querySelector("#input-set2");
const set3 = document.querySelector("#input-set3");
const set4 = document.querySelector("#input-set4");

const month = document.querySelector("#input-month");
const year = document.querySelector("#input-year");
const CCV = document.querySelector("#input-cvc");

const monthlyDonation = document.querySelector("#monthly-donation");
const onceDonation = document.querySelector("#once-donation");

const donate5 = document.querySelector("#donate5");
const donate10 = document.querySelector("#donate10");
const donate20 = document.querySelector("#donate20");
const donateDiffAmunt = document.querySelector("#donate-diff-amount");

//const buttonConfirm = document.querySelector("button-confirm");
const buttonVerify = document.querySelector(".button-verify");

let donationKind = "";
let amountDonated = 0;
let monthOk = false;
let yearOk = false;
let ccvOk = false;

monthlyDonation.addEventListener("click", function () {
  donationKind = "mensual";
});
onceDonation.addEventListener("click", function () {
  donationKind = "una vez";
});

donate5.addEventListener("click", function () {
  amountDonated = 5;
  console.log(`cantidad donada: ${amountDonated}`);
});
donate10.addEventListener("click", function () {
  amountDonated = 10;
  console.log(`cantidad donada: ${amountDonated}`);
});

donate20.addEventListener("click", function () {
  amountDonated = 20;
  console.log(`cantidad donada: ${amountDonated}`);
});

donateDiffAmunt.addEventListener("click", function () {
  amountDonated = prompt("Ingrese la cantidad que quiere donar");
  console.log(`cantidad donada: ${amountDonated}`);
});

function onlyDigits(e) {
  const char = e.which || e.keycode;
  if (char >= 48 && char <= 57) return true;
  else return false;
}

set1.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
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

month.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
  if (month.value.length === 2) {
    if (+month.value > 0 && +month.value < 13) {
      monthOk = true;
      year.focus();
    } else {
      monthOk = false;
      alert(`${month.value} no es un número de mes válido`);
      month.value = "";
      month.focus();
    }
  }
});

year.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
  if (year.value.length === 2) {
    if (+year.value > 22 && +year.value < 28) {
      yearOk = true;
      CCV.focus();
    } else {
      yearOk = false;
      alert(`${year.value} no es un número de añ0 válido`);
      year.value = "";
      year.focus();
    }
  }
});

CCV.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
  if (CCV.value.length === 3) {
    if (+CCV.value > 0 && +CCV.value < 1000) {
      ccvOk = true;
      buttonVerify.focus();
    } else {
      ccvOk = false;
      alert(`${CCV} no es un código de seguridad válido`);
      CCV.value = "";
      CCV.focus();
    }
  }
});

buttonVerify.addEventListener("click", function () {
  alert(
    `🐱😻 Muchas gracias por hacer tu donación ${donationKind} por un valor de ${amountDonated}$`
  );

  // if (+month.value > 0 && +month.value < 13) {
  //   monthOk = true;
  // } else {
  //   monthOk = false;
  //   alert(`${month.value} no es un número de mes válido`);
  //   month.value = "";
  //   month.focus();
  // }

  // if (+year.value > 22 && +year.value < 28) {
  //   year = true;
  // } else {
  //   year = false;
  //   alert(`${year.value} no es un número de añ0 válido`);
  //   year.value = "";
  //   year.focus();
  // }

  // +year.value > 22 && +year.value < 28 ? (yearOk = true) : (yearOk = false);

  // +CCV.value > 0 && +CCV.value < 1000 ? (ccvOk = true) : (ccvOk = false);

  //read digits from inputs
  const digitsSet1 = set1.value;
  const digitsSet2 = set2.value;
  const digitsSet3 = set3.value;
  const digitsSet4 = set4.value;

  // Cancatenating the sets
  const strCardNumber = `${digitsSet1}${digitsSet2}${digitsSet3}${digitsSet4}`;
  console.log(strCardNumber);

  const creditCardValid = validator.isValid(strCardNumber);
  const msg = creditCardValid ? "valido" : "invalido";
  alert(`Numero de tarjeta ${msg}`);

  const masky = validator.maskify(strCardNumber);
  set1.value = masky.substring(0, 4);
  set2.value = masky.substring(4, 8);
  set3.value = masky.substring(8, 12);
  set4.value = masky.substring(12);
});

const numTest2 = "3625102593804";
console.log(validator.isValid(numTest2));

console.log(validator);
