document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav .nav-page-ref"); // Все ссылки меню
    const currentUrl = window.location.pathname.split("/").pop(); // Текущий файл

    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        }
    });
});