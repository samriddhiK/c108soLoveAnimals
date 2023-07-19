function startClassification() 
{
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
    console.log(results);
    random_number_r = Math.floor(Math.random()* 255) +1;
    random_number_g = Math.floor(Math.random()* 255) +1;
    random_number_b = Math.floor(Math.random()* 255) +1;

    document.getElementById("result_label").innerHTML= 'Detected voice is of -'+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog -'+dog+ ' Detected Cat -'+cat+ 'Detected Lion -'+lion+ 'Detected Cow -'+cow;
    document.getElementById("result_label").style.color = 
    "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = 
    "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
        img.src = 'https://media1.giphy.com/media/a7N2LFUiZrK5CqVWPP/giphy.gif?cid=ecf05e471g8pw2mxy1yyah9u1nqvc29v0zr249gh5y6pnz1u&ep=v1_gifs_search&rid=giphy.gif&ct=g';
        dog = dog+1;
    }  else if (results[0].label == "Meowing") {
        img.src = 'https://media3.giphy.com/media/jEyKIvmt0BgLC/200.webp?cid=ecf05e47gym8k0ahmsgn32jnqhjpgpw6i56e1bl6hz796tmt&ep=v1_gifs_search&rid=200.webp&ct=g';
        cat = cat+1;
    } else if (results[0].label == "Roaring") {
        img.src = 'https://media4.giphy.com/media/7yt3dWPjVnmdzGFwpp/200w.webp?cid=ecf05e47cb2le5rqbiizm7qbddhzrngksdix3p8t3ypthm1r&ep=v1_gifs_search&rid=200w.webp&ct=g';
        lion = lion+1;
    }else  (results[0].label == "Mooing") 
        img.src = 'https://media3.giphy.com/media/FT6DYlscgddh8cTR6d/200.webp?cid=ecf05e47loung68tiva6ycijyebks84pcj655d3jtl2iw5rs&ep=v1_gifs_search&rid=200.webp&ct=g';
        cow = cow+1;
    }
    }   


    
