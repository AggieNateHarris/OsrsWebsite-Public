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

function xGauntlet(x) {

    if (x <= 20000 && x > 0) {
        var dict = {
            'uncutdiamond':0, 'uncutruby':0, 'uncutemerald':0, 'uncutsapphire':0, 'dragonarrow':0, 'runearrow':0, 'addyarrow':0, 'mithrilarrow':0, 'blood':0,
            'nature':0, 'cosmic':0, 'chaos':0, 'law':0, 'death':0, 'dragonhally':0, 'runepick':0, 'runehally':0, 'runeskirt':0, 'runelegs':0, 'runeplate':0, 'runechain':0, 'runefull':0,
            'shards':0, 'elite':0, 'bstaff':0, 'coins':0, 'weaponseed':0, 'armourseed':0, 'blade':0, 'youngllef':0
        }

        for (var i = 0; i < x; i++) {

            dict["shards"] += Math.floor(Math.random() * 5) + 3;

            var petRoll = Math.floor(Math.random() * 2000);
            if (petRoll == 1) dict["youngllef"]++;

            var tertiaryRoll = Math.floor(Math.random() * 20000);
            if (tertiaryRoll < 10) dict["blade"]++;
            else if (tertiaryRoll < 177) dict["armourseed"]++;
            else if (tertiaryRoll < 344) dict["weaponseed"]++;
            else if (tertiaryRoll < 1144) dict["elite"]++;

            for (var ii = 0; ii < 2; ii++) {
                var roll = Math.floor(Math.random() * 24);
                if (roll < 1) dict["runefull"] += Math.floor(Math.random() * 3) + 2;
                else if (roll < 2) dict["runechain"] += Math.floor(Math.random() * 2);
                else if (roll < 3) dict["runeplate"] += Math.floor(Math.random() * 2);
                else if (roll < 4) dict["runelegs"] += Math.floor(Math.random() * 2);
                else if (roll < 5) dict["runeskirt"] += Math.floor(Math.random() * 2);
                else if (roll < 6) dict["runehally"] += Math.floor(Math.random() * 2);
                else if (roll < 7) dict["runepick"] += Math.floor(Math.random() * 2);
                else if (roll < 8) dict["dragonhally"]++;
                else if (roll < 9) dict["cosmic"] += Math.floor(Math.random() * 81) + 160;
                else if (roll < 10) dict["nature"] += Math.floor(Math.random() * 41) + 100;
                else if (roll < 11) dict["law"] += Math.floor(Math.random() * 61) + 80;
                else if (roll < 12) dict["chaos"] += Math.floor(Math.random() * 121) + 180;
                else if (roll < 13) dict["death"] += Math.floor(Math.random() * 61) + 100;
                else if (roll < 14) dict["blood"] += Math.floor(Math.random() * 61) + 80;
                else if (roll < 15) dict["mithrilarrow"] += Math.floor(Math.random() * 401) + 800;
                else if (roll < 16) dict["addyarrow"] += Math.floor(Math.random() * 201) + 400;
                else if (roll < 17) dict["runearrow"] += Math.floor(Math.random() * 101) + 200;
                else if (roll < 18) dict["dragonarrow"] += Math.floor(Math.random() * 51) + 30;
                else if (roll < 19) dict["uncutsapphire"] += Math.floor(Math.random() * 41) + 20;
                else if (roll < 20) dict["uncutemerald"] += Math.floor(Math.random() * 41) + 10;
                else if (roll < 21) dict["uncutruby"] += Math.floor(Math.random() * 26) + 5;
                else if (roll < 22) dict["uncutdiamond"] += Math.floor(Math.random() * 4) + 3;
                else if (roll < 23) dict["bstaff"] += Math.floor(Math.random() * 5) + 4;
                else if (roll < 24) dict["coins"] += Math.floor(Math.random() * 60001) + 20000;
            }
        }
        return dict;
    }
    else {
        return 0;
    }
}

