document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".animated-image");

    images.forEach(img => {
        setInterval(() => {
            img.style.transform = `scale(${1 + Math.random() * 0.2}) rotate(${(Math.random() - 0.5) * 10}deg)`;
        }, 3000);
    });
});
