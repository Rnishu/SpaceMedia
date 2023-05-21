
function theme_change(){
    
    function randomInteger(min,max){
        return Math.floor(Math.random()*(max - min + 1)) + min;
    }
    let flag = randomInteger(1,5);
    const classCollection = document.getElementsByClassName("navbar");
    const tagCollection1 = document.getElementsByTagName("h1");
    const tagCollection2 =  document.getElementsByTagName("h2");
    function change(theme){
        if(theme == 1){
            document.body.style.backgroundColor = "rgb(255, 229, 159)";
            for(i=0;i<classCollection.length;i++){
                classCollection[i].style.color = "rgb(255, 76, 0)";
            }
            for(i=0;i<tagCollection2.length;i++){
                tagCollection2[i].style.color = "rgb(255, 30, 30)";
            }
            for(i=0;i<tagCollection1.length;i++){
                tagCollection1[i].style.color = "rgb(255, 30, 30)";
            }
        }else if(theme == 2){
            document.body.style.backgroundColor = "rgb(207, 255, 170)";
            for(i=0;i<classCollection.length;i++){
                classCollection[i].style.color = "rgb(3, 218, 0)";
            }
            for(i=0;i<tagCollection2.length;i++){
                tagCollection2[i].style.color = "rgb(29, 201, 72)";
            }
            for(i=0;i<tagCollection1.length;i++){
                tagCollection1[i].style.color = "rgb(29, 201, 72)";
            }
        }else if(theme == 3){
            document.body.style.backgroundColor = "rgb(155, 254, 246)";
            for(i=0;i<classCollection.length;i++){
                classCollection[i].style.color = "rgb(0, 125, 255)";
            }
            for(i=0;i<tagCollection2.length;i++){
                tagCollection2[i].style.color = "rgb(37, 50, 255)";
            }
            for(i=0;i<tagCollection1.length;i++){
                tagCollection1[i].style.color = "rgb(37, 50, 255)";
            }
        }else if(flag == 4){
            document.body.style.backgroundColor = "rgb(221, 169, 255)";
            for(i=0;i<classCollection.length;i++){
                classCollection[i].style.color = "rgb(136, 0, 255)";
            }
            for(i=0;i<tagCollection2.length;i++){
                tagCollection2[i].style.color = "rgb(216, 26, 255)";
            }
            for(i=0;i<tagCollection1.length;i++){
                tagCollection1[i].style.color = "rgb(216, 26, 255)";
            }
        }else{
            document.body.style.backgroundColor = "rgb(9, 6, 44)";
            for(i=0;i<classCollection.length;i++){
                classCollection[i].style.color = "rgb(255, 255, 255)";
            }
            for(i=0;i<tagCollection2.length;i++){
                tagCollection2[i].style.color = "rgb(144, 220, 255)";
            }
            for(i=0;i<tagCollection1.length;i++){
                tagCollection1[i].style.color = "rgb(255, 255, 255)";
            } 
        }
    }
    change(flag);
    return 0;
}