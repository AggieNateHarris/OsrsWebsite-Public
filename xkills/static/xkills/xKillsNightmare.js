// getKillNum retrieves the number entered by user into
// the input box where the desired kills is meant to be
// input
function getKillNum() {
    var num = document.getElementById("killNum").value;
    return num;
}

// updateTable is meant to select the dom element and
// update that element with the result of a function
// input string of dom name, function
function updateTable(domName, func, num) {
    var extractedNum = num();
    var result = func(extractedNum);
    for (item of domName) {
        var element = document.getElementById(item);
        element.innerText = result[item];
    }
}

function xNightmare(x) {

    if (x <= 10000 && x > 0) {
        var dict = {
            'nightmare':0, 'elite':0, 'jar':0, 'coins':0, 'staff':0, 'inqhelm':0, 'inqplate':0, 'inqskirt':0, 'inqmace':0, 'eldritch':0,
            'harmonised':0, 'volatile':0, 'addyarrow':0, 'runearrow':0, 'death':0, 'cosmic':0, 'nature':0, 'blood':0, 'soul':0, 'yewlogs':0,
            'magiclogs':0, 'goldore':0, 'coal':0, 'mithrilore':0, 'addyore':0, 'cadantine':0, 'torstol':0, 'emerald':0, 'ruby':0,
            'essence':0, 'shark':0, 'bass':0, 'ppot':0, 'sarabrew':0, 'zammybrew':0, 'sanfew':0
        }

        for (var i = 0; i < x; i++) {

            var armorRoll = Math.floor(Math.random() * 120);
            if (armorRoll == 1) {
                var armorRoll2 = Math.floor(Math.random() * 10)
                switch (true) {
                    case (armorRoll2 < 3):
                        dict["staff"]++;
                        break;
                    case (armorRoll2 > 2 && armorRoll2 < 5):
                        dict["inqhelm"]++;
                        break;
                    case (armorRoll2 > 4 && armorRoll2 < 7):
                        dict["inqplate"]++;
                        break;
                    case (armorRoll2 > 6 && armorRoll2 < 9):
                        dict["inqskirt"]++;
                        break;
                    case (armorRoll2 == 9):
                        dict["inqmace"]++;
                        break;
                }
            }

            var orbRoll = Math.floor(Math.random() * 600);
            if (orbRoll == 1) {
                switch (Math.floor(Math.random() * 3)) {
                    case 0:
                        dict["eldritch"]++;
                        break;
                    case 1:
                        dict["volatile"]++;
                        break;
                    case 2:
                        dict["harmonised"]++;
                        break;
                }
            }

            var petRoll = Math.floor(Math.random() * 800);
            if (petRoll == 1) dict["nightmare"]++;

            var jarRoll = Math.floor(Math.random() * 1900);
            if (jarRoll == 1) dict["jar"]++;

            var eliteRoll = Math.floor(Math.random() * 190);
            if (eliteRoll == 1) dict["elite"]++;

            var roll = Math.floor(Math.random() * 25000);
            if (roll < 1000) dict["cosmic"] += Math.floor(Math.random() * 204) + 15;
            else if (roll < 2000) dict["nature"] += Math.floor(Math.random() * 160) + 6;
            else if (roll < 3000) dict["death"] += Math.floor(Math.random() * 153) + 24;
            else if (roll < 4000) dict["blood"] += Math.floor(Math.random() * 117) + 13;
            else if (roll < 5000) dict["soul"] += Math.floor(Math.random() * 115) + 12;
            else if (roll < 5750) dict["addyarrow"] += Math.floor(Math.random() * 502) + 32;
            else if (roll < 6500) dict["runearrow"] += Math.floor(Math.random() * 528) + 12;
            else if (roll < 7500) dict["yewlogs"] += Math.floor(Math.random() * 108) + 14;
            else if (roll < 8500) dict["magiclogs"] += Math.floor(Math.random() * 53) + 3;
            else if (roll < 9500) dict["goldore"] += Math.floor(Math.random() * 161) + 14;
            else if (roll < 10500) dict["coal"] += Math.floor(Math.random() * 238) + 16;
            else if (roll < 11500) dict["mithrilore"] += Math.floor(Math.random() * 154) + 15;
            else if (roll < 12500) dict["addyore"] += Math.floor(Math.random() * 43) + 8;
            else if (roll < 13500) dict["cadantine"] += Math.floor(Math.random() * 14) + 1;
            else if (roll < 14500) dict["torstol"] += Math.floor(Math.random() * 16) + 1;
            else if (roll < 15250) dict["emerald"] += Math.floor(Math.random() * 41) + 1;
            else if (roll < 16000) dict["ruby"] += Math.floor(Math.random() * 34) + 2;
            else if (roll < 16500) dict["essence"] += Math.floor(Math.random() * 3781) + 420;
            else if (roll < 18000) dict["shark"] += Math.floor(Math.random() * 15) + 1;
            else if (roll < 19500) dict["bass"] += Math.floor(Math.random() * 18) + 1;
            else if (roll < 20750) dict["ppot"] += Math.floor(Math.random() * 10) + 1;
            else if (roll < 22000) dict["sarabrew"] += Math.floor(Math.random() * 10) + 1;
            else if (roll < 23250) dict["zammybrew"] += Math.floor(Math.random() * 10) + 1;
            else if (roll < 24500) dict["sanfew"] += Math.floor(Math.random() * 11) + 1;
            else if (roll < 25000) dict["coins"] += Math.floor(Math.random() * 41138) + 2717;
        }
        return dict;
    }
    else {
        return 0;
    }
}