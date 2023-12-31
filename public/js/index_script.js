function toggleMenu() {
    var subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu");
}

function switchUserNone(){
    const div = document.querySelector("#userIntro");
    const div1 = document.querySelector("#user-menu-intro");
    const img = document.querySelector("#user-pic-id")
    div.innerText = "Sign in";
    div1.innerText = "Guest";
    img.src = "images/blank_user.webp";
    const link = document.querySelector("#user-page-link");
    link.href = "register.html";
}

function toggleEditProfile(){
    toggleMenu();
    var overlay = document.getElementById("overlay");
    var divEditProfile = document.getElementById("edit-profile");

    if(divEditProfile.style.display === "none"){
        overlay.style.display = "grid";
        divEditProfile.style.display = "flex";
    }
}

function closeEdit(){
    var overlay = document.getElementById("overlay");
    var divEditProfile = document.getElementById("edit-profile");

    if(divEditProfile.style.display !== "none"){
        overlay.style.display = "none";
        divEditProfile.style.display = "none";
    }
}
