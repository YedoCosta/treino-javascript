function calcularDistancia(){
    
    const disTotal = 1492.56
    const disPercorrida = 900
    const disRestante = disTotal - disPercorrida;

    const gps={
        disTotal: 1492.56,
        disPercorrida: 900,
        disRestante: disTotal - disPercorrida

    }

    document.getElementById("disTotal").innerHTML = disTotal;
    document.getElementById("disPercorrida").innerHTML = disPercorrida;
    document.getElementById("disRestante").innerHTML = disRestante;

    document.getElementById("disTotal").innerHTML = gps.disTotal;
    document.getElementById("disPercorrida").innerHTML = gps.disPercorrida;
    document.getElementById("disRestante").innerHTML = gps.disRestante;

    /*
    <!DOCTYPE html>
<html>
<head>
  <title>Exemplo getElementById</title>
  <script>
  function mudarCor(novaCor) {
    var elemento = document.getElementById("para1");
    elemento.style.color = novaCor;
  }
  </script>
</head>
<body>
  <p id="para1">Algum texto de exemplo</p>
  <button onclick="mudarCor('blue');">Azul</button>
  <button onclick="mudarCor('red');">Vermelho</button>
</body>
</html>
    */
    }