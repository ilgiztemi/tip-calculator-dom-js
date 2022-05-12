let bill = document.getElementById('bill');
let select = document.getElementById('select');
let number = document.getElementById('number');
let btn = document.getElementById('button');
let results = document.getElementById('results');
let amount = document.getElementById('amount');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let newBill = bill.value;
    let option = select.value;
    let tip = newBill * option;
    let split = tip / number.value;
    if(newBill === '') {
        alert('Please enter a value!');
    }
    else {
        amount.innerHTML = '$ ' + split.toFixed(2);
        results.style.display = 'block';
    }
});