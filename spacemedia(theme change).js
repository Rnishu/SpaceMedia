function theme_change(){
    function randomInteger(min,max){
        return Math.floor(Math.random()*(max - min + 1)) + min;
    }
    function toggleTheme(value) {
        let sheets = document.getElementsByTagName('link');
        sheets[0].href = value;
    }
    function change(theme){
        let flag = theme;
        if(flag==1){
            toggleTheme("spacemedia(darkorange-orange).css");
        }else if(flag==2){
            toggleTheme("spacemedia(blue-darkblue).css");
        }else if(flag == 3){
            toggleTheme("spacemedia(darkpink-pink).css");
        }else if(flag == 4){
            toggleTheme("spacemedia(darkred-red).css");
        }else if(flag == 5){
            toggleTheme("spacemedia(darkgreen-green).css");
        }
    }
    change(randomInteger(1,5));
}