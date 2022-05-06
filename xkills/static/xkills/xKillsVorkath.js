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

function xVorkath(x) {

    if (x <= 20000 && x > 0) {
        var dict = {
            'vorki':0, 'jar':0, 'dracvisage':0, 'skelevisage':0, 'dragonbonenecklace':0, 'supbone':0, 'bluehide':0, 'runelong':0, 'runekite':0,
            'bstaff':0, 'dbaxe':0, 'dlong':0, 'dlegs':0, 'dskirt':0, 'death':0, 'wrath':0, 'chaos':0, 'greenhide':0, 'redhide':0, 'blackhide':0, 'dragonbolts':0, 'dtip':0, 'dstonetip':0,
            'onyxtip':0, 'runetip':0, 'darrowtip':0, 'diamondtip':0, 'emtips':0, 'rubytip':0, 'sapphiretip':0, 'snapdragonseed':0, 'torstolseed':0, 'ranarrseed':0, 'watermelonseed':0,
            'willowseed':0, 'mahogseed':0, 'mapleseed':0, 'teakseed':0, 'yewseed':0, 'papayaseed':0, 'magicseed':0, 'palmseed':0, 'spiritseed':0,
            'dragonfruitseed':0, 'celasseed':0, 'redwoodseed':0,'addyore':0, 'coins':0, 'grapes':0,
            'magiclogs':0, 'manta':0, 'dragonbones':0, 'diamond':0, 'dragonstone':0, 'wrathtally':0, 'rare':0
        }

        for (var i = 0; i < x; i++) {

            dict["supbone"] += 2;
            dict["bluehide"] += 2;

            var petRoll = Math.floor(Math.random() * 3000);
            if (petRoll == 1) dict["vorki"]++;

            var tertiaryRoll = Math.floor(Math.random() * 50000);
            if (tertiaryRoll < 10) dict["skelevisage"]++;
            else if (tertiaryRoll < 20) dict["dracvisage"]++;
            else if (tertiaryRoll < 37) dict["jar"]++;
            else if (tertiaryRoll < 87) dict["dragonbonenecklace"]++;

            for (var ii = 0; ii < 2; ii++) {
                var roll = Math.floor(Math.random() * 49999);
                if (roll < 1667) dict["runelong"] += Math.floor(Math.random() * 2) + 2;
                else if (roll < 3334) dict["runekite"] += Math.floor(Math.random() * 2) + 2;
                else if (roll < 4667) dict["bstaff"] += Math.floor(Math.random() * 11) + 5;
                else if (roll < 5334) dict["dbaxe"]++;
                else if (roll < 6001) dict["dlong"]++;
                else if (roll < 6668) dict["dlegs"]++;
                else if (roll < 7335) dict["dskirt"]++;
                else if (roll < 9335) dict["chaos"] += Math.floor(Math.random() * 351) + 650;
                else if (roll < 11335) dict["death"] += Math.floor(Math.random() * 201) + 300;
                else if (roll < 12335) dict["wrath"] += Math.floor(Math.random() * 31) + 30;
                else if (roll < 15002) dict["bluehide"] += Math.floor(Math.random() * 6) + 25;
                else if (roll < 17335) dict["greenhide"] += Math.floor(Math.random() * 6) + 25;
                else if (roll < 19668) dict["redhide"] += Math.floor(Math.random() * 6) + 20;
                else if (roll < 22001) dict["blackhide"] += Math.floor(Math.random() * 11) + 15;
                else if (roll < 24668) dict["dragonbolts"] += Math.floor(Math.random() * 51) + 50;
                else if (roll < 26668) dict["dtip"] += Math.floor(Math.random() * 41) + 10;
                else if (roll < 28335) dict["dstonetip"] += Math.floor(Math.random() * 15) + 11;
                else if (roll < 29668) dict["onyxtip"] += Math.floor(Math.random() * 6) + 5;
                else if (roll < 30668) dict["runetip"] += Math.floor(Math.random() * 26) + 75;
                else if (roll < 31668) dict["darrowtip"] += Math.floor(Math.random() * 26) + 25;
                else if (roll < 32118) dict["diamondtip"] += Math.floor(Math.random() * 6) + 25;
                else if (roll < 32478) dict["emtips"] += Math.floor(Math.random() * 6) + 25;
                else if (roll < 32838) dict["rubytip"] += Math.floor(Math.random() * 6) + 25;
                else if (roll < 33108) dict["dstonetip"] += Math.floor(Math.random() * 6) + 25;
                else if (roll < 33243) dict["onyxtip"] += Math.floor(Math.random() * 6) + 25;
                else if (roll < 33333) dict["sapphiretip"] += Math.floor(Math.random() * 6) + 25;
                else if (roll < 33778) dict["snapdragonseed"]++;
                else if (roll < 34199) dict["torstolseed"]++;
                else if (roll < 34319) dict["ranarrseed"]++;
                else if (roll < 34399) dict["watermelonseed"] += 15;
                else if (roll < 34479) dict["willowseed"]++;
                else if (roll < 34551) dict["mahogseed"]++;
                else if (roll < 34623) dict["mapleseed"]++;
                else if (roll < 34695) dict["teakseed"]++;
                else if (roll < 34767) dict["yewseed"]++;
                else if (roll < 34823) dict["papayaseed"]++;
                else if (roll < 34871) dict["magicseed"]++;
                else if (roll < 34911) dict["palmseed"]++;
                else if (roll < 34943) dict["spiritseed"]++;
                else if (roll < 34967) dict["dragonfruitseed"]++;
                else if (roll < 34983) dict["celasseed"]++;
                else if (roll < 34999) dict["redwoodseed"]++;
                else if (roll < 37332) dict["addyore"] += Math.floor(Math.random() * 21) + 10;
                else if (roll < 38999) dict["coins"] += Math.floor(Math.random() * 61001) + 20000;
                else if (roll < 40666) dict["grapes"] += Math.floor(Math.random() * 51) + 250;
                else if (roll < 42333) dict["magiclogs"] += 50;
                else if (roll < 43666) dict["manta"] += Math.floor(Math.random() * 21) + 35;
                else if (roll < 44999) dict["dragonbones"] += Math.floor(Math.random() * 6) + 15;
                else if (roll < 46332) dict["diamond"] += Math.floor(Math.random() * 11) + 10;
                else if (roll < 47332) dict["dragonstone"] += Math.floor(Math.random() * 2) + 2;
                else if (roll < 48332) dict["wrathtally"]++;
                else if (roll < 49999) dict["rare"]++;
            }
        }
        return dict;
    }
    else {
        return 0;
    }
}