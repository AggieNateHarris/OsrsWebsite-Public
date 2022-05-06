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

function xChambers(x) {

    if (x <= 10000 && x > 0) {

        var dict = {
            "dex": 0, "arcane": 0, "buckler": 0, "dhcb": 0, "bulwark": 0,
            "Ancestral Hat": 0, "Ancestral Robetop": 0, "Ancestral Robebottom": 0, "Claws": 0,
            "Elder Maul": 0, "Kodai": 0, "Twisted Bow": 0, "Olmlet": 0
        };
        for (var i = 0; i < x; i++) {
            var Roll = Math.floor(Math.random() * 2217); // 2217 comes from the ( drop rate / single raid points ) * entries on loot table
            if (Roll < 20) dict["dex"]++;                          // ( 867,500 / 27,000 ) * 69
            else if (Roll < 40) dict["arcane"]++;
            else if (Roll < 44) dict["buckler"]++;
            else if (Roll < 48) dict["dhcb"]++;
            else if (Roll < 51) dict["bulwark"]++;
            else if (Roll < 54) dict["Ancestral Hat"]++;
            else if (Roll < 57) dict["Ancestral Robetop"]++;
            else if (Roll < 60) dict["Ancestral Robebottom"]++;
            else if (Roll < 63) dict["Claws"]++;
            else if (Roll < 65) dict["Elder Maul"]++;
            else if (Roll < 67) dict["Kodai"]++;
            else if (Roll < 69) dict["Twisted Bow"]++;

            if (Roll < 69) {
                var petRoll = Math.floor(Math.random() * 53);
                if (petRoll == 1)
                    dict["Olmlet"]++;
            }
        }

        return dict;
    }
    else {
        return 0;
    }
}

function xChallengeCox(x) {

    if (x <= 10000 && x > 0) {

        var dict = {
            "dex": 0, "arcane": 0, "buckler": 0, "dhcb": 0, "bulwark": 0,
            "Ancestral Hat": 0, "Ancestral Robetop": 0, "Ancestral Robebottom": 0, "Claws": 0,
            "Elder Maul": 0, "Kodai": 0, "Twisted Bow": 0, "Olmlet": 0, "MetaDust": 0, "AncestralTrim": 0
        };
        for (var i = 0; i < x; i++) {
            var Roll = Math.floor(Math.random() * 998); // 998 comes from the ( drop rate / single raid points ) * entries on loot table
            if (Roll < 20) dict["dex"]++;                          // ( 867,500 / 60,000 ) * 69
            else if (Roll < 40) dict["arcane"]++;
            else if (Roll < 44) dict["buckler"]++;
            else if (Roll < 48) dict["dhcb"]++;
            else if (Roll < 51) dict["bulwark"]++;
            else if (Roll < 54) dict["Ancestral Hat"]++;
            else if (Roll < 57) dict["Ancestral Robetop"]++;
            else if (Roll < 60) dict["Ancestral Robebottom"]++;
            else if (Roll < 63) dict["Claws"]++;
            else if (Roll < 65) dict["Elder Maul"]++;
            else if (Roll < 67) dict["Kodai"]++;
            else if (Roll < 69) dict["Twisted Bow"]++;

            if (Roll < 69) {
                var petRoll = Math.floor(Math.random() * 53);
                if (petRoll == 1)
                    dict["Olmlet"]++;
            }

            var dustRoll = Math.floor(Math.random() * 400);
            if (dustRoll == 1)
                dict["MetaDust"]++;

            var trimRoll = Math.floor(Math.random() * 75);
            if (trimRoll == 1)
                dict["AncestralTrim"]++;
        }

        return dict;
    }
    else {
        return 0;
    }
}