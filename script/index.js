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



  
const resume=document.querySelectorAll('.resume');
resume.forEach((ele)=>{
  ele.addEventListener('click',function(){
    window.open('https://drive.google.com/file/d/1xj5-WUalpaiIk54bloBHIAO62UHDgNIr/view?usp=sharing','_blank')
  })
})

