// grab the settings entered by the
// user on the html page and return them as a dictionary
function settings() {
    // dict will hold the settings that will need to be used later
    var dict = {"experience":0, "desired":0, "type":"none", "dodgy":false, "shadow":false, "gloves":false, "ardydiary":false, "thievcape":false};
    // if they entered levels, turn that into exp and set in dict
    if (document.getElementById("level").checked
        && document.getElementById("current-thiev-level").value < 100
        && document.getElementById("desired-thiev-level").value < 100) {
        dict["type"] = "level";
        dict["experience"] = document.getElementById("current-thiev-level").value;
        dict["desired"] = document.getElementById("desired-thiev-level").value;
    }
    // if they entered exp, set that in dict
    else if (document.getElementById("experience").checked
        && document.getElementById("current-thiev-level").value < 200000001
        && document.getElementById("desired-thiev-level").value < 200000001) {
        dict["type"] = "experience";
        dict["experience"] = document.getElementById("current-thiev-level").value;
        dict["desired"] = document.getElementById("desired-thiev-level").value;
    }
    // set other settings to what boxes are checked
    dict["dodgy"] = document.getElementById("dodgy").checked;
    dict["shadow"] = document.getElementById("shadow-veil").checked;
    dict["gloves"] = document.getElementById("gloves").checked;
    dict["ardydiary"] = document.getElementById("ardy").checked;
    dict["thievcape"] = document.getElementById("thiev-cape").checked;

    return dict;
}

// rates from osrs wiki
var masterFarmerBase = [{"y":0.35546875,"x":1},{"y":0.359375,"x":2},{"y":0.36328125,"x":3},{"y":0.37109375,"x":4},{"y":0.375,"x":5},{"y":0.3828125,"x":6},{"y":0.38671875,"x":7},{"y":0.39453125,"x":8},{"y":0.3984375,"x":9},{"y":0.40625,"x":10},{"y":0.41015625,"x":11},{"y":0.4140625,"x":12},{"y":0.421875,"x":13},{"y":0.4296875,"x":14},{"y":0.4375,"x":15},{"y":0.44140625,"x":16},{"y":0.44921875,"x":17},{"y":0.453125,"x":18},{"y":0.4609375,"x":19},{"y":0.46484375,"x":20},{"y":0.46875,"x":21},{"y":0.4765625,"x":22},{"y":0.48046875,"x":23},{"y":0.48828125,"x":24},{"y":0.4921875,"x":25},{"y":0.50390625,"x":26},{"y":0.5078125,"x":27},{"y":0.515625,"x":28},{"y":0.51953125,"x":29},{"y":0.52734375,"x":30},{"y":0.53125,"x":31},{"y":0.53515625,"x":32},{"y":0.54296875,"x":33},{"y":0.546875,"x":34},{"y":0.5546875,"x":35},{"y":0.55859375,"x":36},{"y":0.56640625,"x":37},{"y":0.57421875,"x":38},{"y":0.58203125,"x":39},{"y":0.5859375,"x":40},{"y":0.58984375,"x":41},{"y":0.59765625,"x":42},{"y":0.6015625,"x":43},{"y":0.609375,"x":44},{"y":0.61328125,"x":45},{"y":0.62109375,"x":46},{"y":0.625,"x":47},{"y":0.6328125,"x":48},{"y":0.63671875,"x":49},{"y":0.6484375,"x":50},{"y":0.65234375,"x":51},{"y":0.65625,"x":52},{"y":0.6640625,"x":53},{"y":0.66796875,"x":54},{"y":0.67578125,"x":55},{"y":0.6796875,"x":56},{"y":0.6875,"x":57},{"y":0.69140625,"x":58},{"y":0.69921875,"x":59},{"y":0.703125,"x":60},{"y":0.70703125,"x":61},{"y":0.71484375,"x":62},{"y":0.72265625,"x":63},{"y":0.73046875,"x":64},{"y":0.734375,"x":65},{"y":0.7421875,"x":66},{"y":0.74609375,"x":67},{"y":0.75390625,"x":68},{"y":0.7578125,"x":69},{"y":0.76171875,"x":70},{"y":0.76953125,"x":71},{"y":0.7734375,"x":72},{"y":0.78125,"x":73},{"y":0.78515625,"x":74},{"y":0.796875,"x":75},{"y":0.80078125,"x":76},{"y":0.80859375,"x":77},{"y":0.8125,"x":78},{"y":0.8203125,"x":79},{"y":0.82421875,"x":80},{"y":0.828125,"x":81},{"y":0.8359375,"x":82},{"y":0.83984375,"x":83},{"y":0.84765625,"x":84},{"y":0.8515625,"x":85},{"y":0.859375,"x":86},{"y":0.8671875,"x":87},{"y":0.875,"x":88},{"y":0.87890625,"x":89},{"y":0.8828125,"x":90},{"y":0.890625,"x":91},{"y":0.89453125,"x":92},{"y":0.90234375,"x":93},{"y":0.90625,"x":94},{"y":0.9140625,"x":95},{"y":0.91796875,"x":96},{"y":0.92578125,"x":97},{"y":0.9296875,"x":98},{"y":0.94140625,"x":99}];
var masterFarmerGloves = [{"y":0.37109375,"x":1},{"y":0.375,"x":2},{"y":0.3828125,"x":3},{"y":0.38671875,"x":4},{"y":0.39453125,"x":5},{"y":0.3984375,"x":6},{"y":0.40625,"x":7},{"y":0.4140625,"x":8},{"y":0.41796875,"x":9},{"y":0.42578125,"x":10},{"y":0.4296875,"x":11},{"y":0.4375,"x":12},{"y":0.44140625,"x":13},{"y":0.44921875,"x":14},{"y":0.45703125,"x":15},{"y":0.4609375,"x":16},{"y":0.46875,"x":17},{"y":0.47265625,"x":18},{"y":0.48046875,"x":19},{"y":0.484375,"x":20},{"y":0.4921875,"x":21},{"y":0.5,"x":22},{"y":0.50390625,"x":23},{"y":0.51171875,"x":24},{"y":0.515625,"x":25},{"y":0.52734375,"x":26},{"y":0.53125,"x":27},{"y":0.5390625,"x":28},{"y":0.546875,"x":29},{"y":0.55078125,"x":30},{"y":0.55859375,"x":31},{"y":0.5625,"x":32},{"y":0.5703125,"x":33},{"y":0.57421875,"x":34},{"y":0.58203125,"x":35},{"y":0.58984375,"x":36},{"y":0.59375,"x":37},{"y":0.6015625,"x":38}, {"y":0.60546875,"x":39},{"y":0.61328125,"x":40},{"y":0.6171875,"x":41},{"y":0.625,"x":42},{"y":0.6328125,"x":43},{"y":0.63671875,"x":44},{"y":0.64453125,"x":45},{"y":0.6484375,"x":46},{"y":0.65625,"x":47},{"y":0.66015625,"x":48},{"y":0.66796875,"x":49},{"y":0.6796875,"x":50},{"y":0.68359375,"x":51},{"y":0.69140625,"x":52},{"y":0.6953125,"x":53},{"y":0.703125,"x":54},{"y":0.70703125,"x":55},{"y":0.71484375,"x":56},{"y":0.72265625,"x":57},{"y":0.7265625,"x":58},{"y":0.734375,"x":59},{"y":0.73828125,"x":60},{"y":0.74609375,"x":61},{"y":0.75,"x":62},{"y":0.7578125,"x":63},{"y":0.765625,"x":64},{"y":0.76953125,"x":65},{"y":0.77734375,"x":66},{"y":0.78125,"x":67},{"y":0.7890625,"x":68},{"y":0.79296875,"x":69},{"y":0.80078125,"x":70},{"y":0.80859375,"x":71},{"y":0.8125,"x":72},{"y":0.8203125,"x":73},{"y":0.82421875,"x":74},{"y":0.8359375,"x":75},{"y":0.83984375,"x":76},{"y":0.84765625,"x":77},{"y":0.85546875,"x":78},{"y":0.859375,"x":79},{"y":0.8671875,"x":80},{"y":0.87109375,"x":81},{"y":0.87890625,"x":82},{"y":0.8828125,"x":83},{"y":0.890625,"x":84},{"y":0.8984375,"x":85},{"y":0.90234375,"x":86},{"y":0.91015625,"x":87},{"y":0.9140625,"x":88},{"y":0.921875,"x":89},{"y":0.92578125,"x":90},{"y":0.93359375,"x":91},{"y":0.94140625,"x":92},{"y":0.9453125,"x":93},{"y":0.953125,"x":94},{"y":0.95703125,"x":95},{"y":0.96484375,"x":96},{"y":0.96875,"x":97},{"y":0.9765625,"x":98},{"y":0.98828125,"x":99}];
var masterFarmerArdy = [{"y":0.390625,"x":1},{"y":0.390625,"x":2},{"y":0.3984375,"x":3},{"y":0.40625,"x":4},{"y":0.41015625,"x":5},{"y":0.41796875,"x":6},{"y":0.42578125,"x":7},{"y":0.4296875,"x":8},{"y":0.4375,"x":9},{"y":0.4453125,"x":10},{"y":0.44921875,"x":11},{"y":0.45703125,"x":12},{"y":0.46484375,"x":13},{"y":0.47265625,"x":14},{"y":0.4765625,"x":15},{"y":0.484375,"x":16},{"y":0.4921875,"x":17},{"y":0.49609375,"x":18},{"y":0.50390625,"x":19},{"y":0.51171875,"x":20},{"y":0.515625,"x":21},{"y":0.5234375,"x":22},{"y":0.53125,"x":23},{"y":0.53515625,"x":24},{"y":0.54296875,"x":25},{"y":0.55078125,"x":26},{"y":0.55859375,"x":27},{"y":0.5625,"x":28},{"y":0.5703125,"x":29},{"y":0.578125,"x":30},{"y":0.58203125,"x":31},{"y":0.58984375,"x":32},{"y":0.59765625,"x":33},{"y":0.6015625,"x":34},{"y":0.609375,"x":35},{"y":0.6171875,"x":36},{"y":0.62109375,"x":37},{"y":0.62890625,"x":38},{"y":0.63671875,"x":39},{"y":0.64453125,"x":40},{"y":0.6484375,"x":41},{"y":0.65625,"x":42},{"y":0.6640625,"x":43},{"y":0.66796875,"x":44},{"y":0.67578125,"x":45},{"y":0.68359375,"x":46},{"y":0.6875,"x":47},{"y":0.6953125,"x":48},{"y":0.703125,"x":49},{"y":0.7109375,"x":50},{"y":0.71484375,"x":51},{"y":0.72265625,"x":52},{"y":0.73046875,"x":53},{"y":0.734375,"x":54},{"y":0.7421875,"x":55},{"y":0.75,"x":56},{"y":0.75390625,"x":57},{"y":0.76171875,"x":58},{"y":0.76953125,"x":59},{"y":0.7734375,"x":60},{"y":0.78125,"x":61},{"y":0.7890625,"x":62},{"y":0.796875,"x":63},{"y":0.80078125,"x":64},{"y":0.80859375,"x":65},{"y":0.81640625,"x":66},{"y":0.8203125,"x":67}, {"y":0.828125,"x":68},{"y":0.8359375,"x":69},{"y":0.83984375,"x":70},{"y":0.84765625,"x":71},{"y":0.85546875,"x":72},{"y":0.859375,"x":73},{"y":0.8671875,"x":74},{"y":0.875,"x":75},{"y":0.8828125,"x":76},{"y":0.88671875,"x":77},{"y":0.89453125,"x":78},{"y":0.90234375,"x":79},{"y":0.90625,"x":80},{"y":0.9140625,"x":81},{"y":0.921875,"x":82},{"y":0.92578125,"x":83},{"y":0.93359375,"x":84},{"y":0.94140625,"x":85},{"y":0.9453125,"x":86},{"y":0.953125,"x":87},{"y":0.9609375,"x":88},{"y":0.96875,"x":89},{"y":0.97265625,"x":90},{"y":0.98046875,"x":91},{"y":0.98828125,"x":92},{"y":0.9921875,"x":93},{"y":1,"x":94}, {"y":1,"x":95}, {"y":1,"x":96}, {"y":1,"x":97}, {"y":1,"x":98}, {"y":1,"x":99}];
var masterFarmerThievArdy = [{"y":0.42578125,"x":1},{"y":0.42578125,"x":2},{"y":0.43359375,"x":3},{"y":0.44140625,"x":4},{"y":0.44921875,"x":5},{"y":0.45703125,"x":6},{"y":0.46484375,"x":7},{"y":0.47265625,"x":8},{"y":0.48046875,"x":9},{"y":0.48828125,"x":10},{"y":0.4921875,"x":11},{"y":0.5,"x":12},{"y":0.5078125,"x":13},{"y":0.515625,"x":14},{"y":0.5234375,"x":15},{"y":0.53125,"x":16},{"y":0.5390625,"x":17},{"y":0.546875,"x":18},{"y":0.5546875,"x":19},{"y":0.5625,"x":20},{"y":0.56640625,"x":21},{"y":0.57421875,"x":22},{"y":0.58203125,"x":23},{"y":0.58984375,"x":24},{"y":0.59765625,"x":25},{"y":0.6015625,"x":26},{"y":0.609375,"x":27},{"y":0.6171875,"x":28},{"y":0.625,"x":29},{"y":0.6328125,"x":30},{"y":0.63671875,"x":31},{"y":0.64453125,"x":32},{"y":0.65234375,"x":33},{"y":0.66015625,"x":34},{"y":0.66796875,"x":35},{"y":0.67578125,"x":36},{"y":0.68359375,"x":37},{"y":0.69140625,"x":38},{"y":0.69921875,"x":39},{"y":0.70703125,"x":40},{"y":0.7109375,"x":41},{"y":0.71875,"x":42},{"y":0.7265625,"x":43},{"y":0.734375,"x":44},{"y":0.7421875,"x":45},{"y":0.75,"x":46},{"y":0.7578125,"x":47},{"y":0.765625,"x":48},{"y":0.7734375,"x":49},{"y":0.78125,"x":50},{"y":0.78125,"x":51},{"y":0.7890625,"x":52},{"y":0.796875,"x":53},{"y":0.8046875,"x":54},{"y":0.8125,"x":55},{"y":0.8203125,"x":56},{"y":0.828125,"x":57},{"y":0.8359375,"x":58},{"y":0.84375,"x":59},{"y":0.84765625,"x":60},{"y":0.85546875,"x":61},{"y":0.86328125,"x":62},{"y":0.87109375,"x":63},{"y":0.87890625,"x":64},{"y":0.88671875,"x":65},{"y":0.89453125,"x":66},{"y":0.90234375,"x":67},{"y":0.91015625,"x":68},{"y":0.91796875,"x":69},{"y":0.921875,"x":70},{"y":0.9296875,"x":71},{"y":0.9375,"x":72},{"y":0.9453125,"x":73},{"y":0.953125,"x":74},{"y":0.95703125,"x":75},{"y":0.96484375,"x":76},{"y":0.97265625,"x":77},{"y":0.98046875,"x":78},{"y":0.98828125,"x":79},{"y":0.9921875,"x":80},{"y":1,"x":81},{"y":1,"x":82},{"y":1,"x":83},{"y":1,"x":84},{"y":1,"x":85},{"y":1,"x":86},{"y":1,"x":87},{"y":1,"x":88},{"y":1,"x":89},{"y":1,"x":90}, {"y":1,"x":91},{"y":1,"x":92},{"y":1,"x":93},{"y":1,"x":94},{"y":1,"x":95}, {"y":1,"x":96},{"y":1,"x":97},{"y":1,"x":98},{"y":1,"x":99}];

