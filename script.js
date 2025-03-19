document.addEventListener("DOMContentLoaded", function () {
    // Obtém todos os links da navbar
    let navLinks = document.querySelectorAll(".nav-link");

    // Adiciona evento de clique a cada link
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Obtém o ID da seção clicada
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            // Esconde todas as seções
            document.querySelectorAll(".content-section").forEach(section => {
                section.classList.remove("active");
            });

            // Mostra apenas a seção clicada
            targetSection.classList.add("active");

            // Rolagem suave para a seção
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Ajusta a posição para não ficar colado ao topo
                behavior: "smooth"
            });
        });
    });

    // Exibir a primeira seção por padrão ao carregar a página
    document.querySelector(".content-section").classList.add("active");
});