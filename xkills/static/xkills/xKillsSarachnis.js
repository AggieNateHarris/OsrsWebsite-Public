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

function xSarachnis(x) {

    if (x <= 20000 && x > 0) {
        var dict = {
            'pet':0, 'elite':0, 'hard':0, 'jar':0, 'eggsac':0,
            'grubby':0, 'dragonmed':0, 'cudgel':0, 'bstaff':0, 'runeplate':0,
            'runemed':0, 'rune2h':0, 'blood':0, 'chaos':0, 'cosmic':0,
            'death':0, 'soul':0, 'mithrilarrow':0, 'mithrilbolts':0, 'maple':0,
            'papaya':0, 'yew':0, 'toadflaxseed':0, 'snapdragonseed':0, 'dwarfseed':0,
            'torstolseed':0, 'irit':0, 'belladonna':0, 'poison':0, 'avantoe':0,
            'cactus':0, 'potatocactus':0, 'kwuarmseed':0, 'cadantineseed':0, 'lantadymeseed':0,
            'snapegrassseeds':0, 'grimykwuarm':0, 'grimycadantine':0, 'grimydwarf':0, 'grimyavantoe':0,
            'grimylantadyme':0, 'grimyranarr':0, 'grimysnapdragon':0, 'grimytorstol':0, 'mithore':0,
            'redhide':0, 'uncutsapphire':0, 'addyore':0, 'uncutemerald':0, 'onyxtips':0,
            'uncutruby':0, 'runeore':0, 'uncutdiamond':0, 'coins':0, 'dragonbones':0,
            'eggpotato':0, 'weppoison':0, 'crystalkey':0, 'spidercarcass':0, 'gemtable':0
        }

        for (var i = 0; i < x; i++) {

            dict["zulscales"] += Math.floor(Math.random() * 200) + 100

            var petRoll = Math.floor(Math.random() * 3000);
            if (petRoll == 1) dict["pet"]++;

            var jarRoll = Math.floor(Math.random() * 2000);
            if (jarRoll == 1) dict["jar"]++;

            var eggRoll = Math.floor(Math.random() * 20);
            if (eggRoll == 1) dict["eggsac"]++;

            var hardRoll = Math.floor(Math.random() * 40);
            if (hardRoll == 1) dict["hard"]++;

            var eliteRoll = Math.floor(Math.random() * 60);
            if (eliteRoll == 1) dict["elite"]++;

            var grubbyRoll = Math.floor(Math.random() * 15);
            if (grubbyRoll == 1) dict["grubby"]++;

            var roll = Math.floor(Math.random() * 594601);
            if (roll < 3073) dict["dragonmed"]++;
            else if (roll < 4609) dict["cudgel"]++;
            else if (roll < 16409) dict["bstaff"] += Math.floor(Math.random() * 3) + 8;
            else if (roll < 28209) dict["runeplate"]++;
            else if (roll < 40009) dict["runemed"]++;
            else if (roll < 51809) dict["rune2h"]++;
            else if (roll < 81309) dict["blood"] += Math.floor(Math.random() * 21) + 80;
            else if (roll < 110809) dict["chaos"] += Math.floor(Math.random() * 26) + 175;
            else if (roll < 140309) dict["cosmic"] += Math.floor(Math.random() * 26) + 125;
            else if (roll < 169809) dict["death"] += Math.floor(Math.random() * 21) + 80;
            else if (roll < 199309) dict["soul"] += Math.floor(Math.random() * 21) + 80;
            else if (roll < 211109) dict["mithrilarrow"] += Math.floor(Math.random() * 151) + 450;
            else if (roll < 222909) dict["mithrilbolts"]  += Math.floor(Math.random() * 51) + 175;
            else if (roll < 228809) dict["maple"] += 2;
            else if (roll < 234709) dict["papaya"] += 2;
            else if (roll < 240609) dict["yew"] += 1;
            else if (roll < 242959) dict["toadflaxseed"] += 3;
            else if (roll < 244559) dict["irit"] += 3;
            else if (roll < 246109) dict["belladonna"] += 3;
            else if (roll < 247209) dict["poison"] += 3;
            else if (roll < 248309) dict["avantoe"] += 3;
            else if (roll < 249359) dict["cactus"] += 3;
            else if (roll < 250109) dict["potatocactus"] += 3;
            else if (roll < 250859) dict["kwuarmseed"] += 3;
            else if (roll < 251359) dict["snapdragonseed"] += 3;
            else if (roll < 251709) dict["cadantineseed"] += 3;
            else if (roll < 251959) dict["lantadymeseed"] += 3;
            else if (roll < 252159) dict["snapegrassseeds"] += Math.floor(Math.random() * 7) + 3;
            else if (roll < 252309) dict["dwarfseed"] += 3;
            else if (roll < 252409) dict["torstolseed"] += 3;
            else if (roll < 263493) dict["grimykwuarm"] += Math.floor(Math.random() * 6) + 10;
            else if (roll < 273148) dict["grimycadantine"]+= Math.floor(Math.random() * 6) + 10;
            else if (roll < 282087) dict["grimydwarf"]+= Math.floor(Math.random() * 6) + 10;
            else if (roll < 289954) dict["grimyavantoe"]+= Math.floor(Math.random() * 6) + 5;
            else if (roll < 296033) dict["grimylantadyme"]+= Math.floor(Math.random() * 6) + 10;
            else if (roll < 301756) dict["grimyranarr"]+= Math.floor(Math.random() * 6) + 5;
            else if (roll < 307120) dict["grimysnapdragon"]+= Math.floor(Math.random() * 6) + 5;
            else if (roll < 311411) dict["grimytorstol"]+= Math.floor(Math.random() * 6) + 10;
            else if (roll < 346804) dict["mithore"]+= Math.floor(Math.random() * 31) + 60;
            else if (roll < 376304) dict["redhide"]+= Math.floor(Math.random() * 11) + 15;
            else if (roll < 399904) dict["uncutsapphire"]+= Math.floor(Math.random() * 11) + 20;
            else if (roll < 417606) dict["addyore"]+= Math.floor(Math.random() * 11) + 30;
            else if (roll < 435308) dict["uncutemerald"]+= Math.floor(Math.random() * 11) + 20;
            else if (roll < 447108) dict["onyxtips"] += Math.floor(Math.random() * 3) + 8;
            else if (roll < 458908) dict["uncutruby"] += Math.floor(Math.random() * 11) + 20;
            else if (roll < 464808) dict["runeore"] += Math.floor(Math.random() * 3) + 4;
            else if (roll < 470708) dict["uncutdiamond"] += Math.floor(Math.random() * 11) + 20;
            else if (roll < 506101) dict["coins"] += Math.floor(Math.random() * 8001) + 17000;
            else if (roll < 535601) dict["dragonbones"] += Math.floor(Math.random() * 6) + 10;
            else if (roll < 565101) dict["eggpotato"] += Math.floor(Math.random() * 4) + 5;
            else if (roll < 576901) dict["weppoison"] += Math.floor(Math.random() * 3) + 4;
            else if (roll < 582801) dict["crystalkey"]++;
            else if (roll < 588701) dict["spidercarcass"] += 10;
            else if (roll < 594601) dict["gemtable"]++;
        }
        return dict;
    }
    else {
        return 0;
    }
}