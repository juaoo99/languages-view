const menuItemImages = document.querySelectorAll(".menu-item");
const heroImage = document.querySelector(".hero-img");

menuItemImages.forEach((menuItemImage) => {
    menuItemImage.addEventListener("click", () => {
        if (!menuItemImage.classList.contains("active")) {
            const clickedImageSrc = menuItemImage.getAttribute("src");

            // Remover a classe 'active' de todas as imagens do menu
            menuItemImages.forEach((item) => item.classList.remove("active"));

            // Adicionar a classe 'active' na imagem clicada
            menuItemImage.classList.add("active");

            // Exibir a imagem principal (heroImage)
            heroImage.classList.remove("hidden");

            // Alterar o src da imagem principal após 500ms
            setTimeout(() => {
                heroImage.setAttribute("src", clickedImageSrc);
            }, 500);
        }
    });
});

heroImage.addEventListener("click", () => {
    // Esconder a imagem principal ao clicar
    heroImage.classList.add("hidden");

    // Remover a classe 'active' de todas as imagens do menu
    menuItemImages.forEach((item) => item.classList.remove("active"));
});
