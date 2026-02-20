// Typing Animation
let text = "Forge | Dream Big | Never Quit";
let i = 0;

function typingEffect(){
    if(i < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}
typingEffect();

// Add Opinion
function addOpinion(){
    let name = document.getElementById("username").value;
    let feedback = document.getElementById("feedback").value;

    if(name === "" || feedback === ""){
        alert("Fill both fields!");
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbxWkyTipxo7levBe3mStVYy10T7YitQ30BQiXdH7UUju8wexYZVFswZDGF55M3UnXn45w/exec", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            opinion: feedback
        })
    })
    .then(response => response.text())
    .then(data => {
        alert("Opinion Submitted Successfully!");
    })
    .catch(error => {
        alert("Error submitting opinion.");
    });

    document.getElementById("username").value="";
    document.getElementById("feedback").value="";
}

// Scroll Reveal
window.addEventListener("scroll", function(){
    let reveals = document.querySelectorAll(".reveal");
    reveals.forEach(function(el){
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });

    // Progress Bar
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";

    // Top Button
    document.getElementById("topBtn").style.display = winScroll > 300 ? "block" : "none";
});

// Top Button Click
document.getElementById("topBtn").onclick = function(){
    window.scrollTo({top:0, behavior:"smooth"});
}
