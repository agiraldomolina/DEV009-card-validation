const validator = {
  maskify(creditCardNumber) {
    //Using ternary operator to declare chars
    const chars =
      typeof creditCardNumber === "number"
        ? creditCardNumber.toString()
        : creditCardNumber;

    const last = chars.slice(-4); // create a new string taking only last 4 characters from creditCardNumber
    const maskNumber = last.padStart(chars.length, "#");
    return maskNumber;
  },

  isValid(creditCardNumber) {
    const arrayCCNReversa = [...creditCardNumber].reverse();

    let sumTotal = 0;

    for (const [index, element] of arrayCCNReversa.entries()) {
      if ((index + 1) % 2 !== 0) {
        sumTotal = sumTotal + +element;
      } else {
        let elementDouble = +element * 2;
        if (elementDouble * 2 < 10) {
          sumTotal = sumTotal + elementDouble;
        } else {
          elementDouble = elementDouble + "";
          sumTotal =
            sumTotal +
            [...elementDouble].reduce((sum, digits) => sum + +digits, 0);
        }
      }
    }

    return sumTotal % 10 === 0 ? true : false;
  },
};

export default validator;
