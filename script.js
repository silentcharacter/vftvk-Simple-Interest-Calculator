function compute()
{
    let amount = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let years = Number(document.getElementById("years").value);
    let resultDiv = document.getElementById("result");

    if (!amount || amount <= 0) {
        alert('Please enter a positive number')
        document.getElementById("principal").focus();
        return
    }

    let result = years * amount * rate / 100;

    resultDiv.innerHTML = 'If you deposit <span>' + amount + '</span>,<br/>' + 'at an interest rate of <span>' + rate + '%</span>.<br/>' +
        'You will receive an amount of <span>' + result + '</span>,<br/>' + 'in the year <span>' + (new Date().getFullYear() + years) + '</span>';
}

function onRateChange() {
    let rate = document.getElementById("rate").value;
    document.getElementById("rateValue").textContent = rate + '%';
}
