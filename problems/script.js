$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Problems | Portfolio Dhanraj Chaurasia";
        $("#favicon").attr("href","/assests/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
    }
});


// fetch Problems start
function getProblems() {
    return fetch("problems.json")
    .then(response => response.json())
    .then(data => {
        return data
        })
}


function showProblems(problems) {
    let problemsContainer = document.querySelector(".work .box-container");
    let problemsHTML = "";
    problems.forEach(problem => {
        problemsHTML += `
        <div class="boxx">
      <div class="content">
        <div class="tag">
        <h3>${problem.name}</h3>
        <p><b>Difficulty: ${problem.difficulty}</b></p>
        <p>${problem.platform} ${problem.contest}</p>
        <div class="desc">
            <div class="btns">
            <a href="${problem.link}" class="btn" target="_blank">Try Problem <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
        </div>
      </div>
    </div>`
    });
    problemsContainer.innerHTML = problemsHTML;

// vanilla tilt.js
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
});
// vanilla tilt.js  

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL PROBLEMS */
srtop.reveal('.work .box',{interval: 200}); 
}

getProblems().then(data => {
    showProblems(data);
})
// fetch Problems end

// Start of Tawk.to Live Chat
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//   (function(){
//   var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//   s1.async=true;
//   s1.src='https://embed.tawk.to/62c99a01b0d10b6f3e7b8fde/1g7ho36lj';
//   s1.charset='UTF-8';
//   s1.setAttribute('crossorigin','*');
//   s0.parentNode.insertBefore(s1,s0);
//   })();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
