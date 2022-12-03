Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="resultimg" src="' + data_uri + '"/>';

    });

}
console.log('ml5', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/38r0qFPlq/model.json', modelLoaded);

function modelLoaded() {
    console.log('modelLoaded');
}

function take_identity() {
    image = document.getElementById("resultimg");
    classifier.classify(image, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);

    } else {
        console.log(results);
        document.getElementById("result_o").innerHTML = results[0].label;
        document.getElementById("result_a").innerHTML = results[0].confidence.toFixed(2);

    }

}