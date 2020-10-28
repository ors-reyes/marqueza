let actual = 0;
    function mostrar(n){
        let img = document.getElementsByClassName("icon")        
        for(i = 0; i< img.length; i++){
            if(img[i].className.includes("actual")){
                img[i].className = img[i].className.replace("actual", "")
                break;
            }
        }
        actual = n;
        img[n].className += " actual"        
    }