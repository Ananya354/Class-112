var prediction1 = "";
var prediction2 = "";

var camera = document.getElementById("camera");
Webcam.attach(camera);
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 93
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });

}

console.log("ml5.version is", ml5.version);

var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Q9oKCcpK1/model.json",modelloaded);
function modelloaded(){
console.log("Model is loaded successfully");
}

function speak(){
var synth=window.speechSynthesis;
var speakdata1="The first prediction is"+prediction1;
var speakdata2="The second prediction is"+prediction2;
var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
synth.speak(utterThis);
}

function check(){
var img_clicked=document.getElementById("captured_image");
classifier.classify(img_clicked, got_results);
}

function got_results(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
}
}
