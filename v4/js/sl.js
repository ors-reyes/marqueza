let slPosicion = 0,
    slVelocidad = 12000,
    slPlay = setInterval("siguiente()", slVelocidad),
    slSvg = document.getElementsByClassName("svgIcon"),
    imgSl = document.getElementsByClassName("imgSl")
siguiente = () => {
    slPosicion++;
    if(slPosicion > slSvg.length-1) slPosicion = 0;
    mostrar(slPosicion);
}
mostrar = (n) => {
    clearInterval(slPlay);
    slPlay = null;

    for( let slItem in slSvg){
        if(slSvg[slItem].className.includes("slActual")){
            
            // slSvg[slItem].className = slSvg[slItem].className.replace("slActual", "")

            setTimeout(function(){ 
                slSvg[slItem].className = slSvg[slItem].className.replace("slActual", "")
             }, 500);

            imgSl[slItem].className = imgSl[slItem].className.replace("imgActual", "")
            
            slPlay = setInterval("siguiente()", slVelocidad)            
            break
        }
    }
    slPosicion = n;
    setTimeout(function(){ 
        slSvg[n].className += " slActual"        
     }, 500);
    imgSl[n].className += " imgActual"
}