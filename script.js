const popupScreen = document.querySelector(".popup-screen");
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".close-btn");

    window.addEventListener("load", () => {
        setTimeout(() => {
            popupScreen.classList.add("active");
        }, 8000);
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

function notfound(){
    alert('Form belum bisa digunakan, akan kami update secepatnya. Versi saat ini 2.1.3')
};
