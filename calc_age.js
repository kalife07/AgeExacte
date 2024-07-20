/*document.addEventListener("DOMContentLoaded", 
    function() { 
        let today = new Date(); 
        let yyyy = today.getFullYear(); 
        let mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based let dd = String(today.getDate()).padStart(2, '0'); let todayStr = `${yyyy}-${mm}-${dd}`; document.getElementById("birth-date").setAttribute("max", todayStr); });*/

        document.addEventListener("DOMContentLoaded", function() { 
            let today = new Date();
                let annee = today.getFullYear();
                let mois = String(today.getMonth() + 1).padStart(2, '0'); 
                let jour = String(today.getDate()).padStart(2, '0');
                //let jour = today.getDate();
                let heur = today.getHours();
                let min = today.getMinutes();
                let sec = today.getSeconds();
                let mill = today.getMilliseconds();
        
                
        
                let todayStr = `${annee}-${mois}-${jour}`;
                
                document.getElementById("birth-date").setAttribute("max", todayStr);
        });
                
        
                
        function transformation_date(date_debut, date_fin) {
            const date1 = new Date(date_debut.annee+"-"+date_debut.mois+"-"+date_debut.jour);
            let time_ms1 = date1.getTime();
            const date2 = new Date(date_fin.annee+"-"+date_fin.mois+"-"+date_fin.jour);
            let time_ms2 = date2.getTime();
            let diff = time_ms1 - time_ms2;
        
            //let diffDiv = document.getElementById('diff').innerHTML;
        
            return diff;
        }
        
                function diff(date_naissance, date_auj) {
                    diff_tot_mill = date_auj-date_naissance
                    /*let diff_annees = date_auj.getFullYear() - date_naissance.getFullYear();
                    let diff_mois = date_auj.getMonth() - date_naissance.getMonth();
                    let diff_jours = date_auj.getDate() - date_naissance.getDate();
                    let diff_heures = date_auj.getHours() - date_naissance.getHours();
                    let diff_min = date_auj.getMinutes() - date_naissance.getMinutes();
                    let diff_sec = date_auj.getSeconds() - date_naissance.getSeconds();
                    let diff_mill = date_auj.getMilliseconds() - date_naissance.getMilliseconds();*/
                    console.log(date_auj);
                    console.log(date_naissance);
                    //return [diff_annees, diff_mois, diff_jours, diff_heures, diff_min, diff_sec, diff_mill];
                    console.log(diff_tot_mill);
                    return diff_tot_mill;
                }

                function conversion_ms(ms,diff_txt) {
                    const msParJour = 24*60*60*1000;
                    const msParMois = msParJour*30.44;
                    const msParAnnee = msParJour*365.25;
                    const msPerSecond = 1000; 
                    /*const msPerMinute = msPerSecond * 60; 
                    const msPerHour = msPerMinute * 60; 
                    const msPerDay = msPerHour * 24;*/

                    const diffAnnee = Math.floor(ms/msParAnnee);
                    const anneeRestante = ms%msParAnnee;
                    const diffMois = Math.floor(anneeRestante/msParMois);
                    const moisRestante = ms%msParMois;
                    const diffJour = Math.floor(moisRestante/msParJour);
                    const jourRestante = ms%msParJour;
                    diff_txt.textContent = `La difference est ${diffAnnee} annees, ${diffMois} mois et ${diffJour} jours.`;
                }
                
                function show_date() {
                    let today_str = new Date();
                    let today = today_str.getTime();
                    let date_naissance = document.getElementById("birth-date").value;
                    const date_naissance_str = new Date(date_naissance + "T00:00:00");
                    let date_naisance_ms = date_naissance_str.getTime();
                    let display_annee = document.getElementById("text_date");
                    display_annee.textContent = "Date choisie: " + date_naisance_ms;
                    let date_auj = document.getElementById("date_auj");
                    date_auj.textContent = "Date d'aujourd'hui: " + today
                    let diff_dates = diff(date_naisance_ms, today);
                    console.log(diff_dates);
                    let date_diff_text = document.getElementById("diff");
                    //date_diff_text.textContent = `Différence: ${diff_dates[0]} ans, ${diff_dates[1]} mois, ${diff_dates[2]} jours, ${diff_dates[3]} heures, ${diff_dates[4]} minutes, ${diff_dates[5]} secondes, ${diff_dates[6]} millisecondes`;
                    //date_diff_text.textContent = "Difference:"+ diff_dates;
                    conversion_ms(diff_dates, date_diff_text);
                    console.log(document.getElementById("birth-date").value);
                }
                
                
                