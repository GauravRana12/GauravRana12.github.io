let list=document.querySelectorAll('.nav li');
function active(){
    list.forEach((i)=>
    i.classList.remove('active'))
    this.classList.add('active');
}
list.forEach((i)=>
i.addEventListener('click',active));
let menuToggle=document.querySelector('.menuToggle');
let header=document.querySelector('header');
menuToggle.onclick=function(){
header.classList.toggle('active');
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  
const resume=document.querySelectorAll('.resume');
resume.forEach((ele)=>{
  ele.addEventListener('click',function(){
    window.open('https://drive.google.com/file/d/1PzzBSXM3LeTXwmMnBYky0rBPxKiUsX1S/view?usp=sharing','_blank')
  })
})

