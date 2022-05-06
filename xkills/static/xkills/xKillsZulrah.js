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

function xZulrah(x) {

    if (x <= 20000 && x > 0) {
        var dict = {
            'zulscales':0, 'swamptar':0, 'coconut':0, 'grapes':0, 'dstonetips':0, 'antidote':0, 'manta':0, 'zultele':0,
            'mahoganylogs':0, 'dragonbones':0, 'coal':0, 'addybar':0, 'yewlog':0, 'flax':0, 'pess':0, 'runeore':0, 'snakeskin':0, 'spiritseed':0, 'torstolseed':0, 'dwarfseed':0,
            'snapdragonseed':0, 'toadflaxseed':0, 'magicseed':0, 'calquat':0, 'papaya':0, 'palmseed':0, 'torstol':0, 'toadflax':0, 'dwarfWeed':0, 'snapdragon':0, 'chaos':0, 'law':0,
            'death':0, 'dmed':0, 'dhally':0, 'bstaff':0, 'magMut':0, 'tanzMut':0, 'Jar':0, 'Snakeling':0, 'tanzFang':0, 'magicFang':0, 'serpVisage':0, 'onyx':0, 'rare':0
        }

        for (var i = 0; i < x; i++) {

            dict["zulscales"] += Math.floor(Math.random() * 200) + 100

            var petRoll = Math.floor(Math.random() * 4000);
            if (petRoll == 1) dict["Snakeling"]++;

            var jarRoll = Math.floor(Math.random() * 3000);
            if (jarRoll == 1) dict["Jar"]++;

            for (var ii = 0; ii < 2; ii++) {
                var roll = Math.floor(Math.random() * 131592);
                if (roll < 10) dict["magMut"]++;
                else if (roll < 20) dict["tanzMut"]++;
                else if (roll < 148) dict["tanzFang"]++;
                else if (roll < 276) dict["magicFang"]++;
                else if (roll < 404) dict["serpVisage"]++;
                else if (roll < 532) dict["onyx"]++;
                else if (roll < 5817) dict["bstaff"] += 10;
                else if (roll < 6874) dict["dmed"]++;
                else if (roll < 7931) dict["dhally"]++;
                else if (roll < 14272) dict["death"] += 300;
                else if (roll < 20613) dict["law"] += 200;
                else if (roll < 26954) dict["chaos"] += 500;
                else if (roll < 28011) dict["snapdragon"] += 10;
                else if (roll < 29068) dict["dwarfWeed"] += 30;
                else if (roll < 30125) dict["toadflax"] += 25;
                else if (roll < 31182) dict["torstol"] += 10;
                else if (roll < 34353) dict["palmseed"]++;
                else if (roll < 37524) dict["papaya"] += 3;
                else if (roll < 40695) dict["calquat"] += 2;
                else if (roll < 42809) dict["magicseed"]++;
                else if (roll < 43866) dict["toadflaxseed"] += 2;
                else if (roll < 44923) dict["snapdragonseed"]++;
                else if (roll < 45980) dict["dwarfseed"] += 2;
                else if (roll < 47037) dict["torstolseed"]++;
                else if (roll < 47565) dict["spiritseed"]++;
                else if (roll < 53377) dict["snakeskin"] += 35;
                else if (roll < 59189) dict["runeore"] += 2;
                else if (roll < 64474) dict["pess"] += 1500;
                else if (roll < 69759) dict["flax"] += 1000;
                else if (roll < 75044) dict["yewlog"] += 35;
                else if (roll < 79272) dict["addybar"] += 20;
                else if (roll < 83500) dict["coal"] += 200;
                else if (roll < 87728) dict["dragonbones"] += 12;
                else if (roll < 91956) dict["mahoganylogs"] += 50;
                else if (roll < 99885) dict["zultele"] += 4;
                else if (roll < 106227) dict["manta"] += 35;
                else if (roll < 110982) dict["antidote"] += 10;
                else if (roll < 115210) dict["dstonetips"] += 12;
                else if (roll < 118381) dict["grapes"] += 250;
                else if (roll < 121552) dict["coconut"] += 20;
                else if (roll < 124194) dict["swamptar"] += 1000;
                else if (roll < 126836) dict["zulscales"] += 500;
                else if (roll < 131592) dict["rare"]++;
            }
        }
        return dict;
    }
    else {
        return 0;
    }
}