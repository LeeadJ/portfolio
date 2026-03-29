document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navListItems = document.getElementById('navListItems');

    menuToggle.addEventListener('click', function () {
        navListItems.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.navItem').forEach(function (item) {
        item.addEventListener('click', function () {
            navListItems.classList.remove('open');
        });
    });
});
