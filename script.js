async function fetchData() {
    let response =await fetch("https://api.github.com/users?per_page=10");
        let data =await response.json();

        data.forEach((element) => {
          
           let a=document.createElement("a");
           a.textContent=element.login;
           a.setAttribute("href",element.html_url);
           let top=document.getElementById("div1");
         
           top.appendChild(a);
           top.appendChild(document.createElement("br"));
        });
    }
    