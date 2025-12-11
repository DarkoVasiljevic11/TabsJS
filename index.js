
document.querySelector(".tab1").addEventListener("click",function(){
   document.querySelector(".ctab1").style.display="block";
   document.querySelector(".ctab2").style.display="none";
  document.querySelector(".ctab3").style.display="none";
  document.querySelector(".ctab4").style.display="none"; 
})

document.querySelector(".tab2").addEventListener("click",function(){
   document.querySelector(".ctab2").style.display="block";
   document.querySelector(".ctab1").style.display="none";
  document.querySelector(".ctab3").style.display="none";
  document.querySelector(".ctab4").style.display="none"; 
})
document.querySelector(".tab3").addEventListener("click",function(){
   document.querySelector(".ctab3").style.display="block";
  document.querySelector(".ctab1").style.display="none";
  document.querySelector(".ctab2").style.display="none";
  document.querySelector(".ctab4").style.display="none"; 
})
document.querySelector(".tab4").addEventListener("click",function(){
   document.querySelector(".ctab4").style.display="block";
   document.querySelector(".ctab1").style.display="none";
  document.querySelector(".ctab3").style.display="none";
  document.querySelector(".ctab2").style.display="none"; 
})