function xCorruptGauntlet(x) {

    if (x <= 20000 && x > 0) {
        var dict = {
            'uncutdiamond':0, 'uncutruby':0, 'uncutemerald':0, 'uncutsapphire':0, 'dragonarrow':0, 'runearrow':0, 'addyarrow':0, 'mithrilarrow':0, 'blood':0,
            'nature':0, 'cosmic':0, 'chaos':0, 'law':0, 'death':0, 'dragonhally':0, 'runepick':0, 'runehally':0, 'runeskirt':0, 'runelegs':0, 'runeplate':0, 'runechain':0, 'runefull':0,
            'shards':0, 'elite':0, 'bstaff':0, 'coins':0, 'weaponseed':0, 'armourseed':0, 'blade':0, 'youngllef':0
        }

        for (var i = 0; i < x; i++) {

            dict["shards"] += Math.floor(Math.random() * 5) + 5;

            var petRoll = Math.floor(Math.random() * 800);
            if (petRoll == 1) dict["youngllef"]++;

            var tertiaryRoll = Math.floor(Math.random() * 4000);
            if (tertiaryRoll < 10) dict["blade"]++;
            else if (tertiaryRoll < 90) dict["armourseed"]++;
            else if (tertiaryRoll < 170) dict["weaponseed"]++;
            else if (tertiaryRoll < 370) dict["elite"]++;

            for (var ii = 0; ii < 3; ii++) {
                var roll = Math.floor(Math.random() * 240);
                if (roll < 10) dict["runefull"] += Math.floor(Math.random() * 3) + 3;
                else if (roll < 20) dict["runechain"] += Math.floor(Math.random() * 2) + 2;
                else if (roll < 30) dict["runeplate"] += 2;
                else if (roll < 40) dict["runelegs"] += Math.floor(Math.random() * 2) + 2;
                else if (roll < 50) dict["runeskirt"] += Math.floor(Math.random() * 2) + 2;
                else if (roll < 60) dict["runehally"] += Math.floor(Math.random() * 2) + 2;
                else if (roll < 70) dict["runepick"] += Math.floor(Math.random() * 2) + 2;
                else if (roll < 75) dict["dragonhally"] += Math.floor(Math.random() * 2) + 1;
                else if (roll < 85) dict["cosmic"] += Math.floor(Math.random() * 76) + 175;
                else if (roll < 95) dict["nature"] += Math.floor(Math.random() * 26) + 125;
                else if (roll < 105) dict["law"] += Math.floor(Math.random() * 51) + 100;
                else if (roll < 115) dict["chaos"] += Math.floor(Math.random() * 151) + 200;
                else if (roll < 125) dict["death"] += Math.floor(Math.random() * 51) + 125;
                else if (roll < 135) dict["blood"] += Math.floor(Math.random() * 51) + 100;
                else if (roll < 145) dict["mithrilarrow"] += Math.floor(Math.random() * 501) + 1000;
                else if (roll < 155) dict["addyarrow"] += Math.floor(Math.random() * 226) + 500;
                else if (roll < 165) dict["runearrow"] += Math.floor(Math.random() * 201) + 250;
                else if (roll < 175) dict["dragonarrow"] += Math.floor(Math.random() * 51) + 50;
                else if (roll < 185) dict["uncutsapphire"] += Math.floor(Math.random() * 41) + 25;
                else if (roll < 195) dict["uncutemerald"] += Math.floor(Math.random() * 46) + 15;
                else if (roll < 205) dict["uncutruby"] += Math.floor(Math.random() * 31) + 10;
                else if (roll < 215) dict["uncutdiamond"] += Math.floor(Math.random() * 11) + 5;
                else if (roll < 225) dict["bstaff"] += Math.floor(Math.random() * 5) + 8;
                else if (roll < 240) dict["coins"] += Math.floor(Math.random() * 75001) + 75000;
            }
        }
        return dict;
    }
    else {
        return 0;
    }
}