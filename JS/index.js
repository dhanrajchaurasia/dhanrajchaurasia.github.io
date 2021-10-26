var sun = document.getElementById('sun');
var moon = document.getElementById('moon');
var bg = document.getElementsByClassName('area');
function changeTheme(e) {
    if (e === "light") {
        // Light Theme
        sun.style.display = 'none';
        moon.style.display = 'block';
        bg[0].style.background = "linear-gradient(to left bottom, #8C1F2F, #291F4C)";
    }
    else {
        // Dark Theme
        moon.style.display = 'none';
        sun.style.display = 'block';
        bg[0].style.background = "#1d1c1c";
    }
    console.log("Function Called");
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
