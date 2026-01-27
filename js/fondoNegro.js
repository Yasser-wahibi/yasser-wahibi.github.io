document.addEventListener("DOMContentLoaded", () => {
    // 1. Selección de elementos
    let color = document.getElementById("color");
    let icono = document.getElementsByClassName("fa-solid")[0]; // Seleccionamos por la clase base
    let secciones = document.querySelectorAll("section");
    let article = document.querySelectorAll("article");
    let h2 = document.querySelectorAll("h2");
    let h3 = document.querySelectorAll("h3");
    let caption = document.querySelectorAll("caption");
    let label = document.querySelectorAll("label");
    

    const activarModoOscuro = () => {
        document.body.style.backgroundColor = "#2f2f2f";
        document.body.style.color = "white";
        color.textContent = "Blanco";
        
        icono.classList.remove("fa-moon");
        icono.classList.add("fa-sun");

        secciones.forEach(sec => {
            sec.style.backgroundColor = "#444";
            sec.style.color = "white";
        });
        
        article.forEach(art => {
            art.style.backgroundColor = "#444";
            art.style.color = "white";
        });
        
    
        label.forEach(lab => lab.style.color = "white"); 
        
        h2.forEach(heading => heading.style.color = "white");
        h3.forEach(heading => heading.style.color = "white");

        localStorage.setItem("tema", "oscuro");
    };

    const activarModoClaro = () => {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        color.textContent = "Negro";

        icono.classList.remove("fa-sun");
        icono.classList.add("fa-moon");

        label.forEach(lab => lab.style.color = "black");
        secciones.forEach(sec => {
            sec.style.backgroundColor = "white";
            sec.style.color = "black";
        });
        article.forEach(art => {
            art.style.backgroundColor = "white";
            art.style.color = "black";
        });
        caption.forEach(cap => cap.style.color = "black"); 
        h2.forEach(heading => heading.style.color = "black");
        h3.forEach(heading => heading.style.color = "black");

        localStorage.setItem("tema", "claro");
    };

    
    if (localStorage.getItem("tema") === "oscuro") {
        activarModoOscuro();
    } else {
        
    }

    color.addEventListener("click", (event) => {
        event.preventDefault();

        if (localStorage.getItem("tema") === "oscuro") {
            activarModoClaro();
        } else {
            activarModoOscuro();
        }
    });
});



