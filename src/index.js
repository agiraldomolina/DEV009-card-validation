import validator from "./validator.js";

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

//const buttonConfirm = document.querySelector("button-confirm");
const buttonVerify = document.querySelector(".button-verify");

let donationKind = "";
let amountDonated = 0;
let msg = "";

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
  } else {
    console.log(month.value);
  }
  if (month.value.length === 2) {
    year.focus();
  }
});

year.addEventListener("focus", function () {
  console.log(month.value);
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

  if (
    +digitsSet1.length < 4 ||
    +digitsSet2.length < 4 ||
    +digitsSet3.length < 4 ||
    +digitsSet4.length < 4
  ) {
    alert(
      "Por favor introduzca correctamente todos los dígitos de su tarjeta de crédito"
    );
    set1.focus();
  } else {
    // Cancatenating the sets
    const strCardNumber = `${digitsSet1}${digitsSet2}${digitsSet3}${digitsSet4}`;
    console.log(strCardNumber);

    const creditCardValid = validator.isValid(strCardNumber);
    // const msg = creditCardValid ? "valido" : "invalido";
    // alert(`Numero de tarjeta ${msg}`);

    if (creditCardValid) {
      msg = "válido";
      const masky = validator.maskify(strCardNumber);
      set1.value = masky.substring(0, 4);
      set2.value = masky.substring(4, 8);
      set3.value = masky.substring(8, 12);
      set4.value = masky.substring(12);
      const donorName = name.value;
      alert(
        `😽😻 ${donorName} muchas gracias por hacer tu donación ${donationKind} por un valor de ${amountDonated}$`
      );
    } else {
      msg = "no válido";
      set1.value = "";
      set2.value = "";
      set3.value = "";
      set4.value = "";
    }

    alert(`Numero de tarjeta ${msg}`);

    // const masky = validator.maskify(strCardNumber);
    // set1.value = masky.substring(0, 4);
    // set2.value = masky.substring(4, 8);
    // set3.value = masky.substring(8, 12);
    // set4.value = masky.substring(12);

    // if (creditCardValid) {
    //   const donorName = name.value;
    //   alert(
    //     `😽😻 ${donorName} muchas gracias por hacer tu donación ${donationKind} por un valor de ${amountDonated}$`
    //   );
    // }
  }
});

// const numTest2 = "3625102593804";
// console.log(validator.isValid(numTest2));

console.log(validator);
