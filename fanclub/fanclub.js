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

//fanHamburgerMenu
const fanHbgBtn = document.getElementById("fanHamburger");
const fanHbgMenu = document.getElementById("fanHamburgerMenu");

fanHbgBtn.addEventListener("click", function() {
    fanHbgBtn.classList.toggle("open");
    fanHbgMenu.classList.toggle("active");
});

document.querySelectorAll('.fanHamburgerMenu a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.transition = 'transform 1.2s ease-in-out';
        this.style.transform = 'rotateY(360deg)';
    });

    link.addEventListener('mouseout', function() {
        this.style.transition = 'none';
        this.style.transform = 'rotateY(0deg)';
    });
})