// Open and close menu in mobile view

function openCloseMenu() {

    var navBar = document.getElementById("menuNav");
    var menuBtn = document.getElementById("icon");

    function toggleActive() {
        menuBtn.classList.toggle("active");
    }

    function openMenu() {
        navBar.style.height = "100%";
      }

    function closeMenu() {
        navBar.style.height = "0%";
      }

    function setDefaultBtn() {
        menuBtn.src = "./assets/images/hamburger.svg"
    }

    function setCloseBtn() {
        menuBtn.src = "./assets/images/hamburger-close.svg"
    }

    menuBtn.addEventListener("click", toggleActive());

        if (menuBtn.classList.contains("active")) {
            openMenu();
        } else {
            closeMenu();
        }
    }