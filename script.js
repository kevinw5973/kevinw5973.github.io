let ownerName = "kevinw5973"
let userName = "kevinw5973";

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = Kevin Wang;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
