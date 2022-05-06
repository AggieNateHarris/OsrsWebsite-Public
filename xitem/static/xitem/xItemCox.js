// getDesireList retrieves retrieves info on which boxes
// of items were checked and creates a list of those items
// to be used as input in simulation calculator
function getDesiredList() {
    var elements = document.getElementsByName("desiredItem");
    var successfulElements = [];
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked == true) {
            successfulElements.push(elements[i]);
        }
    }
    return successfulElements;
}

// updateTable is meant to select the dom element and
// update that element with the result of a function
// input string of dom name, function
function updateTable(domNames, func, num) {
    var extractedDict = num();
    if (extractedDict.length > 0) {
        var result = func(extractedDict);
        for (item of domNames) {
            var element = document.getElementById(item);
            element.innerText = result[item];
        }
    }
}

function xChambers(x) {

    var dict = {
        "kc":0, "dex": 0, "arcane": 0, "buckler": 0, "dhcb": 0, "bulwark": 0,
        "AncestralHat": 0, "AncestralRobetop": 0, "AncestralRobebottom": 0, "Claws": 0,
        "ElderMaul": 0, "Kodai": 0, "TwistedBow": 0, "Olmlet": 0
    };

    var finishedFlag = false;

    while (finishedFlag == false) {

        dict["kc"]++;

        finishedFlag = true;
        for (var i = 0; i < x.length; i++) {
            if (dict[x[i].value] < 1) {
                finishedFlag = false;
            }
        }

        var Roll = Math.floor(Math.random() * 2217); // 2217 comes from the ( drop rate / single raid points ) * entries on loot table
        if (Roll < 20) dict["dex"]++;                          // ( 867,500 / 27,000 ) * 69
        else if (Roll < 40) dict["arcane"]++;
        else if (Roll < 44) dict["buckler"]++;
        else if (Roll < 48) dict["dhcb"]++;
        else if (Roll < 51) dict["bulwark"]++;
        else if (Roll < 54) dict["AncestralHat"]++;
        else if (Roll < 57) dict["AncestralRobetop"]++;
        else if (Roll < 60) dict["AncestralRobebottom"]++;
        else if (Roll < 63) dict["Claws"]++;
        else if (Roll < 65) dict["ElderMaul"]++;
        else if (Roll < 67) dict["Kodai"]++;
        else if (Roll < 69) dict["TwistedBow"]++;

        if (Roll < 69) {
            var petRoll = Math.floor(Math.random() * 53);
            if (petRoll == 1)
                dict["Olmlet"]++;
        }

    }
    return dict;
}

function xChallengeCox(x) {

    var dict = {
        "kc":0, "dex": 0, "arcane": 0, "buckler": 0, "dhcb": 0, "bulwark": 0,
        "AncestralHat": 0, "AncestralRobetop": 0, "AncestralRobebottom": 0, "Claws": 0,
        "ElderMaul": 0, "Kodai": 0, "TwistedBow": 0, "Olmlet": 0, "MetaDust": 0, "AncestralTrim": 0
    };

    var finishedFlag = false;

    while (finishedFlag == false) {

        dict["kc"]++;

        finishedFlag = true;
        for (var i = 0; i < x.length; i++) {
            if (dict[x[i].value] < 1) {
                finishedFlag = false;
            }
        }

        var Roll = Math.floor(Math.random() * 998); // 998 comes from the ( drop rate / single raid points ) * entries on loot table
        if (Roll < 20) dict["dex"]++;                          // ( 867,500 / 60,000 ) * 69
        else if (Roll < 40) dict["arcane"]++;
        else if (Roll < 44) dict["buckler"]++;
        else if (Roll < 48) dict["dhcb"]++;
        else if (Roll < 51) dict["bulwark"]++;
        else if (Roll < 54) dict["AncestralHat"]++;
        else if (Roll < 57) dict["AncestralRobetop"]++;
        else if (Roll < 60) dict["AncestralRobebottom"]++;
        else if (Roll < 63) dict["Claws"]++;
        else if (Roll < 65) dict["ElderMaul"]++;
        else if (Roll < 67) dict["Kodai"]++;
        else if (Roll < 69) dict["TwistedBow"]++;

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