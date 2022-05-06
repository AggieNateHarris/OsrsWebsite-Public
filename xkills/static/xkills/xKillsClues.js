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

function xHardClues(x) {

    if (x <= 20000 && x > 0) {
        var dict = {
            'coins':0, 'lobster':0, 'shark':0, 'law':0, 'blood':0, 'nature':0, 'sweets':0, 'runelong':0, 'runefull':0, 'runelegs':0, 'runebaxe':0, 'runeaxe':0, 'runepick':0, 'runedagger':0, 'runeplate':0,
            'runeskirt':0, 'runekite':0, 'blackdchaps':0, 'blackdbody':0, 'magicshort':0, 'sarapage1':0, 'sarapage2':0, 'sarapage3':0, 'sarapage4':0, 'zammypage1':0, 'zammypage2':0,
            'zammypage3':0, 'zammypage4':0, 'guthixpage1':0, 'guthixpage2':0, 'guthixpage3':0, 'guthixpage4':0, 'bandospage1':0, 'bandospage2':0, 'bandospage3':0, 'bandospage4':0,
            'armadylpage1':0, 'armadylpage2':0, 'armadylpage3':0, 'armadylpage4':0, 'ancientpage1':0, 'ancientpage2':0, 'ancientpage3':0, 'ancientpage4':0, 'redlighter':0,
            'greenlighter':0, 'bluelighter':0, 'purplelighter':0, 'whitelighter':0, 'scrollbook':0, 'nardah':0, 'mosle':0, 'mortton':0, 'feldip':0, 'lunar':0, 'digsite':0, 'piscatoris':0,
            'pestcontrol':0, 'tai':0, 'lumberyard':0, 'chargedstone':0, 'elf':0, 'sarablessing':0, 'zammyblessing':0, 'guthixblessing':0, 'ancientblessing':0, 'bandosblessing':0,
            'armadylblessing':0, 'robin':0, 'platet':0, 'legst':0, 'skirtt':0, 'kitet':0, 'fullt':0, 'plateg':0, 'legsg':0, 'skirtg':0, 'kiteg':0, 'fullg':0, 'platez':0, 'legsz':0, 'skirtz':0, 'kitez':0,
            'fullz':0, 'plates':0, 'legss':0, 'skirts':0, 'kites':0, 'fulls':0, 'plateguthix':0, 'legsguthix':0, 'skirtguthix':0, 'kiteguthix':0, 'fullguthix':0, 'plateb':0, 'legsb':0, 'skirtb':0,
            'kiteb':0, 'fullb':0, 'platea':0, 'legsa':0, 'skirta':0, 'kitea':0, 'fulla':0, 'plateancient':0, 'legsancient':0, 'skirtancient':0, 'kiteancient':0, 'fullancient':0, 'tancav':0,
            'darkcav':0, 'blackcav':0, 'whitecav':0, 'redcav':0, 'navycav':0, 'piratehat':0, 'shield1':0, 'shield2':0, 'shield3':0, 'shield4':0, 'shield5':0, 'bluebodyg':0, 'bluechapsg':0,
            'bluebodyt':0, 'bluechapst':0, 'enchantedhat':0, 'enchantedtop':0, 'enchantedrobe':0, 'helm1':0, 'helm2':0, 'helm3':0, 'helm4':0, 'helm5':0, 'gloryt':0, 'zammycoif':0, 'zammybody':0,
            'zammychaps':0, 'zammybracers':0, 'zammyshield':0, 'zammyboots':0, 'guthixcoif':0, 'guthixbody':0, 'guthixchaps':0, 'guthixbracers':0, 'guthixshield':0, 'guthixboots':0,
            'saracoif':0, 'sarabody':0, 'sarachaps':0, 'sarabracers':0, 'sarashield':0, 'saraboots':0, 'bandoscoif':0, 'bandosbody':0, 'bandoschaps':0, 'bandosbracers':0, 'bandosshield':0,
            'bandosboots':0, 'armacoif':0, 'armabody':0, 'armachaps':0, 'armabracers':0, 'armashield':0, 'armaboots':0, 'ancientcoif':0, 'ancientbody':0, 'ancientchaps':0, 'ancientbracers':0,
            'ancientshield':0, 'ancientboots':0, 'zammycrozier':0, 'saracrozier':0, 'guthixcrozier':0, 'zammystole':0, 'sarastole':0, 'guthixstole':0, 'redbodyg':0, 'redchapsg':0,
            'redbodyt':0, 'redchapst':0, 'pith':0, 'explorer':0, 'greendmask':0, 'bluedmask':0, 'reddmask':0, 'blackdmask':0, 'zombie':0, 'nunchaku':0, 'cyclops':0, 'dbootorn':0, 'dualsai':0,
            'thieving':0, 'runedeforn':0, 'tzhaarorn':0, 'zerkorn':0, 'runecane':0, 'plate1':0, 'plate2':0, 'plate3':0, 'plate4':0, 'plate5':0, '3rdcoif':0, '3rdrangetop':0, '3rdrangelegs':0,
            '3rdvambs':0, '3rdrobetop':0, '3rdrobe':0, '3rdhat':0, '3rdamulet':0, '3rdhelm':0, '3rdplate':0, '3rdplatelegs':0, '3rdkite':0, '3rdplateskirt':0, 'superset':0, 'superenergy':0,
            'superrestore':0, 'antifire':0, 'gildfull':0, 'gildplate':0, 'gildlegs':0, 'gildskirt':0, 'gildkite':0, 'gildmed':0, 'gildchain':0, 'gildsquare':0, 'gild2h':0, 'gildspear':0,
            'gildhasta':0, 'magiclong':0, 'magiccompbow':0
        }

        for (var i = 0; i < x; i++) {
            var rewardsnum = Math.floor(Math.random() * 3) + 4;

            for (var ii = 0; ii < rewardsnum; ii++) {
                var roll = Math.floor(Math.random() * 13);
                // Rare loot table 1/13 chance
                if (roll == 12) {
                    var rareRoll = Math.floor(Math.random() * 125)
                    switch(rareRoll) {
                        case 0: dict["robin"]++; break;
                        case 1: dict["platet"]++; break;
                        case 2: dict["legst"]++; break;
                        case 3: dict["kitet"]++; break;
                        case 4: dict["fullt"]++; break;
                        case 5: dict["plateg"]++; break;
                        case 6: dict["legsg"]++; break;
                        case 7: dict["kiteg"]++; break;
                        case 8: dict["fullg"]++; break;
                        case 9: dict["platez"]++; break;
                        case 10: dict["legsz"]++; break;
                        case 11: dict["kitez"]++; break;
                        case 12: dict["fullz"]++; break;
                        case 13: dict["plates"]++; break;
                        case 14: dict["legss"]++; break;
                        case 15: dict["kites"]++; break;
                        case 16: dict["fulls"]++; break;
                        case 17: dict["plateguthix"]++; break;
                        case 18: dict["legsguthix"]++; break;
                        case 19: dict["kiteguthix"]++; break;
                        case 20: dict["fullguthix"]++; break;
                        case 21: dict["tancav"]++; break;
                        case 22: dict["darkcav"]++; break;
                        case 23: dict["blackcav"]++; break;
                        case 24: dict["piratehat"]++; break;
                        case 25: dict["skirtg"]++; break;
                        case 26: dict["skirtt"]++; break;
                        case 27: dict["skirtz"]++; break;
                        case 28: dict["skirts"]++; break;
                        case 29: dict["skirtguthix"]++; break;
                        case 30: dict["shield1"]++; break;
                        case 31: dict["shield2"]++; break;
                        case 32: dict["shield3"]++; break;
                        case 33: dict["shield4"]++; break;
                        case 34: dict["shield5"]++; break;
                        case 35: dict["bluebodyg"]++; break;
                        case 36: dict["bluebodyt"]++; break;
                        case 37: dict["bluechapsg"]++; break;
                        case 38: dict["bluechapst"]++; break;
                        case 39: dict["enchantedhat"]++; break;
                        case 40: dict["enchantedtop"]++; break;
                        case 41: dict["enchantedrobe"]++; break;
                        case 42: dict["helm1"]++; break;
                        case 43: dict["helm2"]++; break;
                        case 44: dict["helm3"]++; break;
                        case 45: dict["helm4"]++; break;
                        case 46: dict["helm5"]++; break;
                        case 47: dict["gloryt"]++; break;
                        case 48: dict["zammybracers"]++; break;
                        case 49: dict["zammybody"]++; break;
                        case 50: dict["zammychaps"]++; break;
                        case 51: dict["zammycoif"]++; break;
                        case 52: dict["guthixbracers"]++; break;
                        case 53: dict["guthixbody"]++; break;
                        case 54: dict["guthixchaps"]++; break;
                        case 55: dict["guthixcoif"]++; break;
                        case 56: dict["sarabracers"]++; break;
                        case 57: dict["sarabody"]++; break;
                        case 58: dict["sarachaps"]++; break;
                        case 59: dict["saracoif"]++; break;
                        case 60: dict["saracrozier"]++; break;
                        case 61: dict["guthixcrozier"]++; break;
                        case 62: dict["zammycrozier"]++; break;
                        case 63: dict["sarastole"]++; break;
                        case 64: dict["guthixstole"]++; break;
                        case 65: dict["zammystole"]++; break;
                        case 66: dict["redbodyg"]++; break;
                        case 67: dict["redchapsg"]++; break;
                        case 68: dict["redbodyt"]++; break;
                        case 69: dict["redchapst"]++; break;
                        case 70: dict["whitecav"]++; break;
                        case 71: dict["redcav"]++; break;
                        case 72: dict["navycav"]++; break;
                        case 73: dict["pith"]++; break;
                        case 74: dict["explorer"]++; break;
                        case 75: dict["plateb"]++; break;
                        case 76: dict["legsb"]++; break;
                        case 77: dict["skirtb"]++; break;
                        case 78: dict["fullb"]++; break;
                        case 79: dict["kiteb"]++; break;
                        case 80: dict["platea"]++; break;
                        case 81: dict["legsa"]++; break;
                        case 82: dict["skirta"]++; break;
                        case 83: dict["fulla"]++; break;
                        case 84: dict["kitea"]++; break;
                        case 85: dict["plateancient"]++; break;
                        case 86: dict["legsancient"]++; break;
                        case 87: dict["skirtancient"]++; break;
                        case 88: dict["fullancient"]++; break;
                        case 89: dict["kiteancient"]++; break;
                        case 90: dict["ancientbracers"]++; break;
                        case 91: dict["ancientbody"]++; break;
                        case 92: dict["ancientchaps"]++; break;
                        case 93: dict["ancientcoif"]++; break;
                        case 94: dict["bandosbracers"]++; break;
                        case 95: dict["bandosbody"]++; break;
                        case 96: dict["bandoschaps"]++; break;
                        case 97: dict["bandoscoif"]++; break;
                        case 98: dict["armabracers"]++; break;
                        case 99: dict["armabody"]++; break;
                        case 100: dict["armachaps"]++; break;
                        case 101: dict["armacoif"]++; break;
                        case 102: dict["greendmask"]++; break;
                        case 103: dict["bluedmask"]++; break;
                        case 104: dict["reddmask"]++; break;
                        case 105: dict["blackdmask"]++; break;
                        case 106: dict["zombie"]++; break;
                        case 107: dict["nunchaku"]++; break;
                        case 108: dict["cyclops"]++; break;
                        case 109: dict["ancientboots"]++; break;
                        case 110: dict["bandosboots"]++; break;
                        case 111: dict["guthixboots"]++; break;
                        case 112: dict["armaboots"]++; break;
                        case 113: dict["saraboots"]++; break;
                        case 114: dict["zammyboots"]++; break;
                        case 115: dict["dbootorn"]++; break;
                        case 116: dict["dualsai"]++; break;
                        case 117: dict["thieving"]++; break;
                        case 118: dict["runedeforn"]++; break;
                        case 119: dict["tzhaarorn"]++; break;
                        case 120: dict["zerkorn"]++; break;
                        case 121: dict["runecane"]++; break;
                        // Mega rare table
                        case 122: {
                            var megaRareRoll = Math.floor(Math.random() * 10);
                            switch (true) {

                                // 1/2 chance of hitting gilded table, accounted for below
                                case (megaRareRoll < 5): {
                                    switch(Math.floor(Math.random() * 11)) {
                                        case 0: dict["gildplate"]++; break;
                                        case 1: dict["gildlegs"]++; break;
                                        case 2: dict["gildskirt"]++; break;
                                        case 3: dict["gildfull"]++; break;
                                        case 4: dict["gildkite"]++; break;
                                        case 5: dict["gildmed"]++; break;
                                        case 6: dict["gildchain"]++; break;
                                        case 7: dict["gildsquare"]++; break;
                                        case 8: dict["gild2h"]++; break;
                                        case 9: dict["gildspear"]++; break;
                                        case 10: dict["gildhasta"]++; break;

                                    }
                                } break;

                                // Hard potion table 1/10 from mega rares accounted for below
                                case (megaRareRoll == 5): dict["superset"]++; break;
                                // Super Energy 1/10 on mega rares accounted for below
                                case (megaRareRoll == 6): dict["superenergy"] += 15; break;
                                // Super Restore 1/10 on mega rares accounted for below
                                case (megaRareRoll == 7): dict["superrestore"] += 15; break;
                                // Antifire 1/10 on mega rares accounted for below
                                case (megaRareRoll == 8): dict["antifire"] += 15; break;

                                // 3rd Age Table 1/10 on mega rare table accounted for below
                                case (megaRareRoll == 9): {
                                    switch(Math.floor(Math.random() * 13)) {
                                        case 0: dict["3rdcoif"]++; break;
                                        case 1: dict["3rdrangetop"]++; break;
                                        case 2: dict["3rdrangelegs"]++; break;
                                        case 3: dict["3rdvambs"]++; break;
                                        case 4: dict["3rdrobetop"]++; break;
                                        case 5: dict["3rdrobe"]++; break;
                                        case 6: dict["3rdhat"]++; break;
                                        case 7: dict["3rdamulet"]++; break;
                                        case 8: dict["3rdplate"]++; break;
                                        case 9: dict["3rdplatelegs"]++; break;
                                        case 10: dict["3rdplateskirt"]++; break;
                                        case 11: dict["3rdkite"]++; break;
                                        case 12: dict["3rdhelm"]++; break;
                                    }
                                } break;
                            }
                        } break;

                        // Hard blessed shields table
                        case 123: {
                            switch(Math.floor(Math.random() * 6)) {
                                case 0: dict["guthixshield"]++; break;
                                case 1: dict["sarashield"]++; break;
                                case 2: dict["zammyshield"]++; break;
                                case 3: dict["ancientshield"]++; break;
                                case 4: dict["armashield"]++; break;
                                case 5: dict["bandosshield"]++; break;
                            }
                        } break;

                        // Hard Heraldic plate table
                        case 124: {
                            switch(Math.floor(Math.random() * 5)) {
                                case 0: dict["plate1"]++; break;
                                case 1: dict["plate2"]++; break;
                                case 2: dict["plate3"]++; break;
                                case 3: dict["plate4"]++; break;
                                case 4: dict["plate5"]++; break;
                            }
                        } break;

                    }
                }
                // Standard loot table 12/13 chance
                else {
                    switch(Math.floor(Math.random() * 25)) {
                        case 0: dict["coins"] += 1000 + Math.floor(Math.random() * 4000) + 1; break;
                        case 1: dict["lobster"] += 12 + Math.floor(Math.random() * 3) + 1; break;
                        case 2: dict["shark"] += 12 + Math.floor(Math.random() * 3) + 1; break;
                        case 3: dict["law"] += 30 + Math.floor(Math.random() * 20) + 1; break;
                        case 4: dict["blood"] += 20 + Math.floor(Math.random() * 10) + 1; break;
                        case 5: dict["nature"] += 30 + Math.floor(Math.random() * 20) + 1; break;
                        case 6: dict["sweets"] += 7 + Math.floor(Math.random() * 8) + 1; break;
                        case 7: dict["runelong"]++; break;
                        case 8: dict["runefull"]++; break;
                        case 9: dict["runelegs"]++; break;
                        case 10: dict["runebaxe"]++; break;
                        case 11: dict["runeaxe"]++; break;
                        case 12: dict["runepick"]++; break;
                        case 13: dict["runedagger"]++; break;
                        case 14: dict["runeplate"]++; break;
                        case 15: dict["runeskirt"]++; break;
                        case 16: dict["runekite"]++; break;
                        case 17: dict["blackdchaps"]++; break;
                        case 18: dict["blackdbody"]++; break;
                        case 19: dict["magicshort"]++; break;

                        // Prayer page table
                        case 20: {
                            switch(Math.floor(Math.random() * 24)) {
                                case 0: dict["sarapage1"]++; break;
                                case 1: dict["sarapage2"]++; break;
                                case 2: dict["sarapage3"]++; break;
                                case 3: dict["sarapage4"]++; break;
                                case 4: dict["guthixpage1"]++; break;
                                case 5: dict["guthixpage2"]++; break;
                                case 6: dict["guthixpage3"]++; break;
                                case 7: dict["guthixpage4"]++; break;
                                case 8: dict["zammypage1"]++; break;
                                case 9: dict["zammypage2"]++; break;
                                case 10: dict["zammypage3"]++; break;
                                case 11: dict["zammypage4"]++; break;
                                case 12: dict["bandospage1"]++; break;
                                case 13: dict["bandospage2"]++; break;
                                case 14: dict["bandospage3"]++; break;
                                case 15: dict["bandospage4"]++; break;
                                case 16: dict["armadylpage1"]++; break;
                                case 17: dict["armadylpage2"]++; break;
                                case 18: dict["armadylpage3"]++; break;
                                case 19: dict["armadylpage4"]++; break;
                                case 20: dict["ancientpage1"]++; break;
                                case 21: dict["ancientpage2"]++; break;
                                case 22: dict["ancientpage3"]++; break;
                                case 23: dict["ancientpage4"]++; break;
                            }
                        } break;

                        // Firelighter table
                        case 21: {
                            switch(Math.floor(Math.random() * 5)) {
                                case 0: dict["redlighter"] += 9 + Math.floor(Math.random() * 7); break;
                                case 1: dict["greenlighter"] += 9 + Math.floor(Math.random() * 7); break;
                                case 2: dict["bluelighter"] += 9 + Math.floor(Math.random() * 7); break;
                                case 3: dict["purplelighter"] += 9 + Math.floor(Math.random() * 7); break;
                                case 4: dict["whitelighter"] += 9 + Math.floor(Math.random() * 7); break;
                            }
                        } break;

                        // Teleport scroll table
                        case 22: {
                            var bookRoll = Math.floor(Math.random() * 22)
                            if (bookRoll === 1) dict["scrollbook"]++;
                            else {
                                switch(Math.floor(Math.random() * 12)) {
                                    case 0: dict["nardah"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 1: dict["mosle"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 2: dict["mortton"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 3: dict["feldip"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 4: dict["lunar"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 5: dict["digsite"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 6: dict["piscatoris"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 7: dict["pestcontrol"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 8: dict["tai"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 9: dict["lumberyard"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 10: dict["chargedstone"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 11: dict["elf"] += 5 + Math.floor(Math.random() * 11); break;
                                }
                            }
                        } break;

                        // Blessing table
                        case 23: {
                            //alert("in blessing table")
                            var blessingRoll = Math.floor(Math.random() * 20)
                            switch (true) {
                                case (blessingRoll < 7): dict["coins"] += 10000 + Math.floor(Math.random() * 5001); break;
                                case (blessingRoll > 6 && blessingRoll < 14): dict["sweets"] += 8 + Math.floor(Math.random() * 5); break;
                                case (blessingRoll == 14): dict["sarablessing"]++; break;
                                case (blessingRoll == 15): dict["zammyblessing"]++; break;
                                case (blessingRoll == 16): dict["guthixblessing"]++; break;
                                case (blessingRoll == 17): dict["bandosblessing"]++; break;
                                case (blessingRoll == 18): dict["armadylblessing"]++; break;
                                case (blessingRoll == 19): dict["ancientblessing"]++; break;
                            }
                        } break;

                        // Hard bow table
                        case 24: {
                            var bowRoll = Math.floor(Math.random() * 10);
                            switch(true) {
                                case (bowRoll < 9): dict["magiclong"]++; break;
                                case (bowRoll == 9): dict["magiccompbow"]++; break;
                            }
                        } break;
                    }
                }
            }
        }
        return dict;
    }
    else {
        return 0;
    }
}

function xEliteClues(x) {

    if (x <= 20000 && x > 0) {
        var dict = {
            'coins':0, 'tunapotato':0, 'summerpie':0, 'law':0, 'blood':0,
            'death':0, 'soul':0, 'sweets':0, 'oakplank':0, 'teakplank':0,
            'mahoganyplank':0, 'dstonebrace':0, 'dstonenecklace':0, 'dstonering':0, 'runebar':0,
            'onyxtips':0, 'dragondagger':0, 'dragonlong':0, 'runeplate':0, 'runelegs':0,
            'runeskirt':0, 'runekite':0, 'dragonmace':0, 'runecbow':0, 'magicseed':0,
            'yewseed':0, 'palmseed':0, 'sarapage1':0, 'sarapage2':0, 'sarapage3':0,
            'sarapage4':0, 'zammypage1':0, 'zammypage2':0, 'zammypage3':0, 'zammypage4':0,
            'guthixpage1':0, 'guthixpage2':0, 'guthixpage3':0, 'guthixpage4':0, 'bandospage1':0,
            'bandospage2':0, 'bandospage3':0, 'bandospage4':0, 'armadylpage1':0, 'armadylpage2':0,
            'armadylpage3':0, 'armadylpage4':0, 'ancientpage1':0, 'ancientpage2':0, 'ancientpage3':0, 'ancientpage4':0,
            'redlighter':0, 'greenlighter':0, 'bluelighter':0, 'purplelighter':0, 'whitelighter':0,
            'loophalf':0, 'teethhalf':0, 'scrollbook':0, 'nardah':0, 'mosle':0,
            'mortton':0, 'feldip':0, 'lunar':0, 'digsite':0, 'piscatoris':0,
            'pestcontrol':0, 'tai':0, 'lumberyard':0, 'chargedstone':0, 'elf':0,
            'sarablessing':0, 'zammyblessing':0, 'guthixblessing':0, 'ancientblessing':0, 'bandosblessing':0,
            'armadylblessing':0, 'dragoncane':0, 'briefcase':0, 'spectacles':0, 'royalcrown':0,
            'royalscepter':0, 'royaltop':0, 'royalbottom':0, 'furyorn':0, 'dchainorn':0,
            'dlegorn':0, 'dsqorn':0, 'dfullorn':0, 'bronzemask':0, 'ironmask':0,
            'steelmask':0, 'mithrilmask':0, 'afro':0, 'katana':0, 'bigpiratehat':0,
            'tophat':0, 'monacle':0, 'lightinfkit':0, 'darkinfkit':0, 'blackchapst':0,
            'blackchapsg':0, 'blackbodyt':0, 'blackbodyg':0, 'musketeerhat':0, 'musketeertop':0,
            'musketeerlegs':0, 'deerstalker':0, 'blacksmithhelm':0, 'arceuusscarf':0, 'hosidiusscarf':0,
            'lovascarf':0, 'piscscarf':0, 'shayzscarf':0, 'dragscimorn':0, 'holywraps':0,
            'rangergloves':0, 'buckethelm':0, 'fremmykilt':0, 'addymask':0, 'runemask':0,
            'rangertights':0, 'urishat':0, 'giantboot':0, 'rangertunic':0, 'darktuxjacket':0,
            'darktuxcuffs':0, 'darktrousers':0, 'darktuxshoes':0, 'darkbowtie':0, 'lighttuxjacket':0,
            'lighttuxcuffs':0, 'lighttrousers':0, 'lighttuxshoes':0, 'lightbowtie':0, '3rdcoif':0,
            '3rdrangetop':0, '3rdrangelegs':0, '3rdvambs':0, '3rdrobetop':0, '3rdrobe':0,
            '3rdhat':0, '3rdamulet':0, '3rdhelm':0, '3rdplate':0, '3rdplatelegs':0,
            '3rdkite':0, '3rdplateskirt':0, '3rdsword':0, '3rdcape':0, '3rdwand':0,
            '3rdbow':0, 'extantifire':0, 'rangepot':0, 'sarabrew':0, 'suprestore':0,
            'bstaff':0, 'crystalkey':0, 'lavamask':0, 'ringnature':0, 'gildscim':0,
            'gildboots':0, 'gildcoif':0, 'gildvambs':0, 'gilddtop':0, 'gilddchaps':0,
            'gildpick':0, 'gildaxe':0, 'gildspade':0, 'gildfull':0, 'gildplate':0,
            'gildlegs':0, 'gildskirt':0, 'gildkite':0, 'gildmed':0, 'gildchain':0,
            'gildsquare':0, 'gild2h':0, 'gildspear':0, 'gildhasta':0
        }

        for (var i = 0; i < x; i++) {
            var rewardsnum = Math.floor(Math.random() * 3) + 4;

            for (var ii = 0; ii < rewardsnum; ii++) {
                var roll = Math.floor(Math.random() * 25);
                // Rare loot table 1/25 chance
                if (roll == 24) {
                    switch(Math.floor(Math.random() * 50)) {
                        case 0: dict["dragoncane"]++; break;
                        case 1: dict["briefcase"]++; break;
                        case 2: dict["spectacles"]++; break;
                        case 3: dict["royalcrown"]++; break;
                        case 4: dict["royalscepter"]++; break;
                        case 5: dict["royaltop"]++; break;
                        case 6: dict["royalbottom"]++; break;
                        case 7: dict["furyorn"]++; break;
                        case 8: dict["dchainorn"]++; break;
                        case 9: dict["dlegorn"]++; break;
                        case 10: dict["dsqorn"]++; break;
                        case 11: dict["dfullorn"]++; break;
                        case 12: dict["bronzemask"]++; break;
                        case 13: dict["ironmask"]++; break;
                        case 14: dict["steelmask"]++; break;
                        case 15: dict["mithrilmask"]++; break;
                        case 16: dict["afro"]++; break;
                        case 17: dict["katana"]++; break;
                        case 18: dict["bigpiratehat"]++; break;
                        case 19: dict["tophat"]++; break;
                        case 20: dict["monacle"]++; break;
                        case 21: dict["lightinfkit"]++; break;
                        case 22: dict["darkinfkit"]++; break;
                        case 23: dict["blackchapst"]++; break;
                        case 24: dict["blackchapsg"]++; break;
                        case 25: dict["blackbodyt"]++; break;
                        case 26: dict["blackbodyg"]++; break;
                        case 27: dict["musketeerhat"]++; break;
                        case 28: dict["musketeertop"]++; break;
                        case 29: dict["musketeerlegs"]++; break;
                        case 30: dict["deerstalker"]++; break;
                        case 31: dict["blacksmithhelm"]++; break;
                        case 32: dict["arceuusscarf"]++; break;
                        case 33: dict["hosidiusscarf"]++; break;
                        case 34: dict["lovascarf"]++; break;
                        case 35: dict["piscscarf"]++; break;
                        case 36: dict["shayzscarf"]++; break;
                        case 37: dict["dragscimorn"]++; break;
                        case 38: dict["holywraps"]++; break;
                        case 39: dict["rangergloves"]++; break;
                        case 40: dict["buckethelm"]++; break;
                        case 41: dict["fremmykilt"]++; break;
                        case 42: dict["addymask"]++; break;
                        case 43: dict["runemask"]++; break;
                        case 44: dict["rangertights"]++; break;
                        case 45: dict["urishat"]++; break;
                        case 46: dict["giantboot"]++; break;
                        case 47: dict["rangertunic"]++; break;

                        //elite mega rare table
                        case 48: {
                            var megaroll = Math.floor(Math.random() * 23);
                            switch(true) {
                                case (megaroll == 0): dict["gildscim"]++; break;
                                case (megaroll == 1): dict["gildboots"]++; break;
                                case (megaroll == 2): dict["bstaff"] += 100; break;
                                case (megaroll == 3): dict["crystalkey"]++; break;
                                case (megaroll == 4): dict["lavamask"]++; break;
                                case (megaroll == 5): dict["rangepot"] += 30; break;
                                case (megaroll == 6): dict["sarabrew"] += 30; break;
                                case (megaroll == 7): dict["suprestore"] += 30; break;
                                case (megaroll == 8): dict["ringnature"]++; break;
                                case (megaroll == 9): dict["extantifire"] += 30; break;
                                case (megaroll == 10): dict["gildcoif"]++; break;
                                case (megaroll == 11): dict["gildvambs"]++; break;
                                case (megaroll == 12): dict["gilddtop"]++; break;
                                case (megaroll == 13): dict["gilddchaps"]++; break;
                                case (megaroll == 14): dict["gildpick"]++; break;
                                case (megaroll == 15): dict["gildaxe"]++; break;
                                case (megaroll == 16): dict["gildspade"]++; break;
                                // 3rd age table
                                case (megaroll == 17): {
                                    switch(Math.floor(Math.random() * 17)) {
                                        case 0: dict["3rdcoif"]++; break;
                                        case 1: dict["3rdrangetop"]++; break;
                                        case 2: dict["3rdrangelegs"]++; break;
                                        case 3: dict["3rdvambs"]++; break;
                                        case 4: dict["3rdrobetop"]++; break;
                                        case 5: dict["3rdrobe"]++; break;
                                        case 6: dict["3rdhat"]++; break;
                                        case 7: dict["3rdamulet"]++; break;
                                        case 8: dict["3rdplate"]++; break;
                                        case 9: dict["3rdplatelegs"]++; break;
                                        case 10: dict["3rdplateskirt"]++; break;
                                        case 11: dict["3rdkite"]++; break;
                                        case 12: dict["3rdhelm"]++; break;
                                        case 13: dict["3rdsword"]++; break;
                                        case 14: dict["3rdcape"]++; break;
                                        case 15: dict["3rdbow"]++; break;
                                        case 16: dict["3rdwand"]++; break;
                                    }
                                } break;
                                // gilded table
                                case (megaroll < 22): {
                                    switch(Math.floor(Math.random() * 11)) {
                                        case 0: dict["gildplate"]++; break;
                                        case 1: dict["gildlegs"]++; break;
                                        case 2: dict["gildskirt"]++; break;
                                        case 3: dict["gildfull"]++; break;
                                        case 4: dict["gildkite"]++; break;
                                        case 5: dict["gildmed"]++; break;
                                        case 6: dict["gildchain"]++; break;
                                        case 7: dict["gildsquare"]++; break;
                                        case 8: dict["gild2h"]++; break;
                                        case 9: dict["gildspear"]++; break;
                                        case 10: dict["gildhasta"]++; break;

                                    }
                                } break;
                            }
                        } break;

                        case 49: {
                            switch(Math.floor(Math.random() * 10)) {
                                case 0: dict["darktuxjacket"]++; break;
                                case 1: dict["darktuxcuffs"]++; break;
                                case 2: dict["darktrousers"]++; break;
                                case 3: dict["darktuxshoes"]++; break;
                                case 4: dict["darkbowtie"]++; break;
                                case 5: dict["lighttuxjacket"]++; break;
                                case 6: dict["lighttuxcuffs"]++; break;
                                case 7: dict["lighttrousers"]++; break;
                                case 8: dict["lighttuxshoes"]++; break;
                                case 9: dict["lightbowtie"]++; break;
                            }
                        } break;
                    }
                }
                // Standard loot table 12/13 chance
                else {
                    switch(Math.floor(Math.random() * 31)) {
                        case 0: dict["coins"] += 1000 + Math.floor(Math.random() * 10001) + 20000; break;
                        case 1: dict["tunapotato"] += Math.floor(Math.random() * 6) + 15; break;
                        case 2: dict["summerpie"] += Math.floor(Math.random() * 6) + 15; break;
                        case 3: dict["law"] += Math.floor(Math.random() * 26) + 50; break;
                        case 4: dict["blood"] += Math.floor(Math.random() * 26) + 50; break;
                        case 5: dict["death"] += Math.floor(Math.random() * 26) + 50; break;
                        case 6: dict["sweets"] += Math.floor(Math.random() * 15) + 9; break;
                        case 7: dict["soul"] += Math.floor(Math.random() * 26) + 50; break;
                        case 8: dict["oakplank"] += Math.floor(Math.random() * 21) + 60; break;
                        case 9: dict["runelegs"]++; break;
                        case 10: dict["teakplank"] += Math.floor(Math.random() * 11) + 40; break;
                        case 11: dict["mahoganyplank"] += Math.floor(Math.random() * 11) + 20; break;
                        case 12: dict["dstonebrace"]++; break;
                        case 13: dict["dstonenecklace"]++; break;
                        case 14: dict["runeplate"]++; break;
                        case 15: dict["runeskirt"]++; break;
                        case 16: dict["runekite"]++; break;
                        case 17: dict["dstonering"]++; break;
                        case 18: dict["runebar"] += Math.floor(Math.random() * 3) + 1; break;
                        case 19: dict["onyxtips"] += Math.floor(Math.random() * 5) + 8; break;
                        case 20: dict["dragondagger"]++; break;
                        case 21: dict["dragonlong"]++; break;
                        case 22: dict["dragonmace"]++; break;
                        case 23: dict["runecbow"]++; break;
                        case 24: {
                            switch(Math.floor(Math.random() * 3)) {
                                case 0: dict["magicseed"]++; break;
                                case 1: dict["yewseed"]++; break;
                                case 2: dict["palmseed"]++; break;
                            }
                        } break;

                        case 25: {
                            switch(Math.floor(Math.random() * 24)) {
                                case 0: dict["sarapage1"]++; break;
                                case 1: dict["sarapage2"]++; break;
                                case 2: dict["sarapage3"]++; break;
                                case 3: dict["sarapage4"]++; break;
                                case 4: dict["guthixpage1"]++; break;
                                case 5: dict["guthixpage2"]++; break;
                                case 6: dict["guthixpage3"]++; break;
                                case 7: dict["guthixpage4"]++; break;
                                case 8: dict["zammypage1"]++; break;
                                case 9: dict["zammypage2"]++; break;
                                case 10: dict["zammypage3"]++; break;
                                case 11: dict["zammypage4"]++; break;
                                case 12: dict["bandospage1"]++; break;
                                case 13: dict["bandospage2"]++; break;
                                case 14: dict["bandospage3"]++; break;
                                case 15: dict["bandospage4"]++; break;
                                case 16: dict["armadylpage1"]++; break;
                                case 17: dict["armadylpage2"]++; break;
                                case 18: dict["armadylpage3"]++; break;
                                case 19: dict["armadylpage4"]++; break;
                                case 20: dict["ancientpage1"]++; break;
                                case 21: dict["ancientpage2"]++; break;
                                case 22: dict["ancientpage3"]++; break;
                                case 23: dict["ancientpage4"]++; break;
                            }
                        } break;

                        case 26:  {
                            switch(Math.floor(Math.random() * 5)) {
                                case 0: dict["redlighter"] += 9 + Math.floor(Math.random() * 7); break;
                                case 1: dict["greenlighter"] += 9 + Math.floor(Math.random() * 7); break;
                                case 2: dict["bluelighter"] += 9 + Math.floor(Math.random() * 7); break;
                                case 3: dict["purplelighter"] += 9 + Math.floor(Math.random() * 7); break;
                                case 4: dict["whitelighter"] += 9 + Math.floor(Math.random() * 7); break;
                            }
                        } break;

                        case 27: {
                            switch(Math.floor(Math.random() * 2)) {
                                case 0: dict["teethhalf"]++; break;
                                case 1: dict["loophalf"]++; break;
                            }
                        } break;

                        case 28: {
                            var bookRoll = Math.floor(Math.random() * 22)
                            if (bookRoll == 1) dict["scrollbook"]++;
                            else {
                                switch(Math.floor(Math.random() * 12)) {
                                    case 0: dict["nardah"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 1: dict["mosle"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 2: dict["mortton"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 3: dict["feldip"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 4: dict["lunar"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 5: dict["digsite"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 6: dict["piscatoris"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 7: dict["pestcontrol"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 8: dict["tai"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 9: dict["lumberyard"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 10: dict["chargedstone"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 11: dict["elf"] += 5 + Math.floor(Math.random() * 11); break;
                                }
                            }
                        } break;

                        case 29: {
                            var bookRoll = Math.floor(Math.random() * 22)
                            if (bookRoll === 1) dict["scrollbook"]++;
                            else {
                                switch(Math.floor(Math.random() * 12)) {
                                    case 0: dict["nardah"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 1: dict["mosle"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 2: dict["mortton"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 3: dict["feldip"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 4: dict["lunar"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 5: dict["digsite"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 6: dict["piscatoris"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 7: dict["pestcontrol"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 8: dict["tai"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 9: dict["lumberyard"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 10: dict["chargedstone"] += 5 + Math.floor(Math.random() * 11); break;
                                    case 11: dict["elf"] += 5 + Math.floor(Math.random() * 11); break;
                                }
                            }
                        } break;

                        case 30: {
                            var blessingRoll = Math.floor(Math.random() * 20)
                            switch (true) {
                                case (blessingRoll < 7): dict["coins"] += 10000 + Math.floor(Math.random() * 5001); break;
                                case (blessingRoll > 6 && blessingRoll < 14): dict["sweets"] += 8 + Math.floor(Math.random() * 5); break;
                                case (blessingRoll == 14): dict["sarablessing"]++; break;
                                case (blessingRoll == 15): dict["zammyblessing"]++; break;
                                case (blessingRoll == 16): dict["guthixblessing"]++; break;
                                case (blessingRoll == 17): dict["bandosblessing"]++; break;
                                case (blessingRoll == 18): dict["armadylblessing"]++; break;
                                case (blessingRoll == 19): dict["ancientblessing"]++; break;
                            }
                        } break;
                    }
                }
            }
        }
        return dict;
    }
    else {
        return 0;
    }
}