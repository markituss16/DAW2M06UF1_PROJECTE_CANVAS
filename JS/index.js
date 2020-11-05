function calc() {

  let calculate = document.getElementById("inputfunc");

  let resultado = calculate.value;

  let resultadoSin = resultado.toLowerCase().includes('sin');
  let resultadoCos = resultado.toLowerCase().includes('cos');
  let resultadoTan = resultado.toLowerCase().includes('tan');
  let resultadoSqrt = resultado.toLowerCase().includes('sqrt');


  if (resultadoSin) resultado = resultado.replace('sin', 'Math.sin'); //resultado en radianes. no grados
  if (resultadoCos) resultado = resultado.replace('cos', 'Math.cos');
  if (resultadoTan) resultado = resultado.replace('tan', 'Math.tan');
  if (resultadoSqrt) resultado = resultado.replace('sqrt', 'Math.sqrt');


  ej2 = document.getElementById("lienzo2"); //Asigno a una variable el elemento del html que voy a usar
  lienzo2 = ej2.getContext("2d"); //Alisto el canvas para que funcione
  //aplicamos clear rect para limpiar el dibujo y luego hacemos un save para que al ahora de aplicar restore como veremos mas abajo
  //se limpie el canvas y se calcule el nuevo valor. 

  lienzo2.save();

  // this.lienzo2.beginPath(); // Pongo el lápiz
  this.lienzo2.beginPath();

  // lienzo2.moveTo(0,300);
  lienzo2.translate(0, 200);

  lienzo2.scale(10, 30);

  for (let x = -200; x <= this.ej2.width; x += 0.5) {
    lienzo2.strokeStyle = 'blue';
    this.lienzo2.lineWidth = 0.08;
    let y = eval(resultado);
    this.lienzo2.lineTo(x, y);
  }
  this.lienzo2.stroke();

  //restaura el ultimo guardado del lienzo
  lienzo2.restore();
}

function borrar() {
  lienzo2.clearRect(-200, -200, 1000, 1000);
  this.lienzo2.restore();
}

/****************INICI FUNCIÓ EJERCICIO1*********************/
function ejercicio1() {

  let tamany_cuadricula = 25;
  let x_eix_distancia_cuadricula_linies = 8;
  let y_eix_distancia_cuadricula_linies = 12;
  let x_eix_num_inicial = { number: 1, suffix: '' };
  let y_eix_num_inicial = { number: 1, suffix: '' };

  ej1 = document.getElementById("lienzo1"); //Asigno a una variable el elemento del html que voy a usar
  lienzo1 = ej1.getContext("2d"); //Alisto el canvas para que funcione
  lienzo1.lineWidth = 1; //Defino el ancho de la linea en pixeles
  lienzo1.strokeStyle = '#000'; //Defino el color en hexagesimal

  let canvas_amplada = ej1.width;
  let canvas_alçada = ej1.height;

  let num_linies_x = Math.floor(canvas_alçada / tamany_cuadricula);
  let num_linies_y = Math.floor(canvas_amplada / tamany_cuadricula);

  //EJEX
  //Aquest for fa totes les línies del eix X que tenen color gris.
  for (let i = 0; i <= num_linies_x; i++) {
    lienzo1.beginPath();
    lienzo1.lineWidth = 1;
    lienzo1.strokeStyle = "#e9e9e9";

    lienzo1.moveTo(0, tamany_cuadricula * i);
    lienzo1.lineTo(canvas_amplada, tamany_cuadricula * i);

    lienzo1.stroke();
  }

  //Això dibuixa la linia central negra
  lienzo1.strokeStyle = "#000000";
  lienzo1.beginPath(); // Pongo el lápiz
  lienzo1.moveTo(300, 400); // lo ubicó para iniciar el dibujo
  lienzo1.lineTo(300, 0); // trazo la linea hasta este punto
  lienzo1.stroke(); // levanto el lápiz
  lienzo1.closePath(); // me alisto para realizar otra parte del dibujo

  //EJE Y
  //Aquest for fa totes les línies del eix Y que tenen color gris.  
  for (let i = 0; i <= num_linies_y; i++) {
    lienzo1.beginPath();
    lienzo1.lineWidth = 1;
    lienzo1.strokeStyle = "#e9e9e9";

    lienzo1.moveTo(tamany_cuadricula * i, 0);
    lienzo1.lineTo(tamany_cuadricula * i, canvas_alçada);

    lienzo1.stroke();
  }

  //Això dibuixa la linia central negra
  lienzo1.strokeStyle = "#000000";
  lienzo1.beginPath(); // Pongo el lápiz
  lienzo1.moveTo(0, 200);// lo ubicó para iniciar el dibujo
  lienzo1.lineTo(600, 200);// trazo la linea hasta este punto
  lienzo1.stroke();// levanto el lápiz
  lienzo1.closePath();// me alisto para realizar otra parte del dibujo

  //eje separacion 1
  for (let i = 0; i < canvas_amplada; i += 25) {

    lienzo1.beginPath();
    lienzo1.moveTo(i, 205);// lo ubicó para iniciar el dibujo //se tiene que cambiar el valor de 10
    lienzo1.lineTo(i, 195);  // trazo la linea hasta este punto}
    lienzo1.stroke();// levanto el lápiz
    lienzo1.closePath();

  }// me alisto para realizar otra parte del dibujo

  //eje separacion 2 

  for (let j = 0; j < canvas_alçada; j += 25) {

    lienzo1.beginPath();
    lienzo1.moveTo(305, j);// lo ubicó para iniciar el dibujo //se tiene que cambiar el valor de 10
    lienzo1.lineTo(295, j);  // trazo la linea hasta este punto}
    lienzo1.stroke();// levanto el lápiz
    lienzo1.closePath();
  }

  //Per a descarregar la imatge
  /*let button = docuemnt.getElementById('descargar');
  button.addEventListener('click',function(e){
    let dataURL = canvas.toDataURL ('image/jpg');
    button.href = dataURL;
  });*/

  //Faig un translate per a invertir la posició del canvas
  lienzo1.translate(y_eix_distancia_cuadricula_linies * tamany_cuadricula, x_eix_distancia_cuadricula_linies * tamany_cuadricula);

  //Per a afegir números a cada ralleta
  for (i = 1; i < (num_linies_y - y_eix_distancia_cuadricula_linies); i++) {
    lienzo1.beginPath();
    lienzo1.font = '10px Arial';
    lienzo1.textAlign = 'start';
    lienzo1.fillText(x_eix_num_inicial.number * i + x_eix_num_inicial.suffix, tamany_cuadricula * i - 2, 15);
  }

  for (i = 1; i < y_eix_distancia_cuadricula_linies; i++) {
    lienzo1.beginPath();
    lienzo1.font = '10px Arial';
    lienzo1.textAlign = 'end';
    lienzo1.fillText(-x_eix_num_inicial.number * i + x_eix_num_inicial.suffix, -tamany_cuadricula * i + 3, 15);
  }

  for (i = 1; i < (num_linies_x - x_eix_distancia_cuadricula_linies); i++) {
    lienzo1.beginPath();
    lienzo1.font = '10px Arial';
    lienzo1.textAlign = 'start';
    lienzo1.fillText(-y_eix_num_inicial.number * i + y_eix_num_inicial.suffix, 8, tamany_cuadricula * i + 3);
  }

  for (i = 1; i < x_eix_distancia_cuadricula_linies; i++) {
    lienzo1.beginPath();
    lienzo1.font = '10px Arial';
    lienzo1.textAlign = 'end';
    lienzo1.fillText(y_eix_num_inicial.number * i + y_eix_num_inicial.suffix, 8, -tamany_cuadricula * i + 3);
  }

  /***************IMATGE MANIPULACIÓ BITS ************/
  let img = new Image();
  img.crossOrigin = 'anonymous';
  // img.src = './IMATGES/fondo_canvas.jpg';

  img.onload = function () {
    lienzo1.drawImage(img, 0, 0);
  }

  let original = function () {
    lienzo1.drawImage(img, 0, 0);
  }

  let invertir = function () {
    lienzo1.drawImage(img, 0, 0);
    const imageData = lienzo1.getImageData(0, 0, canvas_amplada, canvas_alçada);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; //vermell
      data[i + 1] = 255 - data[i + 1]; //verd
      data[i + 2] = 255 - data[i + 2]; //blau
    }
    lienzo1.putImageData(imageData, 0, 0);
  };

  let escala_grisos = function () {
    lienzo1.drawImage(img, 0, 0);
    const imageData = lienzo1.getImageData(0, 0, canvas_amplada, canvas_alçada);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; //vermell
      data[i + 1] = avg; //verd
      data[i + 2] = avg; //blau
    }
    lienzo1.putImageData(imageData, 0, 0);
  };

  const inputs = document.querySelectorAll('[name=color]');
  for (const input of inputs) {
    input.addEventListener("change", function (evt) {
      switch (evt.target.value) {
        case "invertit":
          return invertir();
        case "escala_grisos":
          return escala_grisos();
        default:
          return original();
      }
    });
  }

}/************FI de la funció ejercicio1*************************/


