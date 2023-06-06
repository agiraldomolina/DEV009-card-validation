import validator from "./validator.js";

const set1 = document.querySelector("#set1");
const set2 = document.querySelector("#set2");
const set3 = document.querySelector("#set3");
const set4 = document.querySelector("#set4");

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
});

set2.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
});

set3.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
});

set4.addEventListener("keypress", function (e) {
  if (onlyDigits(e) === false) {
    e.preventDefault();
  }
});

buttonVerify.addEventListener("click", function () {
  alert(
    `Muchas gracias por hacer tu donación ${donationKind} por un valor de ${amountDonated}`
  );

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
