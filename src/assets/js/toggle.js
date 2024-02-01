function toggleStyle() {

    // Grab stylesheet by id and reference to its href
    var sheet = document.getElementById("styles");
    var name = sheet.getAttribute("href");

    // Swap the stylesheet
    if (name === "assets/css/mood1.css") {
        name = "assets/css/mood2.css";
    } else {
        name = "assets/css/mood1.css";
    }

    // Set and store the stylesheet
    sheet.setAttribute("href", name);
    localStorage.setItem("styles", name);
}

window.onload = function() {
    // Load theme from storage, or the default if one doesn't exist
    const name = localStorage.getItem("styles") || "assets/css/mood1.css";
    const sheet = document.getElementById("styles");
    sheet.setAttribute("href", name);
}
