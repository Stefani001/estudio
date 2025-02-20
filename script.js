document.addEventListener("DOMContentLoaded", function () {
    const artistas = document.querySelectorAll(".artista");
    const container = document.querySelector(".container");
    const artistasContainer = document.querySelector(".artistas-container"); // Adicionado

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        const containerTop = artistasContainer ? artistasContainer.getBoundingClientRect().top : 0;

        if (containerTop < triggerBottom) {
            artistasContainer.style.opacity = "1";
            artistasContainer.style.transform = "translateY(0)";

            artistas.forEach((artista, index) => {
                setTimeout(() => {
                    artista.style.opacity = "1";
                    artista.style.transform = "scale(1)";
                }, index * 300);
            });
        }
    }

    // Faz o texto de "Bem-Vindo" aparecer automaticamente ao carregar a página
    setTimeout(() => {
        container.classList.add("show");
    }, 500);

    // Ativa o efeito de rolagem para os artistas
    checkScroll();
    window.addEventListener("scroll", checkScroll);
})
    