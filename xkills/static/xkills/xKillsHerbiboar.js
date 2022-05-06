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

// herbiboarPet randomly rolls until a herbi
// pet is obtained, then the counter is returned
function xHerbiboar(x) {

  if (x <= 15000 && x > 0) {

    var dict = {
      "Herbi": 0, "Guam": 0, "Cadantine": 0, "Kwuarm": 0, "Lantadyme": 0,
      "DwarfWeed": 0, "Avantoe": 0, "Ranarr": 0, "Torstol": 0, "Irit": 0, "Snapdragon": 0
    }

    for (var i = 0; i < x; i++) {

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
  else {
    return 0;
  }
}

/*
function createElement2() {
  var counter = herbiboarPet();
  var answer = "You got your herbi pet in " + counter;
  var text = document.createElement("article");
  text.innerText = answer;
  this.document.body.appendChild(text);
}
 */