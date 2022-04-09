let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#switch-shadow");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
}

if (darkMode == 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
})


//const $checkbox = document.querySelector('#switch-shadow')

//$checkbox.addEventListener('change', function(){
//    $html.classList.toggle('dark-mode')
//})