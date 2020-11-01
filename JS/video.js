let max, media, reproduir, barra, progres, silenciar, volum, bucle;

function iniciar(){
    max = 400;
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

function canviar(){
    if(!media.paused && !media.ended){
        media.pause();
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
        let mida = parseInt(media.currentTime * max / media.duration);
        progres.style.width = mida + 'px';
    }else{
        progres.style.width = '0px';
        reproduir.innerHTML = '>';
        clearInterval(bucle);
    }
}

function moure(e){
    if(!media.paused && !media.ended){
        let cursorX = e.pageX - barra.offsetLeft;
        let nouTemps = cursorX * media.duration / max;
        media.currentTime = nouTemps;
        progres.style.width = cursorX + 'px';
    }
}

function so(){
    if(silenciar.value == 'Silenciat'){
        media.muted = true;
        silenciar.value = 'Audio';
    }else{
        media.muted = false;
        silenciar.value = 'Silenciat';
    }
}

function nivell(){
    media.volum = volum.value;
}

window.addEventListener("load", iniciar, true);