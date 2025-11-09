const purchasePrice = document.getElementById("chosen-purchase-price");
let sliderPurchase = document.getElementById("slider-purchase-price");

const downPayment = document.getElementById("chosen-down-payment");
let sliderDownPayment = document.getElementById("slider-down-payment");

const button = document.getElementById("btn");
let calcResult = document.getElementById("calc-result");

let radioOne = document.getElementById("radio-one");
let radioTwo = document.getElementById("radio-two");
let radiothree = document.getElementById("radio-three");

purchasePrice.innerHTML = 250000;
downPayment.innerHTML = 50000;
calcResult.innerHTML = 780;
let purchase = 0;
let payment = 0;
let rate = 0;
let years = 0;
let points = 0.325;

sliderPurchase.addEventListener('input', () => {
    purchasePrice.innerHTML = sliderPurchase.value;
    purchase = Number(sliderPurchase.value);
});

sliderDownPayment.addEventListener('input', () => {
    downPayment.innerHTML = sliderDownPayment.value;
    payment = Number(sliderDownPayment.value);
});


radioOne.addEventListener('click', () => {
    rate = .03;
    years = 5;
});

radioTwo.addEventListener('click', () => {
    rate = .04;
    years = 15;
});

radiothree.addEventListener('click', () => {
    rate = .05;
    years = 30;
});




button.addEventListener('click', () => {
    let loan = purchase - payment;
    let totalMonth = years * 12;
    let monthPayment = loan * ((rate / 12) * (1 + (rate / 12)) ** totalMonth) / ((1 + (rate / 12)) ** totalMonth - 1);
    let totalLoan = monthPayment * totalMonth;
    let total = (totalLoan + (points / 100 * loan) + payment)/1000;
    calcResult.innerHTML = Math.floor(total);
});