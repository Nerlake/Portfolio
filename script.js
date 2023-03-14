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
    const presentationHeight = document.querySelector("#presentation").offsetTop;
    const projetsHeight = document.querySelector("#projets").offsetTop;
    const contactHeight = document.querySelector("#contact").offsetTop;
    const headerList = document.querySelectorAll(".header_list_item");

    //hauteur en pixel de la class competence


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
        if (window.scrollY > contactHeight - navbarHeight - 1) {
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


