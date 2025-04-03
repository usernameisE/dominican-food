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
