//LoadingScreen
window.addEventListener("load", function() {
    const LoadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    content.classList.remove("hidden");

    setTimeout(function() {
        LoadingScreen.classList.add("loaded");

        setTimeout(function() {
            LoadingScreen.style.display = "none"
        },3000);

    },1000);
});