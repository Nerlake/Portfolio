// event listener qui detecte si l'utilisateur est en haut de la page
// window.addEventListener('scroll', function () {
//     if (window.scrollY > 20) {
//         document.querySelector('.header').style.backgroundColor = '#000000';
//         document.querySelector('.header').style.boxShadow = "-1px 4px 15px -6px black";
//     } else {
//         // change le background de la classe .header en bleu
//         document.querySelector('.header').style.backgroundColor = "rgba(0, 0, 0, 0)";
//         document.querySelector('.header').style.boxShadow = "none";
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const progressbar = document.querySelector(".progress");
    const navbar = document.querySelector(".header");
    //hauteur de la navbar
    const navbarHeight = navbar.offsetHeight;
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const competenceHeight = document.querySelector("#competences").offsetTop;
    const presentationHeight = document.querySelector(".presentation_container").offsetTop;
    const projetsHeight = document.querySelector("#projets").offsetTop;
    const contactHeight = document.querySelector("#contact").offsetTop;
    const headerList = document.querySelectorAll(".header_list_item");
    const hmbgList = document.querySelectorAll(".hamburger_list_item");


    function isScrolledToBottom() {
        // hauteur totale de la page
        const pageHeight = document.documentElement.scrollHeight;
        // position verticale actuelle de la fenêtre de visualisation
        const scrollPosition = window.innerHeight + window.pageYOffset;
        // vérifie si la position verticale actuelle est proche de la hauteur totale de la page
        return Math.abs(pageHeight - scrollPosition) < 1;
    }

    function openHamburger() {
        document.querySelector(".hamburger_container").style.display = "flex";
    }

    function closeHamburger() {
        document.querySelector(".hamburger_container").style.display = "none";
    }

    //event listener qui detecte si le button closeHamburger est cliqué
    document.querySelector("#closeHamburger").addEventListener("click", closeHamburger);
    //event listener qui detecte si le button openHamburger est cliqué
    document.querySelector("#openHamburger").addEventListener("click", openHamburger);

    // si j'appuie sur un button ayant la classe .hamburger_list_item, je ferme le hamburger
    hmbgList.forEach((item) => {
        item.addEventListener("click", closeHamburger);
    });



    window.addEventListener('scroll', function () {
        if (window.scrollY > vh) {
            //change la couleur de la navbar en rouge
            navbar.style.position = "fixed";
        } else {
            navbar.style.position = "unset";
        }

        if (window.scrollY > presentationHeight - navbarHeight) {
            headerList[0].classList.add("active_item");
            headerList[1].classList.remove("active_item");
            headerList[2].classList.remove("active_item");
            headerList[3].classList.remove("active_item");
        }
        if (window.scrollY > competenceHeight - navbarHeight) {
            headerList[0].classList.remove("active_item");
            headerList[1].classList.add("active_item");
            headerList[2].classList.remove("active_item");
            headerList[3].classList.remove("active_item");
        }
        if (window.scrollY > projetsHeight - navbarHeight) {
            headerList[0].classList.remove("active_item");
            headerList[1].classList.remove("active_item");
            headerList[2].classList.add("active_item");
            headerList[3].classList.remove("active_item");
        }
        if (isScrolledToBottom()) {
            headerList[0].classList.remove("active_item");
            headerList[1].classList.remove("active_item");
            headerList[2].classList.remove("active_item");
            headerList[3].classList.add("active_item");
        }




        if (window.scrollY > competenceHeight - vh / 2) {
            document.querySelector("#html").style.width = "90%";
            document.querySelector("#css").style.width = "90%";
            document.querySelector("#javascript").style.width = "80%";
            document.querySelector("#react").style.width = "90%";
            document.querySelector("#csharp").style.width = "60%";
            document.querySelector("#java").style.width = "50%";
            document.querySelector("#php").style.width = "70%";
            document.querySelector("#python").style.width = "50%";
            document.querySelector("#wordpress").style.width = "70%";
            document.querySelector("#sql").style.width = "80%";
            document.querySelector("#nodejs").style.width = "70%";
        }
    });
});


