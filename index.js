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

//HamburgerMenu
const hbgBtn = document.getElementById("Hamburger");
const menuLeft = document.getElementById("hbgLeftMenu"); 
const menuRight = document.getElementById("hbgRightMenu"); 

hbgBtn.addEventListener("click", function() {
    menuLeft.classList.toggle("active");
    menuRight.classList.toggle("active");
    hbgBtn.classList.toggle("open");
});

document.querySelectorAll('.hbgRightMenu a, .hbgLeftMenu a, .footer a, .leftSide a').forEach(link => {
    
    link.addEventListener('mouseover' , function() {
        this.style.transition = 'transform 1.2s ease-in-out';
        this.style.transform = 'rotateY(360deg)';
    });

    link.addEventListener('mouseout' , function() {
        this.style.transition = 'none';
        this.style.transform = 'rotateY(0deg)';
    });
})
