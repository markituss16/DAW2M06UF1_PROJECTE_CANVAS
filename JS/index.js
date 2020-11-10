window.onload = function imatge_manip(){
  let ej3 = document.getElementById('lienzo3');
  let ej1 = document.getElementById('lienzo1');
  ejercicio1(ej1);
  imatge_fons(ej3);
}


function calc() {

  let calculate = document.getElementById("inputfunc");

  let resultado = calculate.value;
//cbrt raiz cubica de un número logaritmo base 10, logaritmo base 2 
  let funcions_trigo = ['sin', 'cos', 'tan', 'sqrt', 'log10','cbrt','log2'];
  
  for(let i=0; i<funcions_trigo.length; i++){
    if(resultado.includes(funcions_trigo[i])){     
      resultado = resultado.replace(funcions_trigo[i], 'Math.' + funcions_trigo[i]);    
    }
  }

  ej2 = document.getElementById("lienzo2"); //Asigno a una variable el elemento del html que voy a usar
  lienzo2 = ej2.getContext("2d"); //Alisto el canvas para que funcione
  //aplicamos clear rect para limpiar el dibujo y luego hacemos un save para que al ahora de aplicar restore como veremos mas abajo
  //se limpie el canvas y se calcule el nuevo valor. 
  lienzo2.save();

  // this.lienzo2.beginPath(); // Pongo el lápiz
  this.lienzo2.beginPath();
  lienzo2.translate(300, 200);
  lienzo2.scale(10, 30);

  for (let x = -200; x <= this.ej2.width; x += 0.5) {
    lienzo2.strokeStyle = 'black';
    this.lienzo2.lineWidth = 0.08;
    let y = eval(resultado);
    this.lienzo2.lineTo(x, y);
  }
  this.lienzo2.stroke();
  
  //restaura el ultimo guardado del lienzo
  lienzo2.restore();
}

//AFEGIR LLEGENDA DINS DEL GRÀFIC
function afegirLlegenda() {
  lienzo2.font = "16px Verdana";
  var gradient = lienzo2.createLinearGradient(0,0,ej2.width,0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "red");  

  this.lienzo2.strokeStyle = gradient;
  lienzo2.strokeText(document.getElementById("inputfunc").value,450,60);
  this.lienzo2.restore();
}

//FUNCIÓ PER A ESBORRAR
function borrar() {
  lienzo2.clearRect(-200, -200, 1000, 1000);
  this.lienzo2.restore();
}


/****************INICI FUNCIÓ EJERCICIO1*********************/
function ejercicio1(ej1) {

  let tamany_cuadricula = 25;
  let x_eix_distancia_cuadricula_linies = 8;
  let y_eix_distancia_cuadricula_linies = 12;
  let x_eix_num_inicial = { number: 1, suffix: '' };
  let y_eix_num_inicial = { number: 1, suffix: '' };

  this.canvas = ej1; //Asigno a una variable el elemento del html que voy a usar
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

  //Faig un translate per a invertir la posició del canvas
  lienzo1.translate(y_eix_distancia_cuadricula_linies * tamany_cuadricula, x_eix_distancia_cuadricula_linies * tamany_cuadricula);

  //Per a afegir números a cada ralleta
  for (i = 1; i < (num_linies_y - y_eix_distancia_cuadricula_linies); i++) {
    lienzo1.beginPath();
    lienzo1.font = '10px Arial';
    lienzo1.textAlign = 'start';
    lienzo1.fillText(x_eix_num_inicial.number * i + x_eix_num_inicial.suffix, tamany_cuadricula * i - 3, 15);
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
    lienzo1.fillText(y_eix_num_inicial.number * i + y_eix_num_inicial.suffix, 14, -tamany_cuadricula * i + 3);
  }
}

/************FI de la funció ejercicio1*************************/

//Blanco y negro
function bn() {
  if (document.getElementById('cbox1').checked) {
    lienzo2.save();
    lienzo2.strokeStyle = 'black';
    lienzo2.lineWidth = 2.5;
    lienzo2.stroke();
  } else {
    lienzo2.strokeStyle != 'black';
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
  } else if (azul.checked == true) {
    lienzo2.strokeStyle = 'blue';
    lienzo2.lineWidth = 2;
    lienzo2.stroke();
  } else if (rojo.checked == true) {
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
  } else if (discontinua.checked == true) {
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
  } else if (media.checked == true) {
    lienzo2.clearRect(-200, -200, 1000, 1000);
    lienzo2.lineWidth = 2;
    lienzo2.stroke();
  } else if (fina.checked == true) {
    lienzo2.clearRect(-200, -200, 1000, 1000);
    lienzo2.lineWidth = 1;
    lienzo2.stroke();
  }
}

//Per a descarregar la imatge
  download_img = function(download) {
    let image = ej2.toDataURL("image/jpg");   
    download.href = image;    
  };  
  


//IMATGE DE FONS
function imatge_fons(ej3){
  var imatge = new Image();
  imatge.src = "/IMATGES/fondo_canvas.jpg";

  this.canvas = ej3; 
  lienzo3 = ej3.getContext("2d");

  imatge.onload = function() {
	  lienzo3.drawImage(imatge, 0,0);
  };

  var original = function() {
    lienzo3.drawImage(imatge, 0, 0);
  };
  
  var invert = function() {
    lienzo3.drawImage(imatge, 0, 0);
    const imageData = lienzo3.getImageData(0, 0, ej3.width, ej3.height);
    const data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    lienzo3.putImageData(imageData, 0, 0);
  };
  
  var grayscale = function() {
    lienzo3.drawImage(imatge, 0, 0);
    const imageData = lienzo3.getImageData(0, 0, ej3.width, ej3.height);
    const data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    lienzo3.putImageData(imageData, 0, 0);
  };
  
  const inputs = document.querySelectorAll('[name=color]');
  for (const input of inputs) {
    input.addEventListener("change", function(evt) {
      switch (evt.target.value) {
        case "inverted":
          return invert();
        case "grayscale":
          return grayscale();
        default:
          return original();
      }
    });
  }
}