// Create a simple path

if (app.documents.length > 0) {
    setDefaultColor();

    var doc = app.activeDocument;

    var line = doc.pathItems.add();
    line.stroked = true;
    line.setEntirePath([randomStartValue(),randomStartValue()]);

    var startPoint = randomStartValue();
    var validDirections = [];


    var direcion = getRandomInt(7);
}

function randomStartValue() {
    var x = getRandomInt(15) * 100;
    var y = getRandomInt(15) * 100;

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
