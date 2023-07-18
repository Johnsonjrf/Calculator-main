const themeContainer = document.querySelector(".switch")
const themeSwitcher = document.querySelector(".switcher")
let paddingValue = 0

themeSwitcher.addEventListener("click", () => {
    if (paddingValue === 0) {
        paddingValue = 18;
        themeContainer.style.paddingLeft = paddingValue + "px"
        document.body.classList.add("theme2")
    } else if (paddingValue === 18){
        paddingValue = 36;
        document.body.classList.remove("theme2")
        themeContainer.style.paddingLeft = paddingValue + "px"
        document.body.classList.add("theme3")
        
    } else if (paddingValue === 36) {
        paddingValue = 0;
        document.body.classList.remove("theme3")
        themeContainer.style.paddingLeft = paddingValue
    }

    
    
    
    // if(themeContainer.style.paddingLeft = "36px") {
    //     
    // }
})