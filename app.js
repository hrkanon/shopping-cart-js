function updateProductNumber(product, isIncreasing) {
  const phoneNumber = document.getElementById(product + "-number");
  if (isIncreasing == "true") {
    phoneNumber.value = parseInt(phoneNumber.value) + 1;
  } else {
    if (phoneNumber.value > 0) {
      phoneNumber.value = parseInt(phoneNumber.value) - 1;
    } else {
      return;
    }
  }
  calcProductTotal("phone");
  calcProductTotal("case");
  calculateTotal();
}

function calcProductTotal(product) {
  const productTotal = document.getElementById(product + "-total");
  const productNumber = document.getElementById(product + "-number").value;
  if (product == "phone") {
    const phonePrice = productNumber * 1219;
    productTotal.innerText = phonePrice;
    return phonePrice;
  } else if (product == "case") {
    const casePrice = productNumber * 59;
    productTotal.innerText = casePrice;
    return casePrice;
  }
}

function calculateTotal() {
  const subTotal = document.getElementById("sub-total");
  const tax = document.getElementById("tax-amount");
  const total = document.getElementById("total-price");
  subTotal.innerText = calcProductTotal("phone") + calcProductTotal("case");
  tax.innerText = subTotal.innerText * 0.15;
  total.innerText = parseInt(subTotal.innerText) + parseFloat(tax.innerText);
}
