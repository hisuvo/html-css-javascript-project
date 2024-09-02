
let btn = document.getElementById("calculate_brn");
let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let total = document.getElementById("total");


btn.addEventListener('click', () => {
    let billValue = bill.value;
    let tipValue = tip.value;
    let totalValue = billValue * (1+ tipValue / 100)
    total.innerHTML = totalValue.toFixed(0)
})