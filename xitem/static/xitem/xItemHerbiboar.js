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

// herbiboarPet randomly rolls until a herbi
// pet is obtained, then the counter is returned
function xHerbiboar(x) {

    //dict for html
    var dict = {
        "kc":0, "Herbi": 0, "Guam": 0, "Cadantine": 0, "Kwuarm": 0, "Lantadyme": 0,
        "DwarfWeed": 0, "Avantoe": 0, "Ranarr": 0, "Torstol": 0, "Irit": 0, "Snapdragon": 0
    }

    var finishedFlag = false;

    while (finishedFlag == false) {

        dict["kc"]++;

        finishedFlag = true;
        for (var i = 0; i < x.length; i++) {
            if (dict[x[i].value] < 1) {
                finishedFlag = false;
            }
        }

        var petRoll = Math.floor(Math.random() * 6500);

        if (petRoll == 1) dict["Herbi"]++;

        for (var ii = 0; ii < 3; ii++) {
            var roll = Math.floor(Math.random() * 1001);

            if (roll < 192) dict["Guam"]++;
            else if (roll < 306) dict["Cadantine"]++;
            else if (roll < 415) dict["Kwuarm"]++;
            else if (roll < 524) dict["Lantadyme"]++;
            else if (roll < 618) dict["DwarfWeed"]++;
            else if (roll < 701) dict["Avantoe"]++;
            else if (roll < 783) dict["Ranarr"]++;
            else if (roll < 858) dict["Torstol"]++;
            else if (roll < 932) dict["Irit"]++;
            else if (roll < 1001) dict["Snapdragon"]++;
        }

    }

    return dict;
}