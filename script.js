function fuelCount() {
  var distance = parseFloat(document.getElementById("distance").value);
  var consumption = parseFloat(document.getElementById("consumption").value);
  var fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
  if (!isNaN(distance) && !isNaN(consumption) && !isNaN(fuelPrice)) {
    var summ = Math.round((distance / 100) * consumption * fuelPrice);
    document.getElementById("result").innerHTML =
      "Стоимость топлива: " + summ + " денег";
  } else {
    document.getElementById("result").innerHTML = "Я понимаю только числа";
  }
}
