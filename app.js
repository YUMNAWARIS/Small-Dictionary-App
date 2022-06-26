let form = document.forms['searchForm'];
form.addEventListener("submit", (e)=>{

    e.preventDefault();

            
    let main = document.querySelector(".main")
    main.querySelector("p").style.display = "none";
    
    if(document.querySelector(".uul")) {    document.querySelector(".uul").remove();}
    let val = form.querySelector("input[type='text']").value;
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    url += val

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onload = ()=>{
        let data = JSON.parse(xhr.responseText)[0].meanings[0].definitions;
        console.log(data);
        let meanings = []
        data.forEach((d)=>{
            let val = d.definition;
            meanings.push(val);            
        })

        let ul = document.createElement("ul");
        ul.classList.add("uul");
        meanings.forEach((mean)=>{
            let li = document.createElement("li");
            li.textContent = mean;
            ul.append(li);
        })
        main.append(ul)
        
    }

})