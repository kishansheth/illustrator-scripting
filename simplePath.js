// Create a simple path

if (app.documents.length > 0) {
    setDefaultColor();

    var doc = app.activeDocument;

    var line = doc.pathItems.add();
    line.stroked = true;
    line.setEntirePath([randomStartValue(),randomStartValue()]);

    var startPoint = randomStartValue();
    var validDirections = getValidDirections(startPoint);
    alert(startPoint);
    alert(validDirections);



    var direcion = getRandomInt(7);
}

function randomStartValue() {
    var x = getRandomInt(3) * 100;
    var y = getRandomInt(3) * 100;

    return [x,y];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function setDefaultColor() {
    var newRGBColor = new RGBColor();

    newRGBColor.red = 255;
    newRGBColor.green = 255;
    newRGBColor.blue = 0; app.activeDocument.defaultStrokeColor = newRGBColor;
}

function getValidDirections(point) {
    var x = point[0];
    var y = point[1];
    var validX = [];
    var validY = [];
    var valid = [];

    if (x == 0) {
        validX = [0,1,2,3,4];
    }
    else if (x == 300) {
        validX = [0,4,5,6,7];
    }
    else {
        validX = [0,1,2,3,4,5,6,7]
    }

    if (y == 0) {
        validY = [2,3,4,5,6];
    }
    else if (y == 300) {
        validY = [0,1,2,6,7];
    }
    else {
        validY = [0,1,2,3,4,5,6,7]
    }

    for (i = 0; i < validX.length; i++) {
        if (validY.includes(validX[i])) {
            valid.push(validX[i]);
        }
    }
    return valid;
}