var ardyKnightBase = [{y:0.60546875,x:55},{y:0.609375,x:56},{y:0.62109375,x:57},{y:0.625,x:58},{y:0.63671875,x:59},{y:0.640625,x:60},{y:0.6484375,x:61},{y:0.65625,x:62},{y:0.6640625,x:63},{y:0.671875,x:64},{y:0.6796875,x:65},{y:0.6875,x:66},{y:0.6953125,x:67},{y:0.703125,x:68},{y:0.7109375,x:69},{y:0.71484375,x:70},{y:0.7265625,x:71},{y:0.73046875,x:72},{y:0.7421875,x:73},{y:0.74609375,x:74},{y:0.7578125,x:75},{y:0.76171875,x:76},{y:0.7734375,x:77},{y:0.77734375,x:78},{y:0.7890625,x:79},{y:0.79296875,x:80},{y:0.80078125,x:81},{y:0.80859375,x:82},{y:0.81640625,x:83},{y:0.82421875,x:84},{y:0.83203125,x:85},{y:0.83984375,x:86},{y:0.84765625,x:87},{y:0.85546875,x:88},{y:0.86328125,x:89},{y:0.8671875,x:90},{y:0.87890625,x:91},{y:0.8828125,x:92},{y:0.89453125,x:93},{y:0.8984375,x:94},{y:0.91015625,x:95},{y:0.9140625,x:96},{y:0.92578125,x:97},{y:0.9296875,x:98},{y:0.94140625,x:99}];
var ardyKnightGloves = [{y:0.6328125,x:55},{y:0.640625,x:56},{y:0.65234375,x:57},{y:0.65625,x:58},{y:0.66796875,x:59},{y:0.671875,x:60},{y:0.68359375,x:61},{y:0.6875,x:62},{y:0.69921875,x:63},{y:0.70703125,x:64},{y:0.71484375,x:65},{y:0.72265625,x:66},{y:0.7265625,x:67},{y:0.73828125,x:68},{y:0.7421875,x:69},{y:0.75390625,x:70},{y:0.76171875,x:71},{y:0.76953125,x:72},{y:0.77734375,x:73},{y:0.78515625,x:74},{y:0.79296875,x:75},{y:0.80078125,x:76},{y:0.80859375,x:77},{y:0.8203125,x:78},{y:0.82421875,x:79},{y:0.8359375,x:80},{y:0.83984375,x:81},{y:0.8515625,x:82},{y:0.85546875,x:83},{y:0.86328125,x:84},{y:0.875,x:85},{y:0.87890625,x:86},{y:0.890625,x:87},{y:0.89453125,x:88},{y:0.90625,x:89},{y:0.91015625,x:90},{y:0.921875,x:91},{y:0.9296875,x:92},{y:0.9375,x:93},{y:0.9453125,x:94},{y:0.953125,x:95},{y:0.9609375,x:96},{y:0.96875,x:97},{y:0.9765625,x:98},{y:0.98828125,x:99}];
var ardyKnightDiary = [{y:0.6640625,x:55},{y:0.67578125,x:56},{y:0.6796875,x:57},{y:0.69140625,x:58},{y:0.69921875,x:59},{y:0.703125,x:60},{y:0.71484375,x:61},{y:0.72265625,x:62},{y:0.734375,x:63},{y:0.73828125,x:64},{y:0.75,x:65},{y:0.7578125,x:66},{y:0.76171875,x:67},{y:0.7734375,x:68},{y:0.78125,x:69},{y:0.7890625,x:70},{y:0.796875,x:71},{y:0.80859375,x:72},{y:0.8125,x:73},{y:0.82421875,x:74},{y:0.83203125,x:75},{y:0.83984375,x:76},{y:0.84765625,x:77},{y:0.85546875,x:78},{y:0.8671875,x:79},{y:0.87109375,x:80},{y:0.8828125,x:81},{y:0.890625,x:82},{y:0.89453125,x:83},{y:0.90625,x:84},{y:0.9140625,x:85},{y:0.921875,x:86},{y:0.9296875,x:87},{y:0.94140625,x:88},{y:0.94921875,x:89},{y:0.95703125,x:90},{y:0.96484375,x:91},{y:0.97265625,x:92},{y:0.98046875,x:93},{y:0.98828125,x:94},{y:1,x:95},{y:1,x:96},{y:1,x:97},{y:1,x:98},{y:1,x:99}]
var ardyKnightDiary99Cape = [{y:1,x:85},{y:1,x:86},{y:1,x:87},{y:1,x:88},{y:1,x:89},{y:1,x:90},{y:1,x:91},{y:1,x:92},{y:1,x:93},{y:1,x:94},{y:1,x:95},{y:1,x:96},{y:1,x:97},{y:1,x:98},{y:1,x:99}]

