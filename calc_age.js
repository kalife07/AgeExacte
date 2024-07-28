document.addEventListener("DOMContentLoaded", function() { 
    let today = new Date();
    let annee = today.getFullYear();
    let mois = String(today.getMonth() + 1).padStart(2, '0'); 
    let jour = String(today.getDate()).padStart(2, '0');
    let todayStr = `${annee}-${mois}-${jour}`;
    document.getElementById("birth-date").setAttribute("max", todayStr);
});

function transformation_date(date_debut, date_fin) {
    const date1 = new Date(date_debut.annee + "-" + date_debut.mois + "-" + date_debut.jour);
    let time_ms1 = date1.getTime();
    const date2 = new Date(date_fin.annee + "-" + date_fin.mois + "-" + date_fin.jour);
    let time_ms2 = date2.getTime();
    let diff = time_ms1 - time_ms2;
    return diff;
}

function diff(date_naissance, date_auj) {
    let diff_tot_mill = date_auj - date_naissance;
    return diff_tot_mill;
}

function conversion_ms(ms, diff_txt) {
    const msParJour = 24 * 60 * 60 * 1000;
    const msParMois = msParJour * 30.44;
    const msParAnnee = msParJour * 365.25;
    const msParHeur = 1000 * 60 * 60;
    const msParMinute = 1000 * 60;
    const msPerSecond = 1000;

    const diffAnnee = Math.floor(ms / msParAnnee);
    const anneeRestante = ms % msParAnnee;
    const diffMois = Math.floor(anneeRestante / msParMois);
    const moisRestante = ms % msParMois;
    const diffJour = Math.floor(moisRestante / msParJour);
    const jourRestante = ms % msParJour;
    const diffHeur = Math.floor(jourRestante / msParHeur);
    const heurRestante = ms % msParHeur;
    const diffMinute = Math.floor(heurRestante / msParMinute);
    const minuteRestante = ms % msParMinute;
    const diffSeconde = Math.floor(minuteRestante / msPerSecond);
    const secondeRestante = ms % msPerSecond;

    let min = String(diffMinute).padStart(2, '0');
    let sec = String(diffSeconde).padStart(2, '0');

    diff_txt.textContent = `La différence est ${diffAnnee} années, ${diffMois} mois, ${diffJour} jours, ${diffHeur} heures, ${min} minutes et ${sec} secondes.`;
}

function show_date() {
    let today_str = new Date();
    let today = today_str.getTime();
    let date_naissance = document.getElementById("birth-date").value;
    const date_naissance_str = new Date(date_naissance + "T00:00:00");
    let date_naissance_ms = date_naissance_str.getTime();
    let display_annee = document.getElementById("text_date");
    let date_auj = document.getElementById("date_auj");

    // Update the age difference every second
    setInterval(function() {
        let now = new Date();
        let diff_dates = diff(date_naissance_ms, now.getTime());
        let date_diff_text = document.getElementById("diff");
        conversion_ms(diff_dates, date_diff_text);
    }, 1000);
}




