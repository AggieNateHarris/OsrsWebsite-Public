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
    var style = menuSelect();
    var result = func(extractedNum, style);
    for (item of domName) {
        var element = document.getElementById(item);
        element.innerText = result[item];
    }
}


function menuSelect() {
    var element = document.getElementById("flexRadioDefault1");
    if (element.checked == true) {
        return "regular";
    }

    element = ducment.getElementById("flexRadioStoryMode");
    if (element.checked == true) {
        return "story";
    }

    element = ducment.getElementById("flexRadioHardMode");
    if (element.checked == true) {
        return "hard";
    }
}

function xTheatre(x, style) {

    if (x <= 10000 && x > 0) {

        var dict = {
            'zik':0, 'elite':0, 'avernic':0, 'rapier':0, 'sang':0,
            'faceguard':0, 'chestguard':0, 'legguards':0, 'scythe':0, 'dust':0,
            'sangorn':0, 'holyorn':0, 'vialblood':0, 'death':0, 'bloodrune':0,
            'swamptar':0, 'coal':0, 'gold':0, 'molten':0, 'addyore':0,
            'runeore':0, 'zammywine':0, 'potatocactus':0, 'cadantine':0, 'avantoe':0,
            'toadflax':0, 'kwuarm':0, 'irit':0, 'ranarr':0, 'snapdragon':0,
            'lantadyme':0, 'dwarf':0, 'torstol':0, 'bstaff':0, 'mahoganyseed':0,
            'runebaxe':0, 'runeplate':0, 'runechain':0, 'palm':0, 'yewseed':0, 'magicseed':0
        };

        if (style == "story") {

        }

        else if (style == "regular") {
            for (var i = 0; i < x; i++) {

                var eliteRoll = Math.floor(Math.random() * 8333);
                if (eliteRoll < 1000)
                    dict["elite"]++;

                var petRoll = Math.floor(Math.random() * 650);
                if (petRoll == 1)
                    dict["zik"]++;

                var rareRoll = Math.floor(Math.random() * 91);
                if (rareRoll < 10) {
                    var innerRoll = Math.floor(Math.random() * 19);
                    switch(true) {
                        case (innerRoll == 0): dict["scythe"]++; break;
                        case (innerRoll < 3): dict["rapier"]++; break;
                        case (innerRoll < 5): dict["sang"]++; break;
                        case (innerRoll < 7): dict["faceguard"]++; break;
                        case (innerRoll < 9): dict["chestguard"]++; break;
                        case (innerRoll < 11): dict["legguards"]++; break;
                        case (innerRoll < 19): dict["avernic"]++; break;
                    }
                }
                if ((rareRoll < 10 && Math.floor(Math.random() * 3) == 1) || rareRoll > 9) {
                    for (var ii = 0; ii < 3; ii++) {
                        var Roll = Math.floor(Math.random() * 30);
                        switch(true) {
                            case (Roll < 2) : dict["vialblood"] += Math.floor(Math.random() * 11) + 50; break;
                            case (Roll < 3) : dict["death"] += Math.floor(Math.random() * 101) + 500; break;
                            case (Roll < 4) : dict["bloodrune"] += Math.floor(Math.random() * 101) + 500; break;
                            case (Roll < 5) : dict["swamptar"] += Math.floor(Math.random() * 101) + 500; break;
                            case (Roll < 6) : dict["coal"] += Math.floor(Math.random() * 101) + 500; break;
                            case (Roll < 7) : dict["gold"] += Math.floor(Math.random() * 61) + 300; break;
                            case (Roll < 8) : dict["molten"] += Math.floor(Math.random() * 41) + 200; break;
                            case (Roll < 9) : dict["addyore"] += Math.floor(Math.random() * 27) + 130; break;
                            case (Roll < 10) : dict["runeore"] += Math.floor(Math.random() * 13) + 60; break;
                            case (Roll < 11) : dict["zammywine"] += Math.floor(Math.random() * 11) + 50; break;
                            case (Roll < 12) : dict["potatocactus"] += Math.floor(Math.random() * 11) + 50; break;
                            case (Roll < 13) : dict["cadantine"] += Math.floor(Math.random() * 11) + 50; break;
                            case (Roll < 14) : dict["avantoe"] += Math.floor(Math.random() * 9) + 40; break;
                            case (Roll < 15) : dict["toadflax"] += Math.floor(Math.random() * 8) + 37; break;
                            case (Roll < 16) : dict["kwuarm"] += Math.floor(Math.random() * 8) + 36; break;
                            case (Roll < 17) : dict["irit"] += Math.floor(Math.random() * 7) + 34; break;
                            case (Roll < 18) : dict["ranarr"] += Math.floor(Math.random() * 7) + 30; break;
                            case (Roll < 19) : dict["snapdragon"] += Math.floor(Math.random() * 6) + 27; break;
                            case (Roll < 20) : dict["lantadyme"] += Math.floor(Math.random() * 6) + 26; break;
                            case (Roll < 21) : dict["dwarf"] += Math.floor(Math.random() * 5) + 24; break;
                            case (Roll < 22) : dict["torstol"] += Math.floor(Math.random() * 5) + 20; break;
                            case (Roll < 23) : dict["bstaff"] += Math.floor(Math.random() * 4) + 15; break;
                            case (Roll < 24) : dict["mahoganyseed"] += Math.floor(Math.random() * 5) + 8; break;
                            case (Roll < 25) : dict["runebaxe"] += 4; break;
                            case (Roll < 26) : dict["runeplate"] += 4; break;
                            case (Roll < 27) : dict["runechain"] += 4; break;
                            case (Roll < 28) : dict["palm"] += 3; break;
                            case (Roll < 29) : dict["yewseed"] += 3; break;
                            case (Roll < 30) : dict["magicseed"] += 3; break;
                        }
                    }
                }
            }

            return dict;
        }

        else if (style == "hard") {

        }
    }
    else {
        return 0;
    }
}