var tzhaarBase = [{y:0.640625,x:90},{y:0.65625,x:91},{y:0.671875,x:92},{y:0.6875,x:93},{y:0.703125,x:94},{y:0.71875,x:95},{y:0.734375,x:96},{y:0.75,x:97},{y:0.765625,x:98},{y:0.78515625,x:99}];
var tzhaarGloves = [{y:0.671875,x:90},{y:0.6875,x:91},{y:0.70703125,x:92},{y:0.7265625,x:93},{y:0.7421875,x:94},{y:0.7578125,x:95},{y:0.7734375,x:96},{y:0.7890625,x:97},{y:0.8046875,x:98},{y:0.82421875,x:99}];
var tzhaarArdy = [{y:0.703125,x:90},{y:0.7265625,x:91},{y:0.7421875,x:92},{y:0.7578125,x:93},{y:0.7734375,x:94},{y:0.796875,x:95},{y:0.8125,x:96},{y:0.828125,x:97},{y:0.84375,x:98},{y:0.86328125,x:99}];
var tzhaarThievArdy = [{y:0.94921875,x:99}];

var elfBase = [{y:0.3359375,x:85},{y:0.33984375,x:86},{y:0.34375,x:87},{y:0.34765625,x:88},{y:0.3515625,x:89},{y:0.35546875,x:90},{y:0.359375,x:91},{y:0.36328125,x:92},{y:0.3671875,x:93},{y:0.37109375,x:94},{y:0.375,x:95},{y:0.37890625,x:96},{y:0.3828125,x:97},{y:0.38671875,x:98},{y:0.39453125,x:99}];
var elfGloves = [{y:0.35546875,x:85},{y:0.359375,x:86},{y:0.36328125,x:87},{y:0.3671875,x:88},{y:0.37109375,x:89},{y:0.375,x:90},{y:0.37890625,x:91},{y:0.3828125,x:92},{y:0.38671875,x:93},{y:0.390625,x:94},{y:0.39453125,x:95},{y:0.3984375,x:96},{y:0.40234375,x:97},{y:0.40625,x:98},{y:0.4140625,x:99}];
var elfArdy = [{y:0.37109375,x:85},{y:0.375,x:86},{y:0.37890625,x:87},{y:0.3828125,x:88},{y:0.38671875,x:89},{y:0.390625,x:90},{y:0.3984375,x:91},{y:0.40234375,x:92},{y:0.40625,x:93},{y:0.41015625,x:94},{y:0.4140625,x:95},{y:0.41796875,x:96},{y:0.421875,x:97},{y:0.42578125,x:98},{y:0.43359375,x:99}];
var elfThievArdy = [{y:0.4765625,x:99}];

var vyreBase = [{y:0.41796875,x:82},{y:0.42578125,x:83},{y:0.4296875,x:84},{y:0.43359375,x:85},{y:0.44140625,x:86},{y:0.44140625,x:87},{y:0.4453125,x:88},{y:0.44921875,x:89},{y:0.45703125,x:90},{y:0.4609375,x:91},{y:0.46484375,x:92},{y:0.47265625,x:93},{y:0.4765625,x:94},{y:0.48046875,x:95},{y:0.48828125,x:96},{y:0.4921875,x:97},{y:0.49609375,x:98},{y:0.50390625,x:99}];
var vyreGloves = [{y:0.4375,x:82},{y:0.4453125,x:83},{y:0.44921875,x:84},{y:0.453125,x:85},{y:0.4609375,x:86},{y:0.4609375,x:87},{y:0.46484375,x:88},{y:0.47265625,x:89},{y:0.4765625,x:90},{y:0.484375,x:91},{y:0.48828125,x:92},{y:0.4921875,x:93},{y:0.5,x:94},{y:0.50390625,x:95},{y:0.5078125,x:96},{y:0.515625,x:97},{y:0.51953125,x:98},{y:0.52734375,x:99}];
var vyreArdy = [{y:0.4453125,x:80},{y:0.453125,x:81},{y:0.45703125,x:82},{y:0.46484375,x:83},{y:0.46875,x:84},{y:0.4765625,x:85},{y:0.48046875,x:86},{y:0.48046875,x:87},{y:0.48828125,x:88},{y:0.4921875,x:89},{y:0.5,x:90},{y:0.50390625,x:91},{y:0.51171875,x:92},{y:0.515625,x:93},{y:0.51953125,x:94},{y:0.52734375,x:95},{y:0.53125,x:96},{y:0.5390625,x:97},{y:0.54296875,x:98},{y:0.55078125,x:99}];
var vyreThievArdy = [{y:0.60546875,x:99}];

var shadowDodgySuccess = .3625;
var shadowDodgyFail = 1 - .3625;



    function findDistribution(startExp, endExp, pickpocketExp, expToLevel, levelToExp) {
    var startLevel = expToLevel(startExp, 1, 99);
    var endLevel = expToLevel(endExp, 1, 99);
    var expCounter = startExp;
    var distributions = {};
    for (var i = startLevel; i <= endLevel; i++) {
        if (i == startLevel) {
            if (startLevel != endLevel) {
                distributions[i] = Math.ceil((levelToExp(i + 1) - startExp) / pickpocketExp);
                console.log(distributions[i]);
                expCounter = parseInt(expCounter) + distributions[i] * pickpocketExp;
            }
            else {
                distributions[i] = Math.ceil((endExp - expCounter) / pickpocketExp);
                expCounter += distributions[i] * pickpocketExp;
            }
        }
        else if (i != endLevel) {
            distributions[i] = Math.ceil((levelToExp(i + 1) - expCounter) / pickpocketExp);
            expCounter += distributions[i] * pickpocketExp;
        }
        else {
            distributions[i] = Math.ceil((endExp - expCounter) / pickpocketExp);
            expCounter += distributions[i] * pickpocketExp;
        }
    }
    return distributions;
}

