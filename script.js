function compute()
{
    let amount = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let years = Number(document.getElementById("years").value);
    let resultDiv = document.getElementById("result");

    let result = years * amount * rate / 100;

    resultDiv.innerHTML = 'If you deposit ' + amount + ',<br/>' + 'at an interest rate of ' + rate + '%.<br/>' +
        'You will receive an amount of ' + result + ',<br/>' + 'in the year ' + (new Date().getFullYear() + years);
}

function onRateChange() {
    let rate = document.getElementById("rate").value;
    document.getElementById("rateValue").textContent = rate + '%';
}
