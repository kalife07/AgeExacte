let today = new Date();
annee = today.getFullYear();
mois = today.getMonth();
jour = today.getDate();
heur = today.getHours();
min = today.getMinutes();
sec = today.getSeconds();
mill = today.getMilliseconds();
date_naissance = document.getElementById("birth-date").value;
//annee_debut = document.getElementById("");


function diff() {
    diff_annee = annee-date_debut

    //annee_debut = document.getElementById();
}

function show_date() {
    date_naissance = document.getElementById("birth-date").value;
    console.log(date_naissance);
    console.log("test");
    let display_annee = document.getElementById("text_date");
    display_annee.textContent = document.getElementById("birth-date").value;
}
console.log(document.getElementById("birth-date").value);
