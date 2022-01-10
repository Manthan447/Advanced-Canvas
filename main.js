x = 0;
y = 0;
Width = 0;
height = 0; 

draw_apple = "";
apple = "";

speak_data = "";
to_number  = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    to_number = Number(content);
    
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing Apple";
      draw_apple = "set";
    }

    else{
      document.getElementById("status").innerHTML = "The speech has not been recongnized in Number";
    }
}

function preload(){
  apple = loadImage("apple.png");
}

function setup() {
 Width = window.innerWidth;
 height = window.innerHeight;
 canvas = createCanvas(Width , height - 150);
 canvas.position(0 , 150);
}

function draw() {
  if(draw_apple == "set")
  { for(var i = 1; i<=to_number; i++){
    x= Math.floor(Math.random()* 700);
    y= Math.floor(Math.random()* 400);
    image(apple , x , y , 50 , 50);
  }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
