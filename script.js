function fuelCount() {
  var distance = parseFloat(document.getElementById("distance").value);
  var consumption = parseFloat(document.getElementById("consumption").value);
  var fuelPrice = parseFloat(document.getElementById("fuelPrice").value);

  var summ = Math.round((distance / 100) * consumption * fuelPrice);
  document.getElementById("result").innerHTML =
    "Стоимость топлива: " + summ + " денег";
}
