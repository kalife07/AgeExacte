/*document.addEventListener("DOMContentLoaded", 
    function() { 
        let today = new Date(); 
        let yyyy = today.getFullYear(); 
        let mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based let dd = String(today.getDate()).padStart(2, '0'); let todayStr = `${yyyy}-${mm}-${dd}`; document.getElementById("birth-date").setAttribute("max", todayStr); });*/

let today = new Date();
let annee = today.getFullYear();
let mois = today.getMonth();
let jour = today.getDate();
let heur = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let mill = today.getMilliseconds();

function diff(date_naissance, date_auj) {
    let diff_annees = date_auj.getFullYear() - date_naissance.getFullYear();
    let diff_mois = date_auj.getMonth() - date_naissance.getMonth();
    let diff_jours = date_auj.getDate() - date_naissance.getDate();
    let diff_heures = date_auj.getHours() - date_naissance.getHours();
    let diff_min = date_auj.getMinutes() - date_naissance.getMinutes();
    let diff_sec = date_auj.getSeconds() - date_naissance.getSeconds();
    let diff_mill = date_auj.getMilliseconds() - date_naissance.getMilliseconds();
    return [diff_annees, diff_mois, diff_jours, diff_heures, diff_min, diff_sec, diff_mill];
}

function show_date() {
    let date_naissance = document.getElementById("birth-date").value;
    const date_naissance_str = new Date(date_naissance + "T00:00:00");
    let display_annee = document.getElementById("text_date");
    display_annee.textContent = "Date choisie: " + date_naissance_str.toDateString();
    let date_auj = document.getElementById("date_auj");
    date_auj.textContent = "Date d'aujourd'hui: " + today.toDateString();
    let diff_dates = diff(date_naissance_str, today);
    console.log(diff_dates);
    let date_diff_text = document.getElementById("diff");
    date_diff_text.textContent = `Différence: ${diff_dates[0]} ans, ${diff_dates[1]} mois, ${diff_dates[2]} jours, ${diff_dates[3]} heures, ${diff_dates[4]} minutes, ${diff_dates[5]} secondes, ${diff_dates[6]} millisecondes`;
}

console.log(document.getElementById("birth-date").value);
