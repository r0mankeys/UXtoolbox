const loadingPage = document.getElementById("loading");
const mainPage = document.getElementById("main");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loadingPage.style.display = "none";
        mainPage.style.display = "flex";
    }, 3000);
});
