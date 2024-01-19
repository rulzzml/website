const popupScreen = document.querySelector(".popup-screen");
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".close-btn");

    window.addEventListener("load", () => {
        setTimeout(() => {
            popupScreen.classList.add("active");
        }, 4000);
    });

closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active");

    document.cookie = "RulzzML - Website=PersonalWeb; max-age=" + 24 * 60 *60;
});


const WebsiteCookie = document.cookie.indexOf("RulzzML - Website");

if(
    WebsiteCookie != -1){
        popupScreen.style.display = "none";
    }
    else{
        popupScreen.style.display = "flex";
    }
