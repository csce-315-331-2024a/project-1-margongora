function toggleStyle() {
    var sheet = document.getElementById("styles");
    var name = sheet.getAttribute("href");

    if (name === "assets/css/mood1.css") {
        name = "assets/css/mood2.css";
    } else {
        name = "assets/css/mood1.css";
    }

    sheet.setAttribute("href", name);

    localStorage.setItem("styles", name);
}

window.onload = function() {
    const name = localStorage.getItem("styles");
    const sheet = document.getElementById("styles");
    sheet.setAttribute("href", name);
}
