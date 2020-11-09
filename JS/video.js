let max, media, reproduir, barra, progres, silenciar, volum, bucle; //Variables declarades globalment per a poder accedir des de qualsevol part del codi.
 
function iniciar(){ //Funció que serà executada quan document hagi sigut carregat per complet.
    max = 400; //Variable amb valor tamany màxim barra de progrés en px
    media = document.getElementById('media');
    reproduir = document.getElementById('reproduir');
    barra = document.getElementById('barra');
    progres = document.getElementById('progres');
    silenciar = document.getElementById('silenciar');
    volum = document.getElementById('volum');

    reproduir.addEventListener('click',canviar);
    silenciar.addEventListener('click',so);
    barra.addEventListener('click',moure);
    volum.addEventListener('change',nivell);
}

function canviar(){ //Executa mètodes especial play i pause. Aquests mètodes es troben per defecte a HTML5.
    if(!media.paused && !media.ended){ //Si valor d'aquests es false, video reproduint .
        media.pause(); //True si pausat o encara no s'ha reproduit.
        reproduir.value = '>';
        clearInterval(bucle);
    }else{
        media.play();
        reproduir.value = 'Pausa';
        bucle = setInterval(estat,1000);
    }
}

function estat(){
    if(!media.ended){
        let mida = parseInt(media.currentTime * max / media.duration); //es calcula quant de llarga haura de ser barra de progres en pixels.
        progres.style.width = mida + 'px';
    }else{
        progres.style.width = '0px'; //si es true la barra de progres torna a 0px.
        reproduir.innerHTML = '>';
        clearInterval(bucle); //Es cancela el bucle amb clear interval
    }
}

function moure(e){
    if(!media.paused && !media.ended){
        let cursorX = e.pageX - barra.offsetLeft; //S'obté la posició exacta del punter del ratolí relatiu a la barra
        let nouTemps = cursorX * media.duration / max; //Temps en segons que la posició del punter del ratolí representa a la línia de temps del vídeo
        media.currentTime = nouTemps; //Es retorna temps actual en que el video està sent reproduit.
        progres.style.width = cursorX + 'px';
    }
}

function so(){ //Activa o desactiva l'audio depenent del valor de l'atribut value. 
    if(silenciar.value == 'Silenciat'){
        media.muted = true;
        silenciar.value = 'Audio';
    }else{
        media.muted = false;
        silenciar.value = 'Silenciat';
    }
}

function nivell(){
    media.volume = volum.value; //assigna valor atribut value de l'element input a propietat volume de media. Aquesta retorna valors entre 0.0 i 1.
}

window.addEventListener("load", iniciar, true); //Per a iniciar l'aplicació