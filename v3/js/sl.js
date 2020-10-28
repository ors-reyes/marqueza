let actual = 0;
let velocidad = 6000;
    function siguiente(){
        actual++;
        if(actual > 3){
            actual = 0;
        }
        mostrar(actual);
    }
    let play = setInterval("siguiente()", velocidad)
    function mostrar(n){
        clearInterval(play);
        play = null;
        let img = document.getElementsByClassName("icon")        
        for(i = 0; i< img.length; i++){
            if(img[i].className.includes("actual")){
                img[i].className = img[i].className.replace("actual", "")
                play = setInterval("siguiente()", velocidad)
                break;
            }
        }
        actual = n;
        img[n].className += " actual"        
    }

    


    