function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsius = parseInt(valor);
  var valorEmFahrenheit = (1.8 * valorEmCelsius + 32).toFixed(2);
  var valorEmKelvin = 273 + valorEmCelsius;

  var valorF = document.getElementById("resultadoFahrenheit");
  var resultadoFahrenheit =
    "A temperatura em Fahrenheit é de " + valorEmFahrenheit + "º";
  valorF.innerHTML = resultadoFahrenheit;

  var valorK = document.getElementById("resultadoKelvin");
  var resultadoKelvin = "A temperatura em Kelvin é de " + valorEmKelvin + "º";
  valorK.innerHTML = resultadoKelvin;
}