function calc(){
  
        let calculate = document.getElementById("inputfunc");

        let resultado= calculate.value;

        let resultadoSin= resultado.toLowerCase().includes('sin');
        let resultadoCos= resultado.toLowerCase().includes('cos');
        let resultadoTan= resultado.toLowerCase().includes('tan');
        let resultadoSqrt= resultado.toLowerCase().includes('sqrt');


        if(resultadoSin) resultado=resultado.replace('sin','Math.sin'); //resultado en radianes. no grados
         if(resultadoCos) resultado=resultado.replace('cos','Math.cos');
        if(resultadoTan) resultado=resultado.replace('tan','Math.tan');
        if(resultadoSqrt)resultado=resultado.replace('sqrt','Math.sqrt');
         
     
        ej2=document.getElementById("lienzo2"); //Asigno a una variable el elemento del html que voy a usar
        lienzo2=ej2.getContext("2d"); //Alisto el canvas para que funcione
        //aplicamos clear rect para limpiar el dibujo y luego hacemos un save para que al ahora de aplicar restore como veremos mas abajo
        //se limpie el canvas y se calcule el nuevo valor. 
        
        //lienzo2.clearRect(-200, -200, 1000, 1000);        
        lienzo2.save();        
      //lienzo2.clearRect(-200, -200, this.ej2.width, this.ej2.height);
      
        lienzo2.strokeStyle = 'blue'; //Defino el color en hexagesimal
        this.lienzo2.lineWidth=0.3;
      
       // this.lienzo2.beginPath(); // Pongo el lápiz
       this.lienzo2.beginPath();
     
      // lienzo2.moveTo(0,300);
      lienzo2.translate(0, 200);
  
       lienzo2.scale(10, 30);
          
        for(let x = -200; x <= this.ej2.width; x += 0.5){ 
          
          let y=eval(resultado);
          this.lienzo2.lineTo(x,y);        
        }  
        this.lienzo2.lineWidth=0.1;
        this.lienzo2.stroke();
      
    //restaura el ultimo guardado del lienzo
 
    lienzo2.restore();
  
     //document.write(`${y}`);
}

function tipus_linia(){
  lienzo2.setLineDash([4,14]);
  lienzo2.beginPath();
  this.lienzo2.lineTo(x,y);
  this.lienzo.stroke();
}

function borrar(){ 
    lienzo2.clearRect(-200, -200, 1000, 1000);
     this.lienzo2.restore();
}

function dibuixarGruix(){
  //lienzo2.clearRect(-200,-200,1000,1000);
  lienzo2.lineWidth = document.gruix.linia.selectedIndex;
  this.lienzo2.beginPath();
  for(let x = -200; x <= this.ej2.width; x += 0.5){        
    let y=eval(resultado);
    this.lienzo2.lineTo(x,y); 
    this.lienzo2.closePath();     
    this.lienzo2.stroke();  
  }
}

function ejercicio1(){

    ej1=document.getElementById("lienzo1"); //Asigno a una variable el elemento del html que voy a usar
    lienzo1=ej1.getContext("2d"); //Alisto el canvas para que funcione
    lienzo1.lineWidth=1; //Defino el ancho de la linea en pixeles
    lienzo1.strokeStyle = '#000'; //Defino el color en hexagesimal
    
  //EJEX
    lienzo1.beginPath(); // Pongo el lápiz
    lienzo1.moveTo(300,400); // lo ubicó para iniciar el dibujo
    lienzo1.lineTo(300,0); // trazo la linea hasta este punto
    lienzo1.stroke(); // levanto el lápiz
    lienzo1.closePath(); // me alisto para realizar otra parte del dibujo
  //EJE Y  
    lienzo1.beginPath(); // Pongo el lápiz
    lienzo1.moveTo(0,200);// lo ubicó para iniciar el dibujo
    lienzo1.lineTo(600,200);// trazo la linea hasta este punto
    lienzo1.stroke();// levanto el lápiz
    lienzo1.closePath();// me alisto para realizar otra parte del dibujo

  //eje separacion 1
    for(let i=0;i<600;i+=25){  
 
      lienzo1.beginPath();
    lienzo1.moveTo(i,205);// lo ubicó para iniciar el dibujo //se tiene que cambiar el valor de 10
    lienzo1.lineTo(i,195);  // trazo la linea hasta este punto}
    lienzo1.stroke();// levanto el lápiz
    lienzo1.closePath();
  
  }// me alisto para realizar otra parte del dibujo
  
    //eje separacion 2 

    for(let j=0;j<400;j+=25){  
 
    lienzo1.beginPath();
    lienzo1.moveTo(305,j);// lo ubicó para iniciar el dibujo //se tiene que cambiar el valor de 10
    lienzo1.lineTo(295,j);  // trazo la linea hasta este punto}
    lienzo1.stroke();// levanto el lápiz
    lienzo1.closePath(); 
  }
    download_img = function(el) {
      let image = ej1.toDataURL("image/jpg");   
      el.href = image;    
    };       
} 
  
