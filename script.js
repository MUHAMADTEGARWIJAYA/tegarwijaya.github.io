document.getElementById("banner-button").onclick = function() {
    document.getElementById("videoPopup").style.display = "block";
};

document.getElementById("closePopup").onclick = function() {
    document.getElementById("videoPopup").style.display = "none";
};

// Close the popup when the user clicks anywhere outside of the popup content
window.onclick = function(event) {
    if (event.target == document.getElementById("videoPopup")) {
        document.getElementById("videoPopup").style.display = "none";
    }
};


window.onscroll = function() {
    var navbar = document.getElementById("hed"); // Pastikan id navbar sesuai

    if (window.scrollY > 50) {  // Sesuaikan nilai 50 sesuai dengan kebutuhanmu
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
};

