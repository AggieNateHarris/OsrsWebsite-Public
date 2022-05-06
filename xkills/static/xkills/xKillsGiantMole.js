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

// Takes as input a number of 'kills' to simulate
// Simulates the drop results from killing giantmole x times
function xGiantMole(x) {

    if (x <= 20000 && x > 0) {
        var dict = {
            'baby':0, 'elite':0, 'claw':0, 'skin':0, 'addylong':0, 'mithplate':0, 'strength':0, 'mithaxe':0, 'mithbaxe':0,
            'runemed':0, 'air':0, 'fire':0, 'blood':0, 'ironarrow':0, 'death':0, 'law':0, 'yewlog':0, 'shark':0, 'mithbar':0,
            'ironore':0, 'oyster':0, 'rare':0,

            'nest':0, 'sweetcorn':0, 'strawberry':0, 'acorn':0, 'limpwurt':0,
            'watermelon':0, 'snapegrass':0, 'lantadyme':0, 'dwarfweed':0, 'teak':0,
            'mahogany':0, 'willow':0, 'pineapple':0, 'calquat':0, 'papaya':0,
            'maple':0, 'torstol':0, 'ranarr':0, 'snapdragon':0, 'yew':0,
            'spirit':0, 'palm':0, 'dragonfruit':0, 'magic':0, 'celastrus':0,
            'redwood':0, 'gold':0, 'sapphire':0, 'emerald':0, 'ruby':0, 'diamond':0
        }

        for (var i = 0; i < x; i++) {

            dict["claw"]++;
            dict["skin"] += Math.floor(Math.random() * 3) + 1;

            var petRoll = Math.floor(Math.random() * 3000);
            if (petRoll == 1) dict["baby"]++;

            var eliteRoll = Math.floor(Math.random() * 500);
            if (eliteRoll == 1) dict["elite"]++;

            var roll = Math.floor(Math.random() * 12700);
            if (roll < 1000) dict["addylong"]++;
            else if (roll < 1900) dict["mithplate"]++;
            else if (roll < 2600) dict["strength"]++;
            else if (roll < 2800) dict["mithaxe"]++;
            else if (roll < 2900) dict["mithbaxe"]++;
            else if (roll < 3000) dict["runemed"]++;
            else if (roll < 5000) dict["air"] += 105;
            else if (roll < 6900) dict["blood"] += 15;
            else if (roll < 8000) dict["fire"] += 105;
            else if (roll < 9000) dict["ironarrow"] += 690;
            else if (roll < 9500) dict["law"] += 15;
            else if (roll < 9800) dict["death"] += 7;
            else if (roll < 10800) dict["yewlog"] += 100;
            else if (roll < 11200) dict["shark"] += 4;
            else if (roll < 11500) dict["mithbar"]++;
            else if (roll < 11700) dict["ironore"] += 100;
            else if (roll < 11800) dict["oyster"]++;
            else if (roll < 12700) dict["rare"]++;
        }

        for (var i = 0; i < (dict["claw"] + dict["skin"]); i++) {

            dict["nest"]++;

            var nestType = Math.floor(Math.random() * 100);

            // seed nests 72% rate https://twitter.com/JagexAsh/status/1187776203069022214
            if (nestType < 72) {
                var seedRoll = Math.floor(Math.random() * 68400)
                switch (true) {
                    case (seedRoll < 10200) : dict["sweetcorn"] += 6; break;
                    case (seedRoll < 20200) : dict["strawberry"] += 6; break;
                    case (seedRoll < 28200) : dict["acorn"] += 1; break;
                    case (seedRoll < 36200) : dict["limpwurt"] += 2; break;
                    case (seedRoll < 43200) : dict["watermelon"] += 2; break;
                    case (seedRoll < 47200) : dict["snapegrass"] += 2; break;
                    case (seedRoll < 50200) : dict["lantadyme"]++; break;
                    case (seedRoll < 53200) : dict["dwarfweed"]++; break;
                    case (seedRoll < 55600) : dict["cadantine"]++; break;
                    case (seedRoll < 57600) : dict["teak"]++; break;
                    case (seedRoll < 59600) : dict["mahogany"]++; break;
                    case (seedRoll < 61200) : dict["willow"]++; break;
                    case (seedRoll < 62800) : dict["pineapple"]++; break;
                    case (seedRoll < 64000) : dict["calquat"]++; break;
                    case (seedRoll < 65000) : dict["papaya"]++; break;
                    case (seedRoll < 65600) : dict["maple"]++; break;
                    case (seedRoll < 66000) : dict["torstol"]++; break;
                    case (seedRoll < 66400) : dict["ranarr"]++; break;
                    case (seedRoll < 66800) : dict["snapdragon"]++; break;
                    case (seedRoll < 67200) : dict["yew"]++; break;
                    case (seedRoll < 67600) : dict["spirit"]++; break;
                    case (seedRoll < 67800) : dict["palm"]++; break;
                    case (seedRoll < 68000) : dict["dragonfruit"]++; break;
                    case (seedRoll < 68200) : dict["magic"]++; break;
                    case (seedRoll < 68300) : dict["celastrus"]++; break;
                    case (seedRoll < 68400) : dict["redwood"]++; break;
                }
            }

            // ring nests 20% rate
            else if ( nestType < 92) {
                var ringRoll = Math.floor(Math.random() * 1000)
                switch (true) {
                    case (ringRoll < 350) : dict["gold"]++; break;
                    case (ringRoll < 750) : dict["sapphire"]++; break;
                    case (ringRoll < 900) : dict["emerald"]++; break;
                    case (ringRoll < 990) : dict["ruby"]++; break;
                    case (ringRoll < 1000) : dict["diamond"]++; break;
                }

            // nothing nests 8% rate
            }
        }

        return dict;
    }
    else {
        return 0;
    }
}