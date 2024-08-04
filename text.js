let textArea = document.querySelector(".textArea");
let btn = document.querySelector(".btn");
let speech = new SpeechSynthesisUtterance();

btn.addEventListener("click",()=>{
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
})