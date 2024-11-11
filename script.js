async function fetchData(sortOrder = "default") {
    let response = await fetch("https://api.github.com/users?per_page=10");
    let data = await response.json();

    if (sortOrder === "alpha") {
        data.sort((a, b) => a.login.localeCompare(b.login));
    }

    const top = document.getElementById("div1");
    top.innerHTML = "";

    data.forEach((element) => {
        let a = document.createElement("a");
        a.textContent = element.login;
        a.setAttribute("href", element.html_url);
        top.appendChild(a);
        top.appendChild(document.createElement("br"));
    });
}

document.querySelector("select").addEventListener("change", (event) => {
    const sortOrder = event.target.value;
    fetchData(sortOrder); 
});

function logout() {
    window.location.href = "login.html";
}