function updateTable(settingsfunc, findDistribution, expToLevel, levelToExp) {
    var settings = settingsfunc();
    if (parseInt(settings["desired"]) > parseInt(settings["experience"])) {

        // the specific exp will be used for following functions
        // so ensure start and end exp are known
        var startExp = settings["experience"];
        var endExp = settings["desired"];
        if (settings["type"] == "level") {
            startExp = levelToExp(startExp);
            endExp = levelToExp(endExp);
        }
        // specific levels will be used for following functions
        // so ensure start and end levels are known
        var startLevel = settings["experience"];
        var endLevel = settings["desired"];
        if (settings["type"] == "experience") {
            startLevel = expToLevel(startLevel, 1, 99);
            endLevel = expToLevel(endLevel, 1, 99);
        }

        // total pickpockets master farmer
        document.getElementById("farm-success-picks").innerText = Math.ceil(((endExp - startExp) / 43)).toLocaleString("en-US");

        // total pickpockets ardy knight
        document.getElementById("ardy-success-picks").innerText = Math.ceil(((endExp - startExp) / 84.3)).toLocaleString("en-US");

        // total pickpockets tzhaar
        document.getElementById("tzhaar-success-picks").innerText = Math.ceil(((endExp - startExp) / 103.4)).toLocaleString("en-US");

        // total pickpockets elf
        document.getElementById("elf-success-picks").innerText = Math.ceil(((endExp - startExp) / 353.3)).toLocaleString("en-US");

        // total pickpockets vyre
        document.getElementById("vyre-success-picks").innerText = Math.ceil(((endExp - startExp) / 306.9)).toLocaleString("en-US");

        // get the master farmer distributions
        var farmDistributions = findDistribution(startExp, endExp, 43, expToLevel, levelToExp);
        var farmTotal = 0;
        for (let item in farmDistributions) {
            farmTotal += parseInt(farmDistributions[item]);
        }

        // get the ardy knight distributions
        var ardyDistributions = findDistribution(startExp, endExp, 84.3, expToLevel, levelToExp);
        var ardyTotal = 0;
        for (let item in ardyDistributions) {
            ardyTotal += parseInt(ardyDistributions[item]);
        }

        // get the tzhaar distributions
        var tzhaarDistributions = findDistribution(startExp, endExp, 103.4, expToLevel, levelToExp);
        var tzhaarTotal = 0;
        for (let item in tzhaarDistributions) {
            tzhaarTotal += parseInt(tzhaarDistributions[item]);
        }

        // get the elf distributions
        var elfDistributions = findDistribution(startExp, endExp, 353.3, expToLevel, levelToExp);
        var elfTotal = 0;
        for (let item in elfDistributions) {
            elfTotal += parseInt(elfDistributions[item]);
        }

        // get the vyre distributions
        var vyreDistributions = findDistribution(startExp, endExp, 306.9, expToLevel, levelToExp);
        var vyreTotal = 0;
        for (let item in vyreDistributions) {
            vyreTotal += parseInt(vyreDistributions[item]);
        }

        var farmSuccess = 0, ardySuccess = 0, tzhaarSuccess = 0, elfSuccess = 0, vyreSuccess = 0;
        var farmExpRate = 0, ardyExpRate = 0, tzhaarExpRate = 0, elfExpRate = 0, vyreExpRate = 0;

        if (settings["thievcape"] == true && settings["ardydiary"] == true) {

            // no dodgy or shadow veil
            if (settings["dodgy"] == false && settings["shadow"] == false) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerThievArdy[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) * ((2 * masterFarmerThievArdy[i - 1]["y"]) * (43 * 3000) / (2 * masterFarmerThievArdy[i - 1]["y"] + 10 - 10 * masterFarmerThievArdy[i - 1]["y"]))

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightDiary99Cape[i - 85]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) * ((2 * ardyKnightDiary99Cape[i - 85]["y"]) * (84.3 * 3000) / (2 * ardyKnightDiary99Cape[i - 85]["y"] + 10 - 10 * ardyKnightDiary99Cape[i - 85]["y"]))
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 98) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarThievArdy[i - 99]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) * ((2 * tzhaarThievArdy[i - 99]["y"]) * (103.4 * 3000) / (2 * tzhaarThievArdy[i - 99]["y"] + 10 - 10 * tzhaarThievArdy[i - 99]["y"]))
                    }

                    // success rate and exp rate for elves
                    if (startLevel > 98) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfThievArdy[i - 99]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) * ((2 * elfThievArdy[i - 99]["y"]) * (353.3 * 3000) / (2 * elfThievArdy[i - 99]["y"] + 10 - 10 * elfThievArdy[i - 99]["y"]))
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 98) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreThievArdy[i - 99]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) * ((2 * vyreThievArdy[i - 99]["y"]) * (306.9 * 3000) / (2 * vyreThievArdy[i - 99]["y"] + 10 - 10 * vyreThievArdy[i - 99]["y"]))
                    }
                }
            }

            // dodgy necklaces used but not shadow veil
            else if (settings["dodgy"] == true && settings["shadow"] == false) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerThievArdy[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerThievArdy[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerThievArdy[i - 1]["y"] + ((1 - masterFarmerThievArdy[i - 1]["y"])*.75*10 + (1 - masterFarmerThievArdy[i-1]["y"]) * .25 * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightDiary99Cape[i - 85]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightDiary99Cape[i - 85]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightDiary99Cape[i - 85]["y"] + ((1 - ardyKnightDiary99Cape[i - 85]["y"]) * .75 * 10 + (1 - ardyKnightDiary99Cape[i - 85]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 98) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarThievArdy[i - 99]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / ardyTotal) *
                            ((2 * tzhaarThievArdy[i - 99]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarThievArdy[i - 99]["y"] + ((1 - tzhaarThievArdy[i - 99]["y"]) * .75 * 10 + (1 - tzhaarThievArdy[i - 99]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 98) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfThievArdy[i - 99]["y"];
                        elfExpRate += (elfDistributions[i] / ardyTotal) *
                            ((2 * elfThievArdy[i - 99]["y"]) * (353.3 * 3000) /
                                (2 * elfThievArdy[i - 99]["y"] + ((1 - elfThievArdy[i - 99]["y"]) * .75 * 10 + (1 - elfThievArdy[i - 99]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 98) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreThievArdy[i - 99]["y"];
                        vyreExpRate += (vyreDistributions[i] / ardyTotal) *
                            ((2 * vyreThievArdy[i - 99]["y"]) * (306.9 * 3000) /
                                (2 * vyreThievArdy[i - 99]["y"] + ((1 - vyreThievArdy[i - 99]["y"]) * .75 * 10 + (1 - vyreThievArdy[i - 99]["y"]) * .25 * 2)));
                    }
                }
            }

            // shadow veil used but not dodgy necklaces
            else if (settings["dodgy"] == false && settings["shadow"] == true) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerThievArdy[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerThievArdy[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerThievArdy[i - 1]["y"] + ((1 - masterFarmerThievArdy[i - 1]["y"])* .85 * 10 + (1 - masterFarmerThievArdy[i-1]["y"]) * .15 * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightDiary99Cape[i - 85]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightDiary99Cape[i - 85]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightDiary99Cape[i - 85]["y"] + ((1 - ardyKnightDiary99Cape[i - 85]["y"]) * .85 * 10 + (1 - ardyKnightDiary99Cape[i - 85]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 98) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarThievArdy[i - 99]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarThievArdy[i - 99]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarThievArdy[i - 99]["y"] + ((1 - tzhaarThievArdy[i - 99]["y"]) * .85 * 10 + (1 - tzhaarThievArdy[i - 99]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 98) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfThievArdy[i - 99]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfThievArdy[i - 99]["y"]) * (353.3 * 3000) /
                                (2 * elfThievArdy[i - 99]["y"] + ((1 - elfThievArdy[i - 99]["y"]) * .85 * 10 + (1 - elfThievArdy[i - 99]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 98) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreThievArdy[i - 99]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreThievArdy[i - 99]["y"]) * (306.9 * 3000) /
                                (2 * vyreThievArdy[i - 99]["y"] + ((1 - vyreThievArdy[i - 99]["y"]) * .85 * 10 + (1 - vyreThievArdy[i - 99]["y"]) * .15 * 2)));
                    }
                }
            }

            // both dodgy necklaces and shadow veil are used
            else if (settings["dodgy"] == true && settings["shadow"] == true) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerThievArdy[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerThievArdy[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerThievArdy[i - 1]["y"] + ((1 - masterFarmerThievArdy[i - 1]["y"])* shadowDodgyFail * 10 + (1 - masterFarmerThievArdy[i-1]["y"]) * shadowDodgySuccess * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightDiary99Cape[i - 85]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightDiary99Cape[i - 85]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightDiary99Cape[i - 85]["y"] + ((1 - ardyKnightDiary99Cape[i - 85]["y"]) * shadowDodgyFail * 10 + (1 - ardyKnightDiary99Cape[i - 85]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 98) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarThievArdy[i - 99]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarThievArdy[i - 99]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarThievArdy[i - 99]["y"] + ((1 - tzhaarThievArdy[i - 99]["y"]) * shadowDodgyFail * 10 + (1 - tzhaarThievArdy[i - 99]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 98) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfThievArdy[i - 99]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfThievArdy[i - 99]["y"]) * (353.3 * 3000) /
                                (2 * elfThievArdy[i - 99]["y"] + ((1 - elfThievArdy[i - 99]["y"]) * shadowDodgyFail * 10 + (1 - elfThievArdy[i - 99]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 98) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreThievArdy[i - 99]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreThievArdy[i - 99]["y"]) * (306.9 * 3000) /
                                (2 * vyreThievArdy[i - 99]["y"] + ((1 - vyreThievArdy[i - 99]["y"]) * shadowDodgyFail * 10 + (1 - vyreThievArdy[i - 99]["y"]) * shadowDodgySuccess * 2)));
                    }
                }
            }
        }

        else if  (settings["thievcape"] == true || settings["ardydiary"] == true) {

            // no dodgy or shadow veil
            if (settings["dodgy"] == false && settings["shadow"] == false) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerArdy[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) * ((2 * masterFarmerArdy[i - 1]["y"]) * (43 * 3000) / (2 * masterFarmerArdy[i - 1]["y"] + 10 - 10 * masterFarmerArdy[i - 1]["y"]))

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightDiary[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) * ((2 * ardyKnightDiary[i - 55]["y"]) * (84.3 * 3000) / (2 * ardyKnightDiary[i - 55]["y"] + 10 - 10 * ardyKnightDiary[i - 55]["y"]))
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarArdy[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) * ((2 * tzhaarArdy[i - 90]["y"]) * (103.4 * 3000) / (2 * tzhaarArdy[i - 90]["y"] + 10 - 10 * tzhaarArdy[i - 90]["y"]))
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfArdy[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) * ((2 * elfArdy[i - 85]["y"]) * (353.3 * 3000) / (2 * elfArdy[i - 85]["y"] + 10 - 10 * elfArdy[i - 85]["y"]))
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreArdy[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) * ((2 * vyreArdy[i - 82]["y"]) * (306.93 * 3000) / (2 * vyreArdy[i - 82]["y"] + 10 - 10 * vyreArdy[i - 82]["y"]))
                    }
                }
            }

            // dodgy necklaces used but not shadow veil
            else if (settings["dodgy"] == true && settings["shadow"] == false) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerArdy[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerArdy[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerArdy[i - 1]["y"] + ((1 - masterFarmerArdy[i - 1]["y"])*.75*10 + (1 - masterFarmerArdy[i-1]["y"]) * .25 * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightDiary[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightDiary[i - 55]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightDiary[i - 55]["y"] + ((1 - ardyKnightDiary[i - 55]["y"]) * .75 * 10 + (1 - ardyKnightDiary[i - 55]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarArdy[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarArdy[i - 90]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarArdy[i - 90]["y"] + ((1 - tzhaarArdy[i - 90]["y"]) * .75 * 10 + (1 - tzhaarArdy[i - 90]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfArdy[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfArdy[i - 85]["y"]) * (353.3 * 3000) /
                                (2 * elfArdy[i - 85]["y"] + ((1 - elfArdy[i - 85]["y"]) * .75 * 10 + (1 - elfArdy[i - 85]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreArdy[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreArdy[i - 82]["y"]) * (306.9 * 3000) /
                                (2 * vyreArdy[i - 82]["y"] + ((1 - vyreArdy[i - 82]["y"]) * .75 * 10 + (1 - vyreArdy[i - 82]["y"]) * .25 * 2)));
                    }
                }
            }

            // shadow veil used but not dodgy necklaces
            else if (settings["dodgy"] == false && settings["shadow"] == true) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerArdy[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerArdy[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerArdy[i - 1]["y"] + ((1 - masterFarmerArdy[i - 1]["y"])* .85 * 10 + (1 - masterFarmerArdy[i-1]["y"]) * .15 * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightDiary[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightDiary[i - 55]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightDiary[i - 55]["y"] + ((1 - ardyKnightDiary[i - 55]["y"]) * .85 * 10 + (1 - ardyKnightDiary[i - 55]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarArdy[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarArdy[i - 90]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarArdy[i - 90]["y"] + ((1 - tzhaarArdy[i - 90]["y"]) * .85 * 10 + (1 - tzhaarArdy[i - 90]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfArdy[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfArdy[i - 85]["y"]) * (353.3 * 3000) /
                                (2 * elfArdy[i - 85]["y"] + ((1 - elfArdy[i - 85]["y"]) * .85 * 10 + (1 - elfArdy[i - 85]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreArdy[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreArdy[i - 82]["y"]) * (306.9 * 3000) /
                                (2 * vyreArdy[i - 82]["y"] + ((1 - vyreArdy[i - 82]["y"]) * .85 * 10 + (1 - vyreArdy[i - 82]["y"]) * .15 * 2)));
                    }
                }
            }

            // both dodgy necklaces and shadow veil are used
            else if (settings["dodgy"] == true && settings["shadow"] == true) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerArdy[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerArdy[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerArdy[i - 1]["y"] + ((1 - masterFarmerArdy[i - 1]["y"])* shadowDodgyFail * 10 + (1 - masterFarmerArdy[i-1]["y"]) * shadowDodgySuccess * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightDiary[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightDiary[i - 55]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightDiary[i - 55]["y"] + ((1 - ardyKnightDiary[i - 55]["y"]) * shadowDodgyFail * 10 + (1 - ardyKnightDiary[i - 55]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarArdy[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarArdy[i - 90]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarArdy[i - 90]["y"] + ((1 - tzhaarArdy[i - 90]["y"]) * shadowDodgyFail * 10 + (1 - tzhaarArdy[i - 90]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfArdy[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfArdy[i - 85]["y"]) * (353.3 * 3000) /
                                (2 * elfArdy[i - 85]["y"] + ((1 - elfArdy[i - 85]["y"]) * shadowDodgyFail * 10 + (1 - elfArdy[i - 85]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreArdy[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreArdy[i - 82]["y"]) * (306.9 * 3000) /
                                (2 * vyreArdy[i - 82]["y"] + ((1 - vyreArdy[i - 82]["y"]) * shadowDodgyFail * 10 + (1 - vyreArdy[i - 82]["y"]) * shadowDodgySuccess * 2)));
                    }
                }
            }
        }

        else if  (settings["gloves"] == true) {

            // no dodgy or shadow veil
            if (settings["dodgy"] == false && settings["shadow"] == false) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerGloves[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) * ((2 * masterFarmerGloves[i - 1]["y"]) * (43 * 3000) / (2 * masterFarmerGloves[i - 1]["y"] + 10 - 10 * masterFarmerGloves[i - 1]["y"]))

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightGloves[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) * ((2 * ardyKnightGloves[i - 55]["y"]) * (84.3 * 3000) / (2 * ardyKnightGloves[i - 55]["y"] + 10 - 10 * ardyKnightGloves[i - 55]["y"]))
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarGloves[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) * ((2 * tzhaarGloves[i - 90]["y"]) * (103.4 * 3000) / (2 * tzhaarGloves[i - 90]["y"] + 10 - 10 * tzhaarGloves[i - 90]["y"]))
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfGloves[i - 84]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) * ((2 * elfGloves[i - 84]["y"]) * (353.3 * 3000) / (2 * elfGloves[i - 85]["y"] + 10 - 10 * elfGloves[i - 85]["y"]))
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreGloves[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) * ((2 * vyreGloves[i - 82]["y"]) * (306.9 * 3000) / (2 * vyreGloves[i - 82]["y"] + 10 - 10 * vyreGloves[i - 82]["y"]))
                    }
                }
            }

            // dodgy necklaces used but not shadow veil
            else if (settings["dodgy"] == true && settings["shadow"] == false) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerGloves[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerGloves[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerGloves[i - 1]["y"] + ((1 - masterFarmerGloves[i - 1]["y"])*.75*10 + (1 - masterFarmerGloves[i-1]["y"]) * .25 * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightGloves[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightGloves[i - 55]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightGloves[i - 55]["y"] + ((1 - ardyKnightGloves[i - 55]["y"]) * .75 * 10 + (1 - ardyKnightGloves[i - 55]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarGloves[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarGloves[i - 90]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarGloves[i - 90]["y"] + ((1 - tzhaarGloves[i - 90]["y"]) * .75 * 10 + (1 - tzhaarGloves[i - 90]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfGloves[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfGloves[i - 85]["y"]) * (353.3 * 3000) /
                                (2 * elfGloves[i - 85]["y"] + ((1 - elfGloves[i - 85]["y"]) * .75 * 10 + (1 - elfGloves[i - 85]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreGloves[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreGloves[i - 82]["y"]) * (306.9 * 3000) /
                                (2 * vyreGloves[i - 82]["y"] + ((1 - vyreGloves[i - 82]["y"]) * .75 * 10 + (1 - vyreGloves[i - 82]["y"]) * .25 * 2)));
                    }
                }
            }

            // shadow veil used but not dodgy necklaces
            else if (settings["dodgy"] == false && settings["shadow"] == true) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerGloves[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerGloves[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerGloves[i - 1]["y"] + ((1 - masterFarmerGloves[i - 1]["y"])* .85 * 10 + (1 - masterFarmerGloves[i-1]["y"]) * .15 * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightGloves[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightGloves[i - 55]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightGloves[i - 55]["y"] + ((1 - ardyKnightGloves[i - 55]["y"]) * .85 * 10 + (1 - ardyKnightGloves[i - 55]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarGloves[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarGloves[i - 90]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarGloves[i - 90]["y"] + ((1 - tzhaarGloves[i - 90]["y"]) * .85 * 10 + (1 - tzhaarGloves[i - 90]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfGloves[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfGloves[i - 85]["y"]) * (353.3 * 3000) /
                                (2 * elfGloves[i - 85]["y"] + ((1 - elfGloves[i - 85]["y"]) * .85 * 10 + (1 - elfGloves[i - 85]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreGloves[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreGloves[i - 82]["y"]) * (306.9 * 3000) /
                                (2 * vyreGloves[i - 82]["y"] + ((1 - vyreGloves[i - 82]["y"]) * .85 * 10 + (1 - vyreGloves[i - 82]["y"]) * .15 * 2)));
                    }
                }
            }

            // both dodgy necklaces and shadow veil are used
            else if (settings["dodgy"] == true && settings["shadow"] == true) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerGloves[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerGloves[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerGloves[i - 1]["y"] + ((1 - masterFarmerGloves[i - 1]["y"])* shadowDodgyFail * 10 + (1 - masterFarmerGloves[i-1]["y"]) * shadowDodgySuccess * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightGloves[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightGloves[i - 55]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightGloves[i - 55]["y"] + ((1 - ardyKnightGloves[i - 55]["y"]) * shadowDodgyFail * 10 + (1 - ardyKnightGloves[i - 55]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarGloves[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarGloves[i - 90]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarGloves[i - 90]["y"] + ((1 - tzhaarGloves[i - 90]["y"]) * shadowDodgyFail * 10 + (1 - tzhaarGloves[i - 90]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfGloves[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfGloves[i - 85]["y"]) * (353.3 * 3000) /
                                (2 * elfGloves[i - 85]["y"] + ((1 - elfGloves[i - 85]["y"]) * shadowDodgyFail * 10 + (1 - elfGloves[i - 85]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreGloves[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreGloves[i - 82]["y"]) * (306.9 * 3000) /
                                (2 * vyreGloves[i - 82]["y"] + ((1 - vyreGloves[i - 82]["y"]) * shadowDodgyFail * 10 + (1 - vyreGloves[i - 82]["y"]) * shadowDodgySuccess * 2)));
                    }
                }
            }
        }

        else {
            // no dodgy or shadow veil
            if (settings["dodgy"] == false && settings["shadow"] == false) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerBase[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) * ((2 * masterFarmerBase[i - 1]["y"]) * (43 * 3000) / (2 * masterFarmerBase[i - 1]["y"] + 10 - 10 * masterFarmerBase[i - 1]["y"]))

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightBase[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) * ((2 * ardyKnightBase[i - 55]["y"]) * (84.3 * 3000) / (2 * ardyKnightBase[i - 55]["y"] + 10 - 10 * ardyKnightBase[i - 55]["y"]))
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarBase[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) * ((2 * tzhaarBase[i - 90]["y"]) * (103.4 * 3000) / (2 * tzhaarBase[i - 90]["y"] + 10 - 10 * tzhaarBase[i - 90]["y"]))
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfBase[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) * ((2 * elfBase[i - 85]["y"]) * (353.3 * 3000) / (2 * elfBase[i - 85]["y"] + 10 - 10 * elfBase[i - 85]["y"]))
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreBase[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) * ((2 * vyreBase[i - 82]["y"]) * (306.9 * 3000) / (2 * vyreBase[i - 82]["y"] + 10 - 10 * vyreBase[i - 82]["y"]))
                    }
                }
            }
            // dodgy necklaces used but not shadow veil
            else if (settings["dodgy"] == true && settings["shadow"] == false) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerBase[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerBase[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerBase[i - 1]["y"] + ((1 - masterFarmerBase[i - 1]["y"]) * .75 * 10 + (1 - masterFarmerBase[i - 1]["y"]) * .25 * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightBase[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightBase[i - 55]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightBase[i - 55]["y"] + ((1 - ardyKnightBase[i - 55]["y"]) * .75 * 10 + (1 - ardyKnightBase[i - 55]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarBase[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarBase[i - 90]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarBase[i - 90]["y"] + ((1 - tzhaarBase[i - 90]["y"]) * .75 * 10 + (1 - tzhaarBase[i - 90]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfBase[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfBase[i - 85]["y"]) * (353.3 * 3000) /
                                (2 * elfBase[i - 85]["y"] + ((1 - elfBase[i - 85]["y"]) * .75 * 10 + (1 - elfBase[i - 85]["y"]) * .25 * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreBase[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreBase[i - 82]["y"]) * (306.9 * 3000) /
                                (2 * vyreBase[i - 82]["y"] + ((1 - vyreBase[i - 82]["y"]) * .75 * 10 + (1 - vyreBase[i - 82]["y"]) * .25 * 2)));
                    }
                }
            }
            // shadow veil used but not dodgy necklaces
            else if (settings["dodgy"] == false && settings["shadow"] == true) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerBase[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerBase[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerBase[i - 1]["y"] + ((1 - masterFarmerBase[i - 1]["y"]) * .85 * 10 + (1 - masterFarmerBase[i - 1]["y"]) * .15 * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightBase[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightBase[i - 55]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightBase[i - 55]["y"] + ((1 - ardyKnightBase[i - 55]["y"]) * .85 * 10 + (1 - ardyKnightBase[i - 55]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarBase[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarBase[i - 90]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarBase[i - 90]["y"] + ((1 - tzhaarBase[i - 90]["y"]) * .85 * 10 + (1 - tzhaarBase[i - 90]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfBase[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfBase[i - 85]["y"]) * (353.3 * 3000) /
                                (2 * elfBase[i - 85]["y"] + ((1 - elfBase[i - 85]["y"]) * .85 * 10 + (1 - elfBase[i - 85]["y"]) * .15 * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreBase[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreBase[i - 82]["y"]) * (306.9 * 3000) /
                                (2 * vyreBase[i - 82]["y"] + ((1 - vyreBase[i - 82]["y"]) * .85 * 10 + (1 - vyreBase[i - 82]["y"]) * .15 * 2)));
                    }
                }
            }
            // both dodgy necklaces and shadow veil are used
            else if (settings["dodgy"] == true && settings["shadow"] == true) {
                for (let i = startLevel; i <= endLevel; i++) {
                    // success rate and exp rate for master farmers
                    farmSuccess += (farmDistributions[i] / farmTotal) * masterFarmerBase[i - 1]["y"];
                    farmExpRate += (farmDistributions[i] / farmTotal) *
                        ((2 * masterFarmerBase[i - 1]["y"]) * (43 * 3000) /
                            (2 * masterFarmerBase[i - 1]["y"] + ((1 - masterFarmerBase[i - 1]["y"]) * shadowDodgyFail * 10 + (1 - masterFarmerBase[i - 1]["y"]) * shadowDodgySuccess * 2)));

                    // success rate and exp rate for ardy knights
                    if (startLevel > 54) {
                        ardySuccess += (ardyDistributions[i] / ardyTotal) * ardyKnightBase[i - 55]["y"];
                        ardyExpRate += (ardyDistributions[i] / ardyTotal) *
                            ((2 * ardyKnightBase[i - 55]["y"]) * (84.3 * 3000) /
                                (2 * ardyKnightBase[i - 55]["y"] + ((1 - ardyKnightBase[i - 55]["y"]) * shadowDodgyFail * 10 + (1 - ardyKnightBase[i - 55]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for tzhaar
                    if (startLevel > 89) {
                        tzhaarSuccess += (tzhaarDistributions[i] / tzhaarTotal) * tzhaarBase[i - 90]["y"];
                        tzhaarExpRate += (tzhaarDistributions[i] / tzhaarTotal) *
                            ((2 * tzhaarBase[i - 90]["y"]) * (103.4 * 3000) /
                                (2 * tzhaarBase[i - 90]["y"] + ((1 - tzhaarBase[i - 90]["y"]) * shadowDodgyFail * 10 + (1 - tzhaarBase[i - 90]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for elf
                    if (startLevel > 84) {
                        elfSuccess += (elfDistributions[i] / elfTotal) * elfBase[i - 85]["y"];
                        elfExpRate += (elfDistributions[i] / elfTotal) *
                            ((2 * elfBase[i - 85]["y"]) * (353.3 * 3000) /
                                (2 * elfBase[i - 85]["y"] + ((1 - elfBase[i - 85]["y"]) * shadowDodgyFail * 10 + (1 - elfBase[i - 85]["y"]) * shadowDodgySuccess * 2)));
                    }

                    // success rate and exp rate for vyre
                    if (startLevel > 81) {
                        vyreSuccess += (vyreDistributions[i] / vyreTotal) * vyreBase[i - 82]["y"];
                        vyreExpRate += (vyreDistributions[i] / vyreTotal) *
                            ((2 * vyreBase[i - 82]["y"]) * (353.3 * 3000) /
                                (2 * vyreBase[i - 82]["y"] + ((1 - vyreBase[i - 82]["y"]) * shadowDodgyFail * 10 + (1 - vyreBase[i - 82]["y"]) * shadowDodgySuccess * 2)));
                    }
                }
            }

        }

        // master farmer dom changes
        document.getElementById("farm-success-rate").innerText = farmSuccess.toLocaleString("en-US");
        document.getElementById("farm-total-fails").innerText = Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess)).toLocaleString("en-US");
        document.getElementById("farm-total-picks").innerText = Math.ceil(farmTotal / farmSuccess).toLocaleString("en-US");
        document.getElementById("farm-exp-rate").innerText = farmExpRate.toLocaleString("en-US");

        // ardy knight dom changes
        document.getElementById("ardy-success-rate").innerText = ardySuccess.toLocaleString("en-US");
        document.getElementById("ardy-total-fails").innerText = Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess)).toLocaleString("en-US");
        document.getElementById("ardy-total-picks").innerText = Math.ceil(ardyTotal / ardySuccess).toLocaleString("en-US");
        document.getElementById("ardy-exp-rate").innerText = ardyExpRate.toLocaleString("en-US");

        // tzhaar dom changes
        document.getElementById("tzhaar-success-rate").innerText = tzhaarSuccess.toLocaleString("en-US");
        document.getElementById("tzhaar-total-fails").innerText = Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess)).toLocaleString("en-US");
        document.getElementById("tzhaar-total-picks").innerText = Math.ceil(tzhaarTotal / tzhaarSuccess).toLocaleString("en-US");
        document.getElementById("tzhaar-exp-rate").innerText = tzhaarExpRate.toLocaleString("en-US");

        // elf dom changes
        document.getElementById("elf-success-rate").innerText = elfSuccess.toLocaleString("en-US");
        document.getElementById("elf-total-fails").innerText = Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess)).toLocaleString("en-US");
        document.getElementById("elf-total-picks").innerText = Math.ceil(elfTotal / elfSuccess).toLocaleString("en-US");
        document.getElementById("elf-exp-rate").innerText = elfExpRate.toLocaleString("en-US");

        // vyre dom changes
        document.getElementById("vyre-success-rate").innerText = vyreSuccess.toLocaleString("en-US");
        document.getElementById("vyre-total-fails").innerText = Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess)).toLocaleString("en-US");
        document.getElementById("vyre-total-picks").innerText = Math.ceil(vyreTotal / vyreSuccess).toLocaleString("en-US");
        document.getElementById("vyre-exp-rate").innerText = vyreExpRate.toLocaleString("en-US");

        if (settings["dodgy"] == false && settings["shadow"] == false) {
            // master farmer
            var farmFailsPerHour = (6000 - (farmExpRate * 2 / 43)) / 10;
            document.getElementById("farm-total-time").innerText = ((((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess)) * 10) + (farmTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("farm-total-damage").innerText = ((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess))) * 3).toLocaleString("en-US");
            document.getElementById("farm-damage-hr").innerText = (farmFailsPerHour * 3).toLocaleString("en-US");
            document.getElementById("farm-failed-picks-hr").innerText = farmFailsPerHour.toLocaleString("en-US");
            document.getElementById("farm-dodgy-used").innerText = "0";
            document.getElementById("farm-shadow-used").innerText = "0";

            // ardy knights
            var ardyFailsPerHour = (6000 - (ardyExpRate * 2 / 84.3)) / 10;
            document.getElementById("ardy-total-time").innerText = ((((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess)) * 10) + (ardyTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("ardy-total-damage").innerText = ((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess))) * 3).toLocaleString("en-US");
            document.getElementById("ardy-damage-hr").innerText = (ardyFailsPerHour * 3).toLocaleString("en-US");
            document.getElementById("ardy-failed-picks-hr").innerText = ardyFailsPerHour.toLocaleString("en-US");
            document.getElementById("ardy-dodgy-used").innerText = "0";
            document.getElementById("ardy-shadow-used").innerText = "0";

            // tzhaar
            var tzhaarFailsPerHour = (6000 - (tzhaarExpRate * 2 / 103.4)) / 10;
            document.getElementById("tzhaar-total-time").innerText = ((((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess)) * 10) + (tzhaarTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("tzhaar-total-damage").innerText = ((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess))) * 4).toLocaleString("en-US");
            document.getElementById("tzhaar-damage-hr").innerText = (tzhaarFailsPerHour * 4).toLocaleString("en-US");
            document.getElementById("tzhaar-failed-picks-hr").innerText = tzhaarFailsPerHour.toLocaleString("en-US");
            document.getElementById("tzhaar-dodgy-used").innerText = "0";
            document.getElementById("tzhaar-shadow-used").innerText = "0";

            // elf
            var elfFailsPerHour = (6000 - (elfExpRate * 2 / 353.3)) / 10;
            document.getElementById("elf-total-time").innerText = ((((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess)) * 10) + (elfTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("elf-total-damage").innerText = ((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess))) * 5).toLocaleString("en-US");
            document.getElementById("elf-damage-hr").innerText = (elfFailsPerHour * 5).toLocaleString("en-US");
            document.getElementById("elf-failed-picks-hr").innerText = elfFailsPerHour.toLocaleString("en-US");
            document.getElementById("elf-dodgy-used").innerText = "0";
            document.getElementById("elf-shadow-used").innerText = "0";

            // vyre
            var vyreFailsPerHour = (6000 - (vyreExpRate * 2 / 306.9)) / 10;
            document.getElementById("vyre-total-time").innerText = ((((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess)) * 10) + (vyreTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("vyre-total-damage").innerText = ((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess))) * 5).toLocaleString("en-US");
            document.getElementById("vyre-damage-hr").innerText = (vyreFailsPerHour).toLocaleString("en-US");
            document.getElementById("vyre-failed-picks-hr").innerText = vyreFailsPerHour.toLocaleString("en-US");
            document.getElementById("vyre-dodgy-used").innerText = "0";
            document.getElementById("vyre-shadow-used").innerText = "0";
        }

        else if (settings["dodgy"] == true && settings["shadow"] == false) {
            // master farmer
            var farmFailsPerHour = (6000 - (farmExpRate * 2 / 43)) / (0.75 * 10 + 0.25 * 2);
            document.getElementById("farm-total-time").innerText = ((((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * 0.75) * 10 +
                Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * 0.25) * 2) + (farmTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("farm-total-damage").innerText = ((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess))) * .75 * 3).toLocaleString("en-US");
            document.getElementById("farm-damage-hr").innerText = (farmFailsPerHour * .75 * 3).toLocaleString("en-US");
            document.getElementById("farm-failed-picks-hr").innerText = farmFailsPerHour.toLocaleString("en-US");
            document.getElementById("farm-dodgy-used").innerText = ((((1 - farmSuccess) * (farmTotal / farmSuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("farm-shadow-used").innerText = "0";

            // ardy knight
            var ardyFailsPerHour = (6000 - (ardyExpRate * 2 / 84.3)) / (0.75 * 10 + 0.25 * 2);
            document.getElementById("ardy-total-time").innerText = ((((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * 0.75) * 10 +
                Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * 0.25) * 2) + (ardyTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("ardy-total-damage").innerText = ((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess))) * .75 * 3).toLocaleString("en-US");
            document.getElementById("ardy-damage-hr").innerText = (ardyFailsPerHour * .75 * 3).toLocaleString("en-US");
            document.getElementById("ardy-failed-picks-hr").innerText = ardyFailsPerHour.toLocaleString("en-US");
            document.getElementById("ardy-dodgy-used").innerText = ((((1 - ardySuccess) * (ardyTotal / ardySuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("ardy-shadow-used").innerText = "0";

            // tzhaar
            var tzhaarFailsPerHour = (6000 - (tzhaarExpRate * 2 / 103.4)) / (0.75 * 10 + 0.25 * 2);
            document.getElementById("tzhaar-total-time").innerText = ((((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * 0.75) * 10 +
                Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * 0.25) * 2) + (tzhaarTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("tzhaar-total-damage").innerText = ((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess))) * .75 * 4).toLocaleString("en-US");
            document.getElementById("tzhaar-damage-hr").innerText = (tzhaarFailsPerHour * .75 * 4).toLocaleString("en-US");
            document.getElementById("tzhaar-failed-picks-hr").innerText = tzhaarFailsPerHour.toLocaleString("en-US");
            document.getElementById("tzhaar-dodgy-used").innerText = ((((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("tzhaar-shadow-used").innerText = "0";

            // elf
            var elfFailsPerHour = (6000 - (elfExpRate * 2 / 353.3)) / (0.75 * 10 + 0.25 * 2);
            document.getElementById("elf-total-time").innerText = ((((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * 0.75) * 10 +
                Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * 0.25) * 2) + (elfTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("elf-total-damage").innerText = ((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess))) * .75 * 5).toLocaleString("en-US");
            document.getElementById("elf-damage-hr").innerText = (elfFailsPerHour * .75 * 5).toLocaleString("en-US");
            document.getElementById("elf-failed-picks-hr").innerText = elfFailsPerHour.toLocaleString("en-US");
            document.getElementById("elf-dodgy-used").innerText = ((((1 - elfSuccess) * (elfTotal / elfSuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("elf-shadow-used").innerText = "0";

            // vyre
            var vyreFailsPerHour = (6000 - (vyreExpRate * 2 / 306.9)) / (0.75 * 10 + 0.25 * 2);
            document.getElementById("vyre-total-time").innerText = ((((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * 0.75) * 10 +
                Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * 0.25) * 2) + (vyreTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("vyre-total-damage").innerText = ((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess))) * .75 * 5).toLocaleString("en-US");
            document.getElementById("vyre-damage-hr").innerText = (vyreFailsPerHour * .75 * 5).toLocaleString("en-US");
            document.getElementById("vyre-failed-picks-hr").innerText = vyreFailsPerHour.toLocaleString("en-US");
            document.getElementById("vyre-dodgy-used").innerText = ((((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("vyre-shadow-used").innerText = "0";
        }

        else if (settings["dodgy"] == false && settings["shadow"] == true) {
            // master farmer
            var farmFailsPerHour = (6000 - (farmExpRate * 2 / 43)) / (0.85 * 10 + 0.15 * 2);
            document.getElementById("farm-total-time").innerText = ((((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * 0.85) * 10 +
                Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * 0.15) * 2) + (farmTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("farm-total-damage").innerText = ((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess))) * .85 * 3).toLocaleString("en-US");
            document.getElementById("farm-damage-hr").innerText = (farmFailsPerHour * .85 * 3).toLocaleString("en-US");
            document.getElementById("farm-failed-picks-hr").innerText = farmFailsPerHour.toLocaleString("en-US");
            document.getElementById("farm-dodgy-used").innerText = "0";
            document.getElementById("farm-shadow-used").innerText = ((((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * 0.85) * 10 +
                Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * 0.15) * 2) + (farmTotal * 2)) * 0.6) / 40).toLocaleString("en-US");

            // ardy knight
            var ardyFailsPerHour = (6000 - (ardyExpRate * 2 / 84.3)) / (0.85 * 10 + 0.15 * 2);
            document.getElementById("ardy-total-time").innerText = ((((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * 0.85) * 10 +
                Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * 0.15) * 2) + (ardyTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("ardy-total-damage").innerText = ((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess))) * .85 * 3).toLocaleString("en-US");
            document.getElementById("ardy-damage-hr").innerText = (ardyFailsPerHour * .85 * 3).toLocaleString("en-US");
            document.getElementById("ardy-failed-picks-hr").innerText = ardyFailsPerHour.toLocaleString("en-US");
            document.getElementById("ardy-dodgy-used").innerText = "0";
            document.getElementById("ardy-shadow-used").innerText = ((((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * 0.85) * 10 +
                Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * 0.15) * 2) + (ardyTotal * 2)) * 0.6) / 40).toLocaleString("en-US");

            // tzhaar
            var tzhaarFailsPerHour = (6000 - (tzhaarExpRate * 2 / 103.4)) / (0.85 * 10 + 0.15 * 2);
            document.getElementById("tzhaar-total-time").innerText = ((((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * 0.85) * 10 +
                Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * 0.15) * 2) + (tzhaarTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("tzhaar-total-damage").innerText = ((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess))) * .85 * 4).toLocaleString("en-US");
            document.getElementById("tzhaar-damage-hr").innerText = (tzhaarFailsPerHour * .85 * 4).toLocaleString("en-US");
            document.getElementById("tzhaar-failed-picks-hr").innerText = tzhaarFailsPerHour.toLocaleString("en-US");
            document.getElementById("tzhaar-dodgy-used").innerText = "0";
            document.getElementById("tzhaar-shadow-used").innerText = ((((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * 0.85) * 10 +
                Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * 0.15) * 2) + (tzhaarTotal * 2)) * 0.6) / 40).toLocaleString("en-US");

            // elf
            var elfFailsPerHour = (6000 - (elfExpRate * 2 / 353.3)) / (0.85 * 10 + 0.15 * 2);
            document.getElementById("elf-total-time").innerText = ((((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * 0.85) * 10 +
                Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * 0.15) * 2) + (elfTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("elf-total-damage").innerText = ((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess))) * .85 * 5).toLocaleString("en-US");
            document.getElementById("elf-damage-hr").innerText = (elfFailsPerHour * .85 * 5).toLocaleString("en-US");
            document.getElementById("elf-failed-picks-hr").innerText = elfFailsPerHour.toLocaleString("en-US");
            document.getElementById("elf-dodgy-used").innerText = "0";
            document.getElementById("elf-shadow-used").innerText = ((((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * 0.85) * 10 +
                Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * 0.15) * 2) + (elfTotal * 2)) * 0.6) / 40).toLocaleString("en-US");

            // vyre
            var vyreFailsPerHour = (6000 - (vyreExpRate * 2 / 306.9)) / (0.85 * 10 + 0.15 * 2);
            document.getElementById("vyre-total-time").innerText = ((((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * 0.85) * 10 +
                Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * 0.15) * 2) + (vyreTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("vyre-total-damage").innerText = ((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess))) * .85 * 5).toLocaleString("en-US");
            document.getElementById("vyre-damage-hr").innerText = (vyreFailsPerHour * .85 * 5).toLocaleString("en-US");
            document.getElementById("vyre-failed-picks-hr").innerText = vyreFailsPerHour.toLocaleString("en-US");
            document.getElementById("vyre-dodgy-used").innerText = "0";
            document.getElementById("vyre-shadow-used").innerText = ((((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * 0.85) * 10 +
                Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * 0.15) * 2) + (vyreTotal * 2)) * 0.6) / 40).toLocaleString("en-US");
        }

        else if (settings["dodgy"] == true && settings["shadow"] == true) {
            // master farmer
            var farmFailsPerHour = (6000 - (farmExpRate * 2 / 43)) / (shadowDodgyFail * 10 + shadowDodgySuccess * 2);
            document.getElementById("farm-total-time").innerText = ((((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * shadowDodgySuccess) * 2) + (farmTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("farm-total-damage").innerText = ((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess))) * shadowDodgyFail * 3).toLocaleString("en-US");
            document.getElementById("farm-damage-hr").innerText = (farmFailsPerHour * .6375 * 3).toLocaleString("en-US");
            document.getElementById("farm-failed-picks-hr").innerText = farmFailsPerHour.toLocaleString("en-US");
            document.getElementById("farm-dodgy-used").innerText = ((((1 - farmSuccess) * (farmTotal / farmSuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("farm-shadow-used").innerText = ((((Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - farmSuccess) * (farmTotal / farmSuccess) * shadowDodgySuccess) * 2) + (farmTotal * 2)) * 0.6) / 40).toLocaleString("en-US");

            // ardy knight
            var ardyFailsPerHour = (6000 - (ardyExpRate * 2 / 84.3)) / (shadowDodgyFail * 10 + shadowDodgySuccess * 2);
            document.getElementById("ardy-total-time").innerText = ((((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * shadowDodgySuccess) * 2) + (ardyTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("ardy-total-damage").innerText = ((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess))) * shadowDodgyFail * 3).toLocaleString("en-US");
            document.getElementById("ardy-damage-hr").innerText = (ardyFailsPerHour * .6375 * 3).toLocaleString("en-US");
            document.getElementById("ardy-failed-picks-hr").innerText = ardyFailsPerHour.toLocaleString("en-US");
            document.getElementById("ardy-dodgy-used").innerText = ((((1 - ardySuccess) * (ardyTotal / ardySuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("ardy-shadow-used").innerText = ((((Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - ardySuccess) * (ardyTotal / ardySuccess) * shadowDodgySuccess) * 2) + (ardyTotal * 2)) * 0.6) / 40).toLocaleString("en-US");

            // tzhaar
            var tzhaarFailsPerHour = (6000 - (tzhaarExpRate * 2 / 103.4)) / (shadowDodgyFail * 10 + shadowDodgySuccess * 2);
            document.getElementById("tzhaar-total-time").innerText = ((((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * shadowDodgySuccess) * 2) + (tzhaarTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("tzhaar-total-damage").innerText = ((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess))) * shadowDodgyFail * 4).toLocaleString("en-US");
            document.getElementById("tzhaar-damage-hr").innerText = (tzhaarFailsPerHour * .6375 * 4).toLocaleString("en-US");
            document.getElementById("tzhaar-failed-picks-hr").innerText = tzhaarFailsPerHour.toLocaleString("en-US");
            document.getElementById("tzhaar-dodgy-used").innerText = ((((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("tzhaar-shadow-used").innerText = ((((Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess) * shadowDodgySuccess) * 2) + (tzhaarTotal * 2)) * 0.6) / 40).toLocaleString("en-US");

            // elf
            var elfFailsPerHour = (6000 - (elfExpRate * 2 / 353.3)) / (shadowDodgyFail * 10 + shadowDodgySuccess * 2);
            document.getElementById("elf-total-time").innerText = ((((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * shadowDodgySuccess) * 2) + (elfTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("elf-total-damage").innerText = ((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess))) * shadowDodgyFail * 5).toLocaleString("en-US");
            document.getElementById("elf-damage-hr").innerText = (elfFailsPerHour * .6375 * 5).toLocaleString("en-US");
            document.getElementById("elf-failed-picks-hr").innerText = elfFailsPerHour.toLocaleString("en-US");
            document.getElementById("elf-dodgy-used").innerText = ((((1 - elfSuccess) * (elfTotal / elfSuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("elf-shadow-used").innerText = ((((Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - elfSuccess) * (elfTotal / elfSuccess) * shadowDodgySuccess) * 2) + (elfTotal * 2)) * 0.6) / 40).toLocaleString("en-US");

            // vyre
            var vyreFailsPerHour = (6000 - (vyreExpRate * 2 / 306.9)) / (shadowDodgyFail * 10 + shadowDodgySuccess * 2);
            document.getElementById("vyre-total-time").innerText = ((((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * shadowDodgySuccess) * 2) + (vyreTotal * 2)) * 0.6) / 3600).toLocaleString("en-US");
            document.getElementById("vyre-total-damage").innerText = ((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess))) * shadowDodgyFail * 5).toLocaleString("en-US");
            document.getElementById("vyre-damage-hr").innerText = (vyreFailsPerHour * .6375 * 5).toLocaleString("en-US");
            document.getElementById("vyre-failed-picks-hr").innerText = vyreFailsPerHour.toLocaleString("en-US");
            document.getElementById("vyre-dodgy-used").innerText = ((((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * 0.25)) / 10).toLocaleString("en-US");
            document.getElementById("vyre-shadow-used").innerText = ((((Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * shadowDodgyFail) * 10 +
                Math.ceil((1 - vyreSuccess) * (vyreTotal / vyreSuccess) * shadowDodgySuccess) * 2) + (vyreTotal * 2)) * 0.6) / 40).toLocaleString("en-US");
        }

        // master farmer
        document.getElementById("farm-picks-hr").innerText = (farmExpRate / 43).toLocaleString("en-US");
        document.getElementById("farm-ranarr-seeds").innerText = (2 * farmTotal / 302).toLocaleString("en-US");
        document.getElementById("farm-snapdragon-seeds").innerText = (2 * farmTotal / 2083).toLocaleString("en-US");
        if (settings["gloves"] == true)
            document.getElementById("farm-gloves-used").innerText = (((1 - farmSuccess) * (farmTotal / farmSuccess)) / 62).toLocaleString("en-US");
        else
            document.getElementById("farm-gloves-used").innerText = "0";

        // ardy knights
        document.getElementById("ardy-picks-hr").innerText = (ardyExpRate / 84.3).toLocaleString("en-US");
        document.getElementById("ardy-coins").innerText = (2 * ardyTotal * 50).toLocaleString("en-US");
        if (settings["gloves"] == true)
            document.getElementById("ardy-gloves-used").innerText = (((1 - ardySuccess) * (ardyTotal / ardySuccess)) / 62).toLocaleString("en-US");
        else
            document.getElementById("ardy-gloves-used").innerText = "0";

        // tzhaar
        document.getElementById("tzhaar-picks-hr").innerText = (tzhaarExpRate / 103.4).toLocaleString("en-US");
        document.getElementById("tzhaar-sapphire").innerText = (2 * tzhaarTotal / 39).toLocaleString("en-US");
        document.getElementById("tzhaar-emerald").innerText = (2 * tzhaarTotal / 49).toLocaleString("en-US");
        document.getElementById("tzhaar-ruby").innerText = (2 * tzhaarTotal / 65).toLocaleString("en-US");
        document.getElementById("tzhaar-diamond").innerText = (2 * tzhaarTotal / 195).toLocaleString("en-US");
        document.getElementById("tzhaar-tokkul").innerText = (5 * 100 * tzhaarTotal / 107).toLocaleString("en-US");
        if (settings["gloves"] == true)
            document.getElementById("tzhaar-gloves-used").innerText = (((1 - tzhaarSuccess) * (tzhaarTotal / tzhaarSuccess)) / 62).toLocaleString("en-US");
        else
            document.getElementById("tzhaar-gloves-used").innerText = "0";

        // elf
        document.getElementById("elf-picks-hr").innerText = (elfExpRate / 353.3).toLocaleString("en-US");
        document.getElementById("elf-coins").innerText = (2 * elfTotal * 315 * 100 / 122).toLocaleString("en-US");
        document.getElementById("elf-shards").innerText = (2 * elfTotal / 35).toLocaleString("en-US");
        document.getElementById("elf-enhanced-tele").innerText = (2 * elfTotal / 1024).toLocaleString("en-US");
        if (settings["gloves"] == true)
            document.getElementById("elf-gloves-used").innerText = (((1 - elfSuccess) * (elfTotal / elfSuccess)) / 62).toLocaleString("en-US");
        else
            document.getElementById("elf-gloves-used").innerText = "0";

        // vyre
        document.getElementById("vyre-picks-hr").innerText = (vyreExpRate / 306.9).toLocaleString("en-US");
        document.getElementById("vyre-coins").innerText = (2 * vyreTotal * 282 * 100 / 121).toLocaleString("en-US");
        document.getElementById("vyre-bloods").innerText = (2 * vyreTotal * 4 / 66).toLocaleString("en-US");
        document.getElementById("vyre-deaths").innerText = (2 * vyreTotal * 2 / 16.5).toLocaleString("en-US");
        document.getElementById("vyre-blood-shards").innerText = (2 * vyreTotal / 5000).toLocaleString("en-US");
        if (settings["gloves"] == true)
            document.getElementById("vyre-gloves-used").innerText = (((1 - vyreSuccess) * (vyreTotal / vyreSuccess)) / 62).toLocaleString("en-US");
        else
            document.getElementById("vyre-gloves-used").innerText = "0";
    }

    // there is no endpoint entered, only a singular
    // level has been entered, this section handles that
    else {

    }
}