//Blanco y negro
function bn() {
  if (document.getElementById('cbox1').checked) {
    lienzo2.save();
    lienzo2.strokeStyle = 'black';
    lienzo2.lineWidth = 2.5;
    lienzo2.stroke();

    //alert('checkbox1 esta seleccionado');
  } else {
    //alert('checkbox1 no esta seleccionado');
    lienzo2.strokeStyle = 'blue';
    lienzo2.stroke();
  }
}

function seleccionacolor() {
  var verde = document.getElementById("verde");
  var azul = document.getElementById("azul");
  var rojo = document.getElementById("rojo");

  if (verde.checked == true) {
    lienzo2.strokeStyle = 'green';
    lienzo2.lineWidth = 2;
    lienzo2.stroke();
  }else if (azul.checked == true) {
    lienzo2.strokeStyle = 'blue';
    lienzo2.lineWidth = 2;
    lienzo2.stroke();
  }else if (rojo.checked == true) {
    lienzo2.strokeStyle = 'red';
    lienzo2.lineWidth = 2;
    lienzo2.stroke();
  }
}

function seleccionacontinuidad() {
  var continua = document.getElementById("continua");
  var discontinua = document.getElementById("discontinua");

  if (continua.checked == true) {
    lienzo2.clearRect(-200, -200, 1000, 1000);
    lienzo2.setLineDash([]);
    lienzo2.stroke();
  }else if (discontinua.checked == true) {
    lienzo2.clearRect(-200, -200, 1000, 1000);
    lienzo2.setLineDash([5, 5]);
    lienzo2.lineWidth = 2;
    lienzo2.stroke();
  }
}

function seleccionagrosor() {
  var gruesa = document.getElementById("grueso");
  var media = document.getElementById("media");
  var fina = document.getElementById("fina");

  if (gruesa.checked == true) {
    lienzo2.clearRect(-200, -200, 1000, 1000);
    lienzo2.lineWidth = 3;
    lienzo2.stroke();
  }else if (media.checked == true) {
    lienzo2.clearRect(-200, -200, 1000, 1000);
    lienzo2.lineWidth = 2;
    lienzo2.stroke();
  }else if (fina.checked == true) {
    lienzo2.clearRect(-200, -200, 1000, 1000);
    lienzo2.lineWidth = 1;
    lienzo2.stroke();
  }
}