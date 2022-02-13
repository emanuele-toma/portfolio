'using strict';

var listaProgetti;
var insideSearch = false;

(async () => {

    await fetch('./progetti.json')
        .then(response => response.json())
        .then(out => { listaProgetti = out });

    for(let idProgetto in listaProgetti) {
        var progetto = listaProgetti[idProgetto]; 
        var elemento = createCard(progetto.title, progetto.views, progetto.date, progetto.thumbnail, progetto.icon, false);
        var container = document.querySelector(".content");

        container.insertBefore(elemento, container.children[container.children.length-4]);
    }
})();

function createCard(title, views, date, thumbnail, icon, animations=true) {
    var newDiv = document.createElement('div');
    date = convertToTimeSpan(Date.now() - stringToDate(date));
    newDiv.innerHTML =
    `
    <img class="tmp" src="${thumbnail}" width="368px" height="207px">
    <div class="under-card">
        <div class="icona">
            <img src="${icon}" height="48px" width="48px">
        </div>
        <div class="testo">
            <h4>${title}</h4>
            <span class="sottotitolo">${views} visualizzazioni • ${date}</span>
        </div>
    </div>
    `;
    newDiv.classList.add('card');

    if(animations)
        newDiv.classList.add('animate__animated', 'animate__zoomIn', 'animate__faster')

    return newDiv;
}

function cerca() {
    const input = document.querySelector("#txt-cerca").value;
    if(!insideSearch && input == "") return;

    if(input == "" && insideSearch) {
        insideSearch = false;

        var icona = document.querySelector(".fas.fa-times");
        icona.classList.remove("fa-times");
        icona.classList.add("fa-search");

        clearCards();
        for(let idProgetto in listaProgetti) {
            var progetto = listaProgetti[idProgetto]; 
            var elemento = createCard(progetto.title, progetto.views, progetto.date, progetto.thumbnail, progetto.icon);
            var container = document.querySelector(".content");
    
            container.insertBefore(elemento, container.children[container.children.length-4]);
        }
        return;
    }

    insideSearch = true;
    var icona = document.querySelector(".fas.fa-search");
    icona.classList.remove("fa-search");
    icona.classList.add("fa-times");


    const options = {
        keys: [
            "title"
        ]
    }
    
    const fuse = new Fuse(listaProgetti, options);
    const risultati = fuse.search(input);

    clearCards();

    for(let idProgetto in risultati) {
        var progetto = risultati[idProgetto].item;
        var elemento = createCard(progetto.title, progetto.views, progetto.date, progetto.thumbnail, progetto.icon);
        var container = document.querySelector(".content");

        container.insertBefore(elemento, container.children[container.children.length-4]);
    }

    document.querySelector("#txt-cerca").value = "";
}

function btn_update() {
    if(document.querySelector("#txt-cerca").value.length == 0 && insideSearch) {
        var icona = document.querySelector(".fas.fa-search");
        if(!icona) return;
        icona.classList.remove("fa-search");
        icona.classList.add("fa-times");
    } else {
        var icona = document.querySelector(".fas.fa-times");
        if(!icona) return;
        icona.classList.remove("fa-times");
        icona.classList.add("fa-search");
    }
}

function convertToTimeSpan(date) {
    date = Math.round(date / 1000)

    if(date < 60)
        return date == 1 ? date + " secondo fa" : date + " secondi fa";

    date = Math.round(date / 60)
    if(date < 60)
        return date == 1 ? date + " minuto fa" : date + " minuti fa";

    date = Math.round(date / 60)
    if(date < 24)
        return date == 1 ? date + " ora fa" : date + " ore fa";

    date = Math.round(date / 24)
    if(date < 7)
        return date == 1 ? date + " giorno fa" : date + " giorni fa";

    date = Math.round(date / 7)
    if(date < 4)
        return date == 1 ? date + " settimana fa" : date + " settimane fa";

    date = Math.round(date / 4)
    if(date < 12)
        return date == 1 ? date + " mese fa" : date + " mesi fa";

    date = Math.round(date / 12)

    return date == 1 ? date + " anno fa" : date + " anni fa";

}

function clearCards() {
    document.querySelectorAll(".card").forEach(x => {x.parentNode.removeChild(x)})
}

function btn_enter(e) {
    if(e.key == "Enter") {
        document.querySelector(".btn-cerca").click();
    }
}

function stringToDate(str) {

    const day = str.split('/')[0];
    const month = str.split('/')[1];
    const year = str.split('/')[2].split(' ')[0];

    const time = str.split(' ')[1];
    const hour = time.split(':')[0];
    const minutes = time.split(':')[1];

    return new Date(year, month-1, day, hour-1, minutes)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}