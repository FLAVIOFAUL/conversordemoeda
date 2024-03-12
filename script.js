const convertButton = document.querySelector(".convert-button");
const currencySelect = document.getElementById("currency-select");
const inputCurrencyValue = document.getElementById("input-real");
const realValueText = document.getElementById("real-value-text");
const currencyValueText = document.getElementById("currency-value-text");
const currencyImage = document.getElementById("currency-img");
const currencyName = document.getElementById("currency-name");

function convertValues() {
    const inputValue = parseFloat(inputCurrencyValue.value.replace(',', '.'));
    let convertedValue;

    const dolarToday = 4.98;
    const euroToday = 5.44;
    const btcToday = 347.778; 

    if (currencySelect.value === "dolar") {
        convertedValue = inputValue / dolarToday;
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
        currencyImage.src = "assets/dolar.png";
        currencyName.innerHTML = "Dólar americano";
    }

    if (currencySelect.value === "euro") {
        convertedValue = inputValue / euroToday;
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
        currencyImage.src = "assets/euro.png";
        currencyName.innerHTML = "Euro";
    }

    if (currencySelect.value === "btc") {
        convertedValue = inputValue / btcToday;
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValue);
        currencyImage.src = "assets/bitcoin.png"; 
        currencyName.innerHTML = "Bitcoin";
    }

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue);
}

currencySelect.addEventListener("change", convertValues);
convertButton.addEventListener("click", convertValues);