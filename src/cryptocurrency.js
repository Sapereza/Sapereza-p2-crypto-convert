var cryptoType = document.getElementById("cryptoType");
var nameOfBitcoin = document.getElementById("nameOfBitcoin");
var money = document.getElementById("money");
var nameOfWorldCurrency = document.getElementById("nameOfWorldCurrency");


cryptoType.onchange = function(){
    nameOfBitcoin.innerHTML = [this.value];
}

money.onchange = function(){
    nameOfWorldCurrency.innerHTML = [this.value];